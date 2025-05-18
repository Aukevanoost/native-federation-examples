package com.aukevanoost.domain.boundaries.inventory;

import com.aukevanoost.domain.entities.Product;
import com.aukevanoost.domain.entities.ProductVariant;
import com.aukevanoost.domain.entities.Variant;

import java.util.List;
import java.util.Optional;

public interface IInventoryDAO {
    Optional<Product> getProductBySKU(String sku);

    List<ProductVariant<Product, Variant>> getProductVariantsBySKU(List<ProductVariant<String, String>> skus);
}