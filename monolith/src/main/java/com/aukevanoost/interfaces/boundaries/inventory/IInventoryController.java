package com.aukevanoost.interfaces.boundaries.inventory;

import jakarta.annotation.Nullable;

public interface IInventoryController {
    StockInfoDTO getStockInfoBySKU(String sku, @Nullable String variantSku);
}
