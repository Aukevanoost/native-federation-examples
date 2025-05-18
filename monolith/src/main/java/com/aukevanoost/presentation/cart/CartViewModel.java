package com.aukevanoost.presentation.cart;

import com.aukevanoost.interfaces.boundaries.cart.CartDTO;
import com.aukevanoost.interfaces.boundaries.cart.CartProductPreviewDTO;
import com.aukevanoost.interfaces.boundaries.cart.ICartController;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

public record CartViewModel(
    List<CartProductPreviewDTO> products,
    int totalPrice
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public static CartViewModel from(
        ICartController controller,
        CartDTO cart
    ) {
        var products = controller.getCartDetails(cart);
        return new CartViewModel(
            products,
            products.stream().mapToInt(CartProductPreviewDTO::totalPrice).sum()
        );
    }
}
