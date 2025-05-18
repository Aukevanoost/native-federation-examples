package com.aukevanoost.interfaces.boundaries.inventory;

import com.aukevanoost.domain.boundaries.inventory.InventoryDAOFactory;
import com.aukevanoost.interfaces.InventoryController;

public class InventoryControllerFactory {
    public static IInventoryController inject() {
        return new InventoryController(
            InventoryDAOFactory.inject()
        );
    }
}
