package com.aukevanoost.interfaces.boundaries.category;

import com.aukevanoost.domain.entities.Category;

import java.io.Serial;
import java.io.Serializable;

public record CategoryFilterDTO(
    String url,
    String name,
    Boolean active
) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    public static CategoryFilterDTO from(String url, String name, Boolean isActive) {
        return new CategoryFilterDTO(url, name, isActive);
    }

    public static CategoryFilterDTO from(Category cat, String url, Boolean isActive) {
        return new CategoryFilterDTO(
            url,
            cat.name(),
            isActive
        );
    }
}
