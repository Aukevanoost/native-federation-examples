package com.aukevanoost.api.featured;

import java.util.List;

public class RecommendationsRequest {
    private List<String> sku;

    public List<String> getSku() {
        return sku;
    }

    public void setSku(List<String> sku) {
        this.sku = sku;
    }
}