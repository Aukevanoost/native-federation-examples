package com.aukevanoost.interfaces.boundaries.category;

import com.aukevanoost.domain.entities.Category;

import java.io.Serial;
import java.io.Serializable;

public record CategoryDTO(
    String name,
    String key
) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    public static CategoryDTO from(Category category) {
        return new CategoryDTO(
            category.name(),
            category.key()
        );
    }
}
