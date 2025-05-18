package com.aukevanoost.presentation.home.components;

import com.aukevanoost.interfaces.boundaries.featured.TeaserDTO;
import com.aukevanoost.presentation._core.components.ImagePanel;
import com.aukevanoost.presentation.category.CategoryPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.model.IModel;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class TeaserCardPanel extends GenericPanel<TeaserDTO> {

    public TeaserCardPanel(String id, IModel<TeaserDTO> teaser) {
        super(id, teaser);
    }

    @Override
    protected void onInitialize() {
        super.onInitialize();
        var teaser = getModel();

        Link<String> link = new Link<>("url", teaser.map(TeaserDTO::key)){
            @Override
            public void onClick() {
                setResponsePage(
                    CategoryPage.class,
                    new PageParameters().add("category", getModelObject()));
            }
        };

        link.add(new Label("title", teaser.map(TeaserDTO::title)));
        link.add(new ImagePanel("image", teaser.map(TeaserDTO::image), 500, 1000));

        add(link);
    }
}

