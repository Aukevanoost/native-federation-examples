package com.aukevanoost.interfaces.boundaries.product;

import com.aukevanoost.domain.boundaries.catalog.CatalogDAOFactory;
import com.aukevanoost.interfaces.ProductController;

public class ProductControllerFactory {
    public static IProductController inject() {
        return new ProductController(
            CatalogDAOFactory.inject()
        );
    }
}
