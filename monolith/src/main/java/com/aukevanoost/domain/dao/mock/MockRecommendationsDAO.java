package com.aukevanoost.domain.dao.mock;

import com.aukevanoost.domain.boundaries.recommendations.IRecommendationsDAO;
import com.aukevanoost.domain.dao.mock.db.Recommendations;
import com.aukevanoost.domain.entities.Recommendation;

import java.util.*;
import java.util.function.ToDoubleFunction;
import java.util.stream.Stream;

public class MockRecommendationsDAO implements IRecommendationsDAO {

    public Stream<Recommendation> getRecommendations(int maxlength, String... sku) {
        var averageColor = getAverageColor(sku);

        var excluded = Set.of(sku);
        return Recommendations.stream()
            .filter(x -> !excluded.contains(x.sku()))
            .sorted((Comparator.comparingDouble(getDistanceFrom(averageColor))))
            .limit(maxlength);
    }

    private ToDoubleFunction<Recommendation> getDistanceFrom(Integer[] avgColor) {
        return (Recommendation r) -> Math.sqrt(
            Math.pow(r.rgb()[0] - avgColor[0], 2) +
            Math.pow(r.rgb()[1] - avgColor[1], 2) +
            Math.pow(r.rgb()[2] - avgColor[2], 2)
        );
    }

    private Integer[] getAverageColor(String... sku) {
        var colors = Arrays.stream(sku)
            .map(Recommendations.ALL::get)
            .filter(Objects::nonNull)
            .map(Recommendation::rgb)
            .toList();

        int size = colors.size();
        Integer[] totalRGB = colors.stream().reduce(
            new Integer[] {0,0,0},
            (a, b) -> new Integer[] {a[0] + b[0], a[1] + b[1], a[2] + b[2]}
        );

        return new Integer[] {
            Math.round((float) totalRGB[0] / size),
            Math.round((float) totalRGB[1] / size),
            Math.round((float) totalRGB[2] / size)
        };
    }

}
