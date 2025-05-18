package com.aukevanoost.domain.entities;

import java.io.Serial;
import java.io.Serializable;

public record Teaser (
    String name,
    String image,
    Category category
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
}