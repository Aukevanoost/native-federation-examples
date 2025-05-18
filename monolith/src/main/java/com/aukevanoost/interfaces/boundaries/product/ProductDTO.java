package com.aukevanoost.interfaces.boundaries.product;

import com.aukevanoost.domain.entities.Product;
import com.aukevanoost.domain.entities.Variant;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

public record ProductDTO(
    String sku,
    String name,
    String image,
    String color,
    List<String> highlights
) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    public static ProductDTO from(Product product, Variant variant){
        return new ProductDTO(
            product.sku(),
            product.name(),
            variant.image(),
            variant.color(),
            product.highlights()
        );
    }
}
