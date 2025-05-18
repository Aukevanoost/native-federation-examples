package com.aukevanoost.interfaces.boundaries.cart;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public record CartDTO(Map<String, CartProductDTO> products) {

    public static CartDTO empty() {
        return new CartDTO(new HashMap<>());
    }

    public static CartDTO of(List<CartProductDTO> items) {
        return new CartDTO(
            items.stream().collect(Collectors.toMap(x -> x.key(), Function.identity()))
        );
    }

    public static CartDTO of(Map<String, CartProductDTO> products) {
        return new CartDTO(new HashMap<>(products));
    }

    @Override
    public Map<String, CartProductDTO> products() {
        return Map.copyOf(products);
    }

    public Stream<CartProductDTO> products$() {
        return products.values().stream();
    }

    public CartProductDTO get(String productSku, String variantSku) {
        return products.get(CartProductDTO.key(productSku, variantSku));
    }

    public CartDTO add(CartProductDTO product) {
        var copy = new HashMap<>(products);
        copy.compute(product.key(), (sku, existingItem) -> {
            if (existingItem != null) {
                return existingItem.append(product.quantity());
            } else {
                return product;
            }
        });
        return new CartDTO(copy);
    }

    public CartDTO update(CartProductDTO item) {
        var copy = new HashMap<>(products);
        copy.put(item.key(), item);
        return new CartDTO(copy);
    }

    public CartDTO remove(String sku) {
        var copy = new HashMap<>(products);
        copy.remove(sku);
        return new CartDTO(copy);
    }
}
