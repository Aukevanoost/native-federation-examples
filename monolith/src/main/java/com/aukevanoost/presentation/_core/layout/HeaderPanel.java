package com.aukevanoost.presentation._core.layout;

import com.aukevanoost.presentation.home.HomePage;
import org.apache.wicket.Component;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.panel.Panel;

public class HeaderPanel extends Panel {
    private Component navigationPanel;

    public HeaderPanel(String id) {
        super(id);
    }

    protected void onInitialize() {
        super.onInitialize();
        add(navigationPanel = new NavigationPanel("navigationPanel"));

        add(
            new Link<>("homeLink"){
                @Override
                public void onClick() {
                    setResponsePage(HomePage.class);
                }
            }
        );
    }
}