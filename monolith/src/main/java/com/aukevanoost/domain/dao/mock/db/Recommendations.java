package com.aukevanoost.domain.dao.mock.db;

import com.aukevanoost.domain.entities.Recommendation;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Recommendations {
    public static Map<String, Recommendation> ALL = Products.ALL.values()
        .stream()
        .flatMap(
            p -> p.variants()
                .stream()
                .map(v -> Map.entry(v.sku(), Recommendation.fromProduct(p, v.sku())))
        )
        .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

    public static Stream<Recommendation> stream() {
        return ALL.values().stream();
    }
}
