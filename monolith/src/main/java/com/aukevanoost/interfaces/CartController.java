package com.aukevanoost.interfaces;

import com.aukevanoost.domain.boundaries.inventory.IInventoryDAO;
import com.aukevanoost.domain.entities.ProductVariant;
import com.aukevanoost.interfaces.boundaries.cart.CartDTO;
import com.aukevanoost.interfaces.boundaries.cart.CartProductPreviewDTO;
import com.aukevanoost.interfaces.boundaries.cart.ICartController;
import java.util.List;

public class CartController implements ICartController {
    private final IInventoryDAO inventoryDAO;

    public CartController(IInventoryDAO inventoryDAO) {
        this.inventoryDAO = inventoryDAO;
    }

    public List<CartProductPreviewDTO> getCartDetails(CartDTO cart) {
        var products = cart.products$().map(product -> new ProductVariant<>(product.productSku(), product.variantSku())).toList();
        return inventoryDAO.getProductVariantsBySKU(products)
            .stream()
            .map(pv -> CartProductPreviewDTO.from(
                pv,
                cart.get(pv.product().sku(), pv.variant().sku()).quantity())
            )
            .toList();
    }
}
