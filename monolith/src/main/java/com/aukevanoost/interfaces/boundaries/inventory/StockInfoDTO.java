package com.aukevanoost.interfaces.boundaries.inventory;

import com.aukevanoost.domain.entities.Product;
import com.aukevanoost.domain.entities.Variant;

import java.io.Serial;
import java.io.Serializable;

public record StockInfoDTO(
    String productSku,
    String variantSku,
    String name,
    int price,
    Integer inventory
) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    public static StockInfoDTO from(Product product, Variant variant){
        return new StockInfoDTO(
            product.sku(),
            variant.sku(),
            variant.name(),
            variant.price(),
            variant.inventory()
        );
    }
}
