package com.aukevanoost.interfaces.boundaries.featured;

import com.aukevanoost.domain.boundaries.recommendations.RecommendationsDAOFactory;
import com.aukevanoost.domain.boundaries.teaser.TeaserDAOFactory;
import com.aukevanoost.interfaces.FeaturedController;

public final class FeaturedControllerFactory {
    public static IFeaturedController inject() {
        return new FeaturedController(
            TeaserDAOFactory.inject(),
            RecommendationsDAOFactory.inject()
        );
    }
}
