package com.aukevanoost.domain.entities;

import java.io.Serial;
import java.io.Serializable;

public record Store (
    String id,
    String name,
    String street,
    String city,
    String image
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
}