package com.aukevanoost.api.auth;

import com.aukevanoost.interfaces.AuthController;
import com.aukevanoost.interfaces.boundaries.auth.AuthControllerFactory;
import com.aukevanoost.interfaces.boundaries.auth.IAuthController;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthResource {
    private final IAuthController controller = AuthControllerFactory.inject();

    @GET
    @Path("/token")
    public Response token() {
        String token = controller.generateToken();

        AuthResponse response = new AuthResponse(
            token,
            "Bearer",
            AuthController.JWT_EXPIRATION / 1000
        );

        return Response.ok(response).build();
    }

    @GET
    @Path("/data")
    public Response getProtectedData(@HeaderParam(HttpHeaders.AUTHORIZATION) String authHeader) {

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return Response.status(Response.Status.UNAUTHORIZED)
                .entity("Missing or invalid Authorization header")
                .build();
        }

        String token = authHeader.substring("Bearer ".length());

        if (!controller.validateToken(token)) {
            return Response.status(Response.Status.UNAUTHORIZED)
                .entity("Invalid token")
                .build();
        }

        return Response.ok("Successful").build();
    }
}
