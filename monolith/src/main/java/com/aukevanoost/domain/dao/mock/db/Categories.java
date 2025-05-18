package com.aukevanoost.domain.dao.mock.db;

import com.aukevanoost.domain.entities.Category;
import com.aukevanoost.domain.entities.Product;

import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Categories {
    public static Map<String, Category> ALL = Map.ofEntries(
        Map.entry("classic", new Category(
            "classic",
            "Classics"
        )),
        Map.entry("autonomous", new Category(
            "autonomous",
            "Autonomous"
        )),
        Map.entry("all", new Category(
            "all",
            "All machines"
        ))
    );

    public static Map<String, List<Product>> PRODUCTS = Map.ofEntries(
        Map.entry("all", Products.ALL.values().stream().toList()),
        Map.entry("classic", IntStream.rangeClosed(1, 15).mapToObj(Products.getByID("CL")).toList()),
        Map.entry("autonomous", IntStream.rangeClosed(1, 8).mapToObj(Products.getByID("AU")).toList())
    );

    public static Stream<Category> stream() {
        return ALL.values().stream();
    }
}