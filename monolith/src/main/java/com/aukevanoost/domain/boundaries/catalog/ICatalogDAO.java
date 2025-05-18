package com.aukevanoost.domain.boundaries.catalog;

import com.aukevanoost.domain.dao.mock.MockCatalogDAO;
import com.aukevanoost.domain.entities.Category;
import com.aukevanoost.domain.entities.Product;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public interface ICatalogDAO {
    Optional<List<Product>> getProductsByCategory(String category);
    Optional<Product> getProductBySKU(String sku);
    Stream<Category> getAllCategories();
    Optional<Category> getCategory(String category);

}
