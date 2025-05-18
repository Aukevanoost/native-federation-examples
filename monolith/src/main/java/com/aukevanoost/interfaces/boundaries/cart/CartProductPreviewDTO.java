package com.aukevanoost.interfaces.boundaries.cart;

import com.aukevanoost.domain.entities.Product;
import com.aukevanoost.domain.entities.ProductVariant;
import com.aukevanoost.domain.entities.Variant;

import java.io.Serial;
import java.io.Serializable;

public record CartProductPreviewDTO(
    String productSku,
    String variantSku,
    String name,
    String image,
    int totalPrice,
    int quantity
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public static CartProductPreviewDTO from(ProductVariant<Product, Variant> pv, int quantity) {
        return new CartProductPreviewDTO(
            pv.product().sku(),
            pv.variant().sku(),
            pv.variant().name(),
            pv.variant().image(),
            pv.variant().price() * quantity,
            quantity
        );
    }

    public static CartProductPreviewDTO from(ProductVariant<Product, Variant> pv) {
        return from(pv, 1);
    }
}