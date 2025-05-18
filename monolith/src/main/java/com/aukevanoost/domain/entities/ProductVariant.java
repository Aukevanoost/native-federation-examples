package com.aukevanoost.domain.entities;

public record ProductVariant<A, B> (A product, B variant) {

    public static <A, B> ProductVariant<A, B> of(A a, B b) {
        return new ProductVariant<>(a, b);
    }
} 