package com.aukevanoost.interfaces.boundaries.cart;

import java.util.List;

public interface ICartController {
    List<CartProductPreviewDTO> getCartDetails(CartDTO cart);
}
