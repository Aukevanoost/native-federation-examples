package com.aukevanoost.presentation.category.components;

import com.aukevanoost.interfaces.boundaries.category.ProductPreviewDTO;
import com.aukevanoost.presentation._core.components.ImagePanel;
import com.aukevanoost.presentation.product.ProductPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.model.IModel;
import org.apache.wicket.request.mapper.parameter.PageParameters;

import java.text.DecimalFormat;

public class ProductCardPanel extends GenericPanel<ProductPreviewDTO> {

    public ProductCardPanel(String id, IModel<ProductPreviewDTO> productModel) {
        super(id, productModel);
    }

    protected void onInitialize() {
        super.onInitialize();
        var product = getModel();

        Link<ProductPreviewDTO> link = new Link<>("url", getModel()) {
            @Override
            public void onClick() {
                var product = this.getModelObject();
                setResponsePage(ProductPage.class, new PageParameters().add("product", product.sku()));
            }
        };
        link.add(new ImagePanel("image", product.map(ProductPreviewDTO::image), 200, 400, 800));

        link.add(new Label("name", product.map(ProductPreviewDTO::name)));
        link.add(new Label("startPrice", product.map(this::getFormattedPrice)));
        add(link);
    }

    private String getFormattedPrice(ProductPreviewDTO product) {
        return (new DecimalFormat("##,###.00 Ø")).format(product.startPrice());
    }

}
