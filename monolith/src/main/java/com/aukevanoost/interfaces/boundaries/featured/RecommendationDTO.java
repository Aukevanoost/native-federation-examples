package com.aukevanoost.interfaces.boundaries.featured;

import com.aukevanoost.domain.entities.Recommendation;

import java.io.Serial;
import java.io.Serializable;

public record RecommendationDTO(
    String sku,
    String name,
    String image,
    String productSku
    ) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    public static RecommendationDTO from(Recommendation recommendation) {
        return new RecommendationDTO(
            recommendation.sku(),
            recommendation.name(),
            recommendation.image(),
            recommendation.productSku()
        );
    }
}
