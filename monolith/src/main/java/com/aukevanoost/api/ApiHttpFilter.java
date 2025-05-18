package com.aukevanoost.api;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;
import jakarta.ws.rs.ext.Provider;

import java.util.Set;

@Provider
public class ApiHttpFilter implements ContainerResponseFilter {
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
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) {
        String origin = requestContext.getHeaderString("Origin");
        if(origin != null && WHITELIST.contains(origin)) {
            responseContext.getHeaders().add("Access-Control-Allow-Origin", origin);
        }

        // CORS headers
        responseContext.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        responseContext.getHeaders().add("Access-Control-Allow-Headers", "Content-Type, Authorization");
        responseContext.getHeaders().add("Access-Control-Max-Age", "86400");

        // Cache control headers
        responseContext.getHeaders().add("Cache-Control", "no-store, no-cache, must-revalidate, private");
        responseContext.getHeaders().add("Pragma", "no-cache");
        responseContext.getHeaders().add("Expires", "0");
        responseContext.getHeaders().add("Last-Modified", String.valueOf(System.currentTimeMillis()));
    }
}
