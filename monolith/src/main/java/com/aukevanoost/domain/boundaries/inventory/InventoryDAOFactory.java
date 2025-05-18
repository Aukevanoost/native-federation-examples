package com.aukevanoost.domain.boundaries.inventory;

import com.aukevanoost.domain.dao.mock.MockInventoryDAO;

public class InventoryDAOFactory {
    public static IInventoryDAO inject() {
        return new MockInventoryDAO();
    }
}
