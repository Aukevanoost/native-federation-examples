package com.aukevanoost.presentation._core;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

public class WicketHttpFilter implements Filter {

    private static final Set<String> WHITELIST = Set.of(
        // CDN
        "http://localhost:4000",
        // SSR
        "http://localhost:4001",
        "http://localhost:4002",
        // CSR
        "http://localhost:4200",
        "http://localhost:4201",
        "http://localhost:4202",
        // WICKET
        "http://localhost:8080",
        // DISCOVERY
        "http://localhost:3000"
    );

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
        throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String origin = ((HttpServletRequest) request).getHeader("Origin");

        if(origin != null && WHITELIST.contains(origin)) {
            httpResponse.setHeader("Access-Control-Allow-Origin", origin);
        }
        // Set CORS headers
        httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS");
        httpResponse.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin");
        httpResponse.setHeader("Access-Control-Max-Age", "1800");

        // Add cache control headers
        httpResponse.setHeader("Cache-Control", "no-cache");

        httpResponse.setHeader("Pragma", "no-cache");
        httpResponse.setDateHeader("Expires", 0);

        // Handle preflight requests
        if ("OPTIONS".equalsIgnoreCase(httpRequest.getMethod())) {
            httpResponse.setStatus(HttpServletResponse.SC_OK);
            return;
        }

        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {}

    @Override
    public void destroy() {}
}
