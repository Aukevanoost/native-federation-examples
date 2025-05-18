package com.aukevanoost.interfaces.boundaries.featured;

import java.util.List;

public interface IFeaturedController{
    List<TeaserDTO> getTeasers();
    List<RecommendationDTO> getRecommendations(String... skus);
}
