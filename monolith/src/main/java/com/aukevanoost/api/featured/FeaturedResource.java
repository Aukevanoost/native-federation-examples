package com.aukevanoost.api.featured;

import com.aukevanoost.interfaces.boundaries.featured.FeaturedControllerFactory;
import com.aukevanoost.interfaces.boundaries.featured.IFeaturedController;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/featured")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class FeaturedResource {
    private transient IFeaturedController controller;

    public FeaturedResource() {
        this.controller = FeaturedControllerFactory.inject();

    }
    @GET
    @Path("/teasers")
    public Response get() {
        return Response.ok().entity(controller.getTeasers()).build();
    }

    @POST
    @Path("/recommendations")
    public Response getRecommendations(RecommendationsRequest request) {
        return Response.ok().entity(
            controller.getRecommendations(request.getSku().toArray(String[]::new))
        ).build();
    }
}
