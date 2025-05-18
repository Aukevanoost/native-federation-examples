package com.aukevanoost.interfaces;

import com.aukevanoost.domain.boundaries.catalog.ICatalogDAO;
import com.aukevanoost.domain.entities.Category;
import com.aukevanoost.interfaces.boundaries.category.*;
import com.aukevanoost.interfaces.boundaries.category.CategoryDTO;
import com.aukevanoost.interfaces.boundaries.category.CategoryFilterDTO;
import com.aukevanoost.interfaces.boundaries.category.ProductPreviewDTO;
import com.aukevanoost.presentation.category.CategoryViewModel;

import java.util.function.Function;
import java.util.stream.Stream;

public class CategoryController implements ICategoryController {
    private final ICatalogDAO catalogDAO;

    public CategoryController(ICatalogDAO catalogDAO) {
        this.catalogDAO = catalogDAO;
    }

    public CategoryDTO get(String categoryID) {
        return this.catalogDAO
            .getCategory(categoryID)
            .map(CategoryDTO::from)
            .orElseThrow(() -> new IllegalArgumentException("Category not found"));
    }

    public Stream<CategoryFilterDTO> getFilters(String activeCategoryID) {
        return this.catalogDAO
            .getAllCategories()
            .map(this.mapToFilter(activeCategoryID));
    }

    public Stream<ProductPreviewDTO> getProducts(String categoryID) {
        return this.catalogDAO
            .getProductsByCategory(categoryID)
            .orElseThrow(() -> new IllegalArgumentException("Category not found"))
            .stream()
            .map(ProductPreviewDTO::from);
    }

    private Function<Category, CategoryFilterDTO> mapToFilter(String activeCategory) {
        return category -> CategoryFilterDTO.from(
            category,
            String.format("/%s/%s", "products", category.key()),
            category.key().equals(activeCategory)
        );
    }
}
