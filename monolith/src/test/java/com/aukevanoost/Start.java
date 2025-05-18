package com.aukevanoost;

import com.aukevanoost.presentation._core.WicketHttpFilter;
import jakarta.servlet.DispatcherType;
import org.eclipse.jetty.ee10.servlet.FilterHolder;
import org.eclipse.jetty.io.Connection;
import org.eclipse.jetty.io.EndPoint;
import org.eclipse.jetty.server.*;

import org.eclipse.jetty.ee10.webapp.WebAppContext;
import org.eclipse.jetty.util.component.LifeCycle;
import org.eclipse.jetty.util.thread.QueuedThreadPool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.EnumSet;
import java.util.concurrent.atomic.AtomicInteger;

public class Start {
	private static final Logger log = LoggerFactory.getLogger(Start.class);

	public static void main(String[] args) throws Exception {
		System.setProperty("wicket.configuration", "deployment");
		log.info("Starting servers...");

		Server wicketServer = null;
		RestApiServer restServer = null;

		try {
			log.info("Initializing Wicket server on port 8080...");

			wicketServer = new Server();

			HttpConfiguration httpConfig = new HttpConfiguration();
			httpConfig.setSecureScheme("https");
			httpConfig.setSecurePort(8443);
			httpConfig.setOutputBufferSize(32768);

			ServerConnector http = new ServerConnector(wicketServer, new HttpConnectionFactory(httpConfig));
			http.setPort(8080);
			http.setIdleTimeout(1000 * 60 * 60);

			wicketServer.addConnector(http);

			WebAppContext bb = new WebAppContext();
			bb.setServer(wicketServer);
			bb.setContextPath("/");
			bb.setWar("src/main/webapp");

            FilterHolder httpFilter = new FilterHolder(new WicketHttpFilter());
            bb.addFilter(httpFilter, "/*", EnumSet.of(DispatcherType.REQUEST));

			wicketServer.setHandler(bb);

			// Initialize REST Server
			log.info("Initializing REST server on port 8081...");
			restServer = new RestApiServer(8081);

			// Start both servers
			log.info("Starting Wicket server...");
			LifeCycle.start(wicketServer);
			log.info("Wicket server started successfully");

			log.info("Starting REST server...");
			restServer.start();
			log.info("REST server started successfully");

			wicketServer.join();
		} catch (Exception e) {
			log.error("Error starting servers", e);
			throw e;
		}
	}
}