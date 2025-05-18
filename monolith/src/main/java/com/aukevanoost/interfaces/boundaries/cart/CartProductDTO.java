package com.aukevanoost.interfaces.boundaries.cart;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

public record CartProductDTO(
    String productSku,
    String variantSku,
    int quantity
) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    public CartProductDTO update(int quantity) {
        return new CartProductDTO(productSku(), variantSku(), quantity);
    }

    public CartProductDTO append(int quantity) {
        return this.update(quantity() + quantity);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartProductDTO cartItem = (CartProductDTO) o;
        return key().equals(cartItem.key());
    }

    public static CartProductDTO from(String productSku, String variantSku) {
        return new CartProductDTO(productSku, variantSku,  1);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key());
    }

    public static String key(String productSku, String variantSku) {
        return productSku + ":" + variantSku;
    }

    public static String key(CartProductDTO product) {
        return key(product.productSku(), product.variantSku());
    }

    public String key() {
        return CartProductDTO.key(this);
    }
}
