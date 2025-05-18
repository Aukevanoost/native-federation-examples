package com.aukevanoost;

import com.aukevanoost.api.RestApplication;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.ee10.servlet.ServletContextHandler;
import org.eclipse.jetty.ee10.servlet.ServletHolder;
import org.jboss.resteasy.plugins.server.servlet.HttpServletDispatcher;
import org.jboss.resteasy.core.ResteasyDeploymentImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RestApiServer {
    private static final Logger log = LoggerFactory.getLogger(RestApiServer.class);

    private final Server server;
    private final int port;

    public RestApiServer(int port) {
        this.port = port;
        this.server = new Server();
        log.info("Created REST server instance on port {}", port);
    }

    public void start() throws Exception {
        log.info("Starting REST server configuration...");

        ServerConnector connector = new ServerConnector(server);
        connector.setPort(port);
        server.addConnector(connector);

        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");

        log.info("Configuring RESTEasy...");
        ResteasyDeploymentImpl deployment = new ResteasyDeploymentImpl();
        deployment.setApplication(new RestApplication());

        ServletHolder resteasyServlet = new ServletHolder(new HttpServletDispatcher());
        resteasyServlet.setInitParameter("jakarta.ws.rs.Application", RestApplication.class.getName());
        resteasyServlet.setInitParameter("resteasy.servlet.mapping.prefix", "/v1");

        log.info("Adding RESTEasy servlet mapping for /v1/*");
        context.addServlet(resteasyServlet, "/v1/*");
        context.setAttribute(ResteasyDeploymentImpl.class.getName(), deployment);

        server.setHandler(context);

        log.info("Starting REST server...");
        server.start();
        log.info("REST server started successfully on port {}", port);
    }

    public void stop() throws Exception {
        log.info("Stopping REST server...");
        if (server != null) {
            server.stop();
            log.info("REST server stopped");
        }
    }

    public boolean isRunning() {
        return server != null && server.isRunning();
    }
}