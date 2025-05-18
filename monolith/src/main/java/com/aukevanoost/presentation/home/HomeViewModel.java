package com.aukevanoost.presentation.home;

import com.aukevanoost.interfaces.boundaries.featured.IFeaturedController;
import com.aukevanoost.interfaces.boundaries.featured.TeaserDTO;
import com.aukevanoost.interfaces.boundaries.featured.RecommendationDTO;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

public record HomeViewModel(
    List<TeaserDTO> teasers,
    List<RecommendationDTO> recommendations
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public static HomeViewModel from(IFeaturedController controller) {
        return new HomeViewModel(
            controller.getTeasers(),
            controller.getRecommendations("CL-01-GY", "AU-07-MT")
        );
    }
}
