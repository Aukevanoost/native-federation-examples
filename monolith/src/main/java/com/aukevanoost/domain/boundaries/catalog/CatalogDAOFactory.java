package com.aukevanoost.domain.boundaries.catalog;

import com.aukevanoost.domain.dao.mock.MockCatalogDAO;

public class CatalogDAOFactory {
    public static ICatalogDAO inject() {
        return new MockCatalogDAO();
    }
}
