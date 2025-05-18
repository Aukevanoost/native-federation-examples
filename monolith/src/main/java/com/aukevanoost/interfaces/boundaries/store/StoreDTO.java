package com.aukevanoost.interfaces.boundaries.store;

import com.aukevanoost.domain.entities.Store;

import java.io.Serial;
import java.io.Serializable;

public record StoreDTO(
    String id,
    String name,
    String street,
    String city,
    String image
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public static StoreDTO from(Store store) {
        return new StoreDTO(
            store.id(),
            store.name(),
            store.street(),
            store.city(),
            store.image()
        );
    }
}
