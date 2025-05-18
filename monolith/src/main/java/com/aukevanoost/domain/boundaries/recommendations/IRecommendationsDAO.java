package com.aukevanoost.domain.boundaries.recommendations;

import com.aukevanoost.domain.entities.Recommendation;
import java.util.stream.Stream;

public interface IRecommendationsDAO {
    Stream<Recommendation> getRecommendations(int maxlength, String ...sku);
}
