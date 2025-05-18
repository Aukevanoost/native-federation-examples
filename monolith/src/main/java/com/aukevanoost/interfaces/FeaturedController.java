package com.aukevanoost.interfaces;

import com.aukevanoost.domain.boundaries.recommendations.IRecommendationsDAO;
import com.aukevanoost.domain.boundaries.teaser.ITeaserDAO;
import com.aukevanoost.interfaces.boundaries.featured.TeaserDTO;
import com.aukevanoost.interfaces.boundaries.featured.IFeaturedController;
import com.aukevanoost.interfaces.boundaries.featured.RecommendationDTO;

import java.util.List;

public class FeaturedController implements IFeaturedController {
    private ITeaserDAO teaserDAO;
    private IRecommendationsDAO recommendedDAO;

    public FeaturedController(ITeaserDAO teaserDAO, IRecommendationsDAO recommendedDAO) {
        this.teaserDAO = teaserDAO;
        this.recommendedDAO = recommendedDAO;
    }

    public List<TeaserDTO> getTeasers() {
        return teaserDAO
            .getAll()
            .map(TeaserDTO::from)
            .toList();
    }

//    public List<RecommendationDTO> getRecommendations() {
//        return recommendedDAO
//            .getRecommendations(4, "CL-01-GY", "AU-07-MT")
//            .map(RecommendationDTO::from)
//            .toList();
//    }
//
    public List<RecommendationDTO> getRecommendations(String... skus) {
        return recommendedDAO
            .getRecommendations(4, skus)
            .map(RecommendationDTO::from)
            .toList();
    }



}
