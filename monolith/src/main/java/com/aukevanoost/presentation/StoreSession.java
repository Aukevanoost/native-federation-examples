package com.aukevanoost.presentation;

import com.aukevanoost.interfaces.boundaries.cart.CartDTO;
import org.apache.wicket.protocol.http.WebSession;
import org.apache.wicket.request.Request;

import java.io.Serial;
import java.util.function.UnaryOperator;

public class StoreSession extends WebSession {
    @Serial
    private static final long serialVersionUID = 1L;

    private CartDTO cart = CartDTO.empty();

    public StoreSession(Request request) {
        super(request);
    }

    public static StoreSession get() {
        return (StoreSession) WebSession.get();
    }

    public void updateCart(UnaryOperator<CartDTO> update) {
        this.cart = update.apply(cart);
        dirty();
    }

    public CartDTO cart() {
        return this.cart;
    }
}