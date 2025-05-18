package com.aukevanoost.domain.entities;

import java.io.Serial;
import java.io.Serializable;
import java.util.stream.IntStream;

public record Variant(
    String name,
    String image,
    String sku,
    String color,
    Integer price,
    Integer inventory
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public Integer[] rgb() {
        final var OFFSET = 1;
        final var SIZE = 2;
        return IntStream.rangeClosed(0, 2)
            .mapToObj(i -> Integer.parseInt(
                color().substring(
                    OFFSET + (i * SIZE),
                    OFFSET + (i * SIZE) + SIZE
                ),
                16
            ))
            .toArray(Integer[]::new);
    }
}
