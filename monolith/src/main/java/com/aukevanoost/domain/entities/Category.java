package com.aukevanoost.domain.entities;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;
import java.util.stream.Stream;

public record Category(
    String key,
    String name
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
}