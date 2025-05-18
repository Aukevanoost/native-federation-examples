package com.aukevanoost.domain.entities;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;
import java.util.stream.Stream;

public record Product(
    String name,
    String sku,
    List<String> highlights,
    List<Variant> variants
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public Stream<Variant> variants$() {
        return variants.stream();
    }

    public Stream<String> highlights$() {
        return highlights.stream();
    }
}