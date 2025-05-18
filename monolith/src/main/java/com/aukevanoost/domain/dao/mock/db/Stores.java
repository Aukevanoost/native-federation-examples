package com.aukevanoost.domain.dao.mock.db;

import com.aukevanoost.domain.entities.Store;

import java.util.List;
import java.util.stream.Stream;

public class Stores {
    public static List<Store> ALL = List.of(
        new Store(
            "store-a",
            "Aurom Flagship Store",
            "Astronaut Way 1",
            "Arlington",
            "/img/store/[size]/store-1.webp"
        ),
        new Store(
            "store-b",
            "Big Micro Machines",
            "Broadway 2",
            "Burlington",
            "/img/store/[size]/store-2.webp"
        ),
        new Store(
            "store-c",
            "Central Mall",
            "Clown Street 3",
            "Cryo",
            "/img/store/[size]/store-3.webp"
        ),
        new Store(
            "store-d",
            "Downtown Model Store",
            "Duck Street 4",
            "Davenport",
            "/img/store/[size]/store-4.webp"
        )
    );

    public static Stream<Store> stream() {
        return ALL.stream();
    }
}
