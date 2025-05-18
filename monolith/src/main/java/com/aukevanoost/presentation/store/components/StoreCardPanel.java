package com.aukevanoost.presentation.store.components;

import com.aukevanoost.interfaces.boundaries.store.StoreDTO;
import com.aukevanoost.presentation._core.components.ImagePanel;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.model.IModel;

public class StoreCardPanel extends GenericPanel<StoreDTO> {
    public StoreCardPanel(String id, IModel<StoreDTO> storeModel) {
        super(id, storeModel);
    }

    protected void onInitialize() {
        super.onInitialize();
        var store = getModel();

        add(new ImagePanel("image", store.map(StoreDTO::image), 200, 400));
        add(new Label("name", store.map(StoreDTO::name)));
        add(new Label("street", store.map(StoreDTO::street)));
        add(new Label("city", store.map(StoreDTO::city)));
    }
}


