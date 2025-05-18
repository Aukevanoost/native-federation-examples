package com.aukevanoost.interfaces.boundaries.category;

import com.aukevanoost.presentation.category.CategoryViewModel;

import java.util.stream.Stream;

public interface ICategoryController {
    CategoryDTO get(String categoryID);
    Stream<CategoryFilterDTO> getFilters(String activeCategoryID);
    Stream<ProductPreviewDTO> getProducts(String categoryID);

}
