package com.aukevanoost.domain.entities;

import java.io.Serial;
import java.io.Serializable;

public record Recommendation(
    String sku,
    String name,
    String image,
    String productSku,
    Integer[] rgb
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public static Recommendation fromProduct(
        Product product,
        String variantSKU
    ) {
        var variant = product.variants()
            .stream()
            .filter(v -> v.sku().equals(variantSKU))
            .findFirst()
            .orElseThrow();

        return new Recommendation(
            variant.sku(),
            product.name(),
            variant.image(),
            product.sku(),
            variant.rgb()
        );
    }
}
