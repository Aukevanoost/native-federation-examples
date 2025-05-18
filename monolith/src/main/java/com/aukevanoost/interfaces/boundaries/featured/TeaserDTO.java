package com.aukevanoost.interfaces.boundaries.featured;

import com.aukevanoost.domain.entities.Teaser;

import java.io.Serial;
import java.io.Serializable;

public record TeaserDTO(
    String title,
    String image,
    String key
) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    public static TeaserDTO from(Teaser teaser) {
        return new TeaserDTO(
            teaser.name(),
            teaser.image(),
            teaser.category().key()
        );
    }
}
