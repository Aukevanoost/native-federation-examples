package com.aukevanoost.presentation.recommendation;

import com.aukevanoost.interfaces.boundaries.featured.RecommendationDTO;
import com.aukevanoost.presentation._core.components.ImagePanel;
import com.aukevanoost.presentation.product.ProductPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.model.IModel;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class RecommendationCardPanel extends GenericPanel<RecommendationDTO> {

    public RecommendationCardPanel(String id, IModel<RecommendationDTO> recommendationModel) {
        super(id, recommendationModel);
    }

    protected void onInitialize() {
        var recommendation = getModel();

        super.onInitialize();
        Link<RecommendationDTO> link = new Link<>("url", recommendation) {
            @Override
            public void onClick() {
                setResponsePage(
                    ProductPage.class,
                    new PageParameters()
                        .add("product", this.getModelObject().productSku())
                        .add("variant", this.getModelObject().sku())
                );
            }
        };
        link
            .add(new Label("name",recommendation.map(RecommendationDTO::name)))
            .add(new ImagePanel("image", recommendation.map(RecommendationDTO::image), 200, 400));
        add(link);
    }
}
