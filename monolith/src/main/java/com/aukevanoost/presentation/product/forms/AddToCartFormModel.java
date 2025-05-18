package com.aukevanoost.presentation.product.forms;

import java.io.Serializable;

public class AddToCartFormModel implements Serializable {
    private static final long serialVersionUID = 1L;

    private String productSku;
    private String variantSku;

    public AddToCartFormModel(String productSku, String variantSku) {
        this.productSku = productSku;
        this.variantSku = variantSku;
    }

    public String getProductSku() {
        return productSku;
    }

    public void setProductSku(String productSku) {
        this.productSku = productSku;
    }

    public String getVariantSku() {
        return variantSku;
    }

    public void setVariantSku(String variantSku) {
        this.variantSku = variantSku;
    }
}