package com.aukevanoost.interfaces.boundaries.cart;
import com.aukevanoost.domain.boundaries.inventory.InventoryDAOFactory;
import com.aukevanoost.interfaces.CartController;

public class CartControllerFactory {
    public static ICartController inject() {
        return new CartController(
            InventoryDAOFactory.inject()
        );
    }
}
