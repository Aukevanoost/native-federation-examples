package com.aukevanoost.domain.dao.mock;

import com.aukevanoost.domain.boundaries.inventory.IInventoryDAO;
import com.aukevanoost.domain.dao.mock.db.Products;
import com.aukevanoost.domain.entities.Product;
import com.aukevanoost.domain.entities.ProductVariant;
import com.aukevanoost.domain.entities.Variant;

import java.util.List;
import java.util.Optional;

public class MockInventoryDAO implements IInventoryDAO {
    @Override
    public Optional<Product> getProductBySKU(String sku) {
        return Optional.of(Products.ALL.get(sku));
    }

    @Override
    public List<ProductVariant<Product, Variant>> getProductVariantsBySKU(List<ProductVariant<String, String>> skus) {
        return skus.stream()
            .map(t -> ProductVariant.of(Products.ALL.get(t.product()), t.variant()))
            .filter(t -> t.product() != null)
            .map(t -> ProductVariant.of(t.product(), t.product().variants().stream()
                .filter(v -> v.sku().equals(t.variant()))
                .findFirst()
                .orElse(null)
            ))
            .filter(t -> t.variant() != null)
            .toList();
    }
}
