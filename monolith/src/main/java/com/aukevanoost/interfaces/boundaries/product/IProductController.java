package com.aukevanoost.interfaces.boundaries.product;

import jakarta.annotation.Nullable;

import java.util.List;

public interface IProductController {
     ProductDTO getProductBySKU(String sku, @Nullable String variantSku);
     List<VariantOptionDTO> getVariantsBySKU(String sku, @Nullable String variantSku);
}
