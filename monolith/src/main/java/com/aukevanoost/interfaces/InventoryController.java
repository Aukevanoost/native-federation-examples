package com.aukevanoost.interfaces;

import com.aukevanoost.domain.boundaries.inventory.IInventoryDAO;
import com.aukevanoost.interfaces.boundaries.inventory.IInventoryController;
import com.aukevanoost.interfaces.boundaries.inventory.StockInfoDTO;
import jakarta.annotation.Nullable;

public class InventoryController implements IInventoryController {
    private final IInventoryDAO inventoryDAO;

    public InventoryController(IInventoryDAO inventoryDAO) {
        this.inventoryDAO = inventoryDAO;
    }

    public StockInfoDTO getStockInfoBySKU(String sku, @Nullable String variantSku) {
        return inventoryDAO
            .getProductBySKU(sku)
            .map(p -> p.variants$()
                .filter(v -> variantSku == null || v.sku().equals(variantSku))
                .findFirst()
                .map(v -> StockInfoDTO.from(p, v))
                .orElseThrow(() -> new IllegalArgumentException("Product variant not found"))
            )
            .orElseThrow(() -> new IllegalArgumentException("Product not found"));
    }
}
