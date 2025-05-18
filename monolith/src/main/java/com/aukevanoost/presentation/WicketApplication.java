package com.aukevanoost.presentation;

import com.aukevanoost.presentation.cart.CartPage;
import com.aukevanoost.presentation.home.HomePage;
import com.aukevanoost.presentation.category.CategoryPage;
import com.aukevanoost.presentation.product.ProductPage;
import com.aukevanoost.presentation.store.StoresPage;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.wicket.Session;
import org.apache.wicket.markup.head.filter.JavaScriptFilteredIntoFooterHeaderResponse;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.protocol.http.WebApplication;
import org.apache.wicket.request.IRequestHandler;
import org.apache.wicket.request.Request;
import org.apache.wicket.request.Response;
import org.apache.wicket.request.cycle.IRequestCycleListener;
import org.apache.wicket.request.cycle.RequestCycle;
import org.apache.wicket.request.resource.caching.NoOpResourceCachingStrategy;
import org.apache.wicket.settings.RequestCycleSettings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.time.Duration;

/**
 * Application object for your web application.
 * If you want to run this application without deploying, run the Start class.
 * 
 * @see com.aukevanoost.Start#main(String[])
 */
public class WicketApplication extends WebApplication
{
	/**
	 * @see org.apache.wicket.Application#getHomePage()
	 */
	@Override
	public Class<? extends WebPage> getHomePage()
	{
		return HomePage.class;
	}

	/**
	 * @see org.apache.wicket.Application#init()
	 */
	@Override
	public void init()
	{
		super.init();
//		getRequestCycleListeners().add(new ResourceMonitoringFilter());

		getMarkupSettings().setStripWicketTags(true);

		// DISABLE CACHING
		getResourceSettings().setCachingStrategy(NoOpResourceCachingStrategy.INSTANCE);
		getResourceSettings().setDefaultCacheDuration(Duration.ZERO);
		getResourceSettings().setResourcePollFrequency(Duration.ZERO);

		getCspSettings().blocking().disabled();
//		getCspSettings().blocking()
//			.remove(CSPDirective.STYLE_SRC)
//			.add(CSPDirective.STYLE_SRC, CSPDirectiveSrcValue.SELF, CSPDirectiveSrcValue.UNSAFE_INLINE)
//			.add(CSPDirective.SCRIPT_SRC, "https://ga.jspm.io", CSPDirectiveSrcValue.UNSAFE_INLINE)
//			.add(CSPDirective.FONT_SRC, CSPDirectiveSrcValue.SELF);

		getHeaderResponseDecorators().add(response ->
			new JavaScriptFilteredIntoFooterHeaderResponse(response, "footer-container"));


		// add your configuration here
		mountPage("/products/#{category}", CategoryPage.class);
		mountPage("/product/${product}/#{variant}", ProductPage.class);
		mountPage("/stores", StoresPage.class);
		mountPage("/cart", CartPage.class);

		getRequestCycleSettings().setRenderStrategy(
			RequestCycleSettings.RenderStrategy.ONE_PASS_RENDER);
//		setPageManagerProvider(new DefaultPageManagerProvider(this) {
//			@Override
//			public IPageManager get() {
//				IPageStore store = this.newPersistentStore();
//				store = this.newCryptingStore(store);
//				store = this.newAsynchronousStore(store);
//				store = this.newSerializingStore(store);
//				store = this.newCachingStore(store);
//				store = this.newRequestStore(store);
//				return new InstrumentedPageManager(store);
//			}
//		});
	}

	@Override
	public Session newSession(Request request, Response response) {
		return new StoreSession(request);
	}
}

class ResourceMonitoringFilter implements IRequestCycleListener {
	private static final Logger log = LoggerFactory.getLogger(ResourceMonitoringFilter.class);
	private final Map<String, RequestTiming> resourceTimings = new ConcurrentHashMap<>();

	private static class RequestTiming {
		final long startTime;
		final String threadName;
		final long startFreeMemory;
		final long startTotalMemory;
		final long startMaxMemory;

		RequestTiming(String threadName) {
			this.startTime = System.nanoTime();
			this.threadName = threadName;
			this.startFreeMemory = Runtime.getRuntime().freeMemory();
			this.startTotalMemory = Runtime.getRuntime().totalMemory();
			this.startMaxMemory = Runtime.getRuntime().maxMemory();
		}

		String getMemoryStats(long endFreeMemory, long endTotalMemory) {
			long memoryDelta = endFreeMemory - startFreeMemory;
			long totalMemoryDelta = endTotalMemory - startTotalMemory;
			double usedMemoryPct = ((double)(endTotalMemory - endFreeMemory) / endTotalMemory) * 100;

			return String.format(
				"Memory Delta: %d bytes, Total Memory Delta: %d bytes, Used Memory: %.2f%%",
				memoryDelta, totalMemoryDelta, usedMemoryPct
			);
		}
	}

	@Override
	public void onBeginRequest(RequestCycle cycle) {
		String url = cycle.getRequest().getUrl().toString();
		if (url.contains("img/scene/")) {
			String threadName = Thread.currentThread().getName();
			resourceTimings.put(url, new RequestTiming(threadName));
			log.info("Starting image request: {} on thread: {}", url, threadName);
		}
	}

	@Override
	public void onEndRequest(RequestCycle cycle) {
		String url = cycle.getRequest().getUrl().toString();
		if (url.contains("img/scene/")) {
			HttpServletResponse httpResponse = (HttpServletResponse) cycle.getResponse().getContainerResponse();
			RequestTiming timing = resourceTimings.remove(url);

			if (timing != null) {
				long duration = System.nanoTime() - timing.startTime;
				long endFreeMemory = Runtime.getRuntime().freeMemory();
				long endTotalMemory = Runtime.getRuntime().totalMemory();

				log.info("Completed image request: {} - Duration: {} Ns - Thread: {} - {} - Status: {}",
					url,
					duration,
					timing.threadName,
					timing.getMemoryStats(endFreeMemory, endTotalMemory),
					httpResponse.getStatus()
				);
			}
		}
	}

	@Override
	public IRequestHandler onException(RequestCycle cycle, Exception ex) {
		String url = cycle.getRequest().getUrl().toString();
		if (url.contains("img/scene/")) {
			log.error("Error handling image request: " + url, ex);
			resourceTimings.remove(url);
		}
		return null;
	}
}
//
//class InstrumentedPageManager extends PageManager {
//	public InstrumentedPageManager(IPageStore pageStore) {
//		super(pageStore);
//	}
//
//	@Override
//	public void touchPage(IManageablePage page) {
//		super.touchPage(page);
//		// Log memory usage
//		Runtime runtime = Runtime.getRuntime();
//		long memory = runtime.totalMemory() - runtime.freeMemory();
//		System.out.println("Page " + page.getPageId() + " touched, current memory usage: " + memory / 1048576 + " MB");
//	}
//
//	@Override
//	public IManageablePage getPage(int id) {
//		IManageablePage page = super.getPage(id);
//		// Log memory usage
//		Runtime runtime = Runtime.getRuntime();
//		long memory = runtime.totalMemory() - runtime.freeMemory();
//		System.out.println("Page " + id + " loaded, current memory usage: " + memory / 1048576 + " MB");
//		return page;
//	}
//}