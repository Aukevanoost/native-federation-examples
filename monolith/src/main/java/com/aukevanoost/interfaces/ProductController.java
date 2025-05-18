package com.aukevanoost.interfaces;

import com.aukevanoost.domain.boundaries.catalog.ICatalogDAO;
import com.aukevanoost.domain.boundaries.recommendations.IRecommendationsDAO;
import com.aukevanoost.interfaces.boundaries.product.*;
import com.aukevanoost.interfaces.boundaries.featured.RecommendationDTO;
import com.aukevanoost.presentation.product.ProductViewModel;
import jakarta.annotation.Nullable;

import java.util.List;

public class ProductController implements IProductController {
    private final ICatalogDAO catalogDAO;

    public ProductController(ICatalogDAO catalogDAO) {
        this.catalogDAO = catalogDAO;
    }

    public ProductDTO getProductBySKU(String sku, @Nullable String variantSku) {
        return catalogDAO
            .getProductBySKU(sku)
            .map(p -> p.variants$()
                    .filter(v -> variantSku == null || v.sku().equals(variantSku))
                    .findFirst()
                    .map(v -> ProductDTO.from(p, v))
                    .orElseThrow(() -> new IllegalArgumentException("Product variant not found"))
            )
            .orElseThrow(() -> new IllegalArgumentException("Product not found"));
    }

    public List<VariantOptionDTO> getVariantsBySKU(String sku, @Nullable String variantSku) {
        return catalogDAO
            .getProductBySKU(sku)
            .map(p -> p.variants$()
                .map(v -> VariantOptionDTO.from(v, v.sku().equals(variantSku)))
                .toList()
            )
            .orElseThrow(() -> new IllegalArgumentException("Product not found"));
    }



//    public ProductViewModel process(String productSku, @Nullable String variantSku) {
//
//        var recommendations = recommendedDAO
//            .getRecommendations(4, dbActiveVariant.sku())
//            .map(RecommendationDTO::from)
//            .toList();
//
//        return new ProductViewModel(
//            product,
//            cartInfo,
//            variants,
//            recommendations
//        );
//    }
}
