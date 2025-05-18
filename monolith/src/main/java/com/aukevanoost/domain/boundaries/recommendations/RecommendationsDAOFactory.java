package com.aukevanoost.domain.boundaries.recommendations;

import com.aukevanoost.domain.dao.mock.MockRecommendationsDAO;

public class RecommendationsDAOFactory {
    public static IRecommendationsDAO inject() {
        return new MockRecommendationsDAO();
    }
}
