package com.aukevanoost.presentation._core.layout;

import com.aukevanoost.presentation.category.CategoryPage;
import com.aukevanoost.presentation.store.StoresPage;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.panel.Panel;

public class NavigationPanel extends Panel {

    public NavigationPanel(String id) {
        super(id);
    }

    protected void onInitialize() {
        super.onInitialize();
        add(new Link<>("categoryLink") {
            @Override
            public void onClick() {
                setResponsePage(CategoryPage.class);
            }
        });
        add(new Link<>("storesLink") {
            @Override
            public void onClick() {
                setResponsePage(StoresPage.class);
            }
        });
    }
}