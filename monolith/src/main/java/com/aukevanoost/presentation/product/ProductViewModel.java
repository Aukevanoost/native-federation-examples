package com.aukevanoost.presentation.product;

import com.aukevanoost.interfaces.boundaries.featured.IFeaturedController;
import com.aukevanoost.interfaces.boundaries.inventory.IInventoryController;
import com.aukevanoost.interfaces.boundaries.inventory.StockInfoDTO;
import com.aukevanoost.interfaces.boundaries.product.IProductController;
import com.aukevanoost.interfaces.boundaries.product.ProductDTO;
import com.aukevanoost.interfaces.boundaries.product.VariantOptionDTO;
import com.aukevanoost.interfaces.boundaries.featured.RecommendationDTO;
import org.apache.wicket.request.mapper.parameter.PageParameters;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

public record ProductViewModel(
    ProductDTO product,
    StockInfoDTO stockInfo,
    List<VariantOptionDTO> variantOptions,
    List<RecommendationDTO> recommendations
) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public static ProductViewModel from(
        IProductController product,
        IFeaturedController featured,
        IInventoryController inventory,
        PageParameters param
    ) {
        var productSku = param.get("product").toString();
        var variantSku = param.get("variant").toString();

        return new ProductViewModel(
            product.getProductBySKU(productSku, variantSku),
            inventory.getStockInfoBySKU(productSku, variantSku),
            product.getVariantsBySKU(productSku, variantSku),
            featured.getRecommendations(productSku)
        );
    }
}
