package com.aukevanoost.presentation._core.layout;

import org.apache.wicket.markup.head.filter.HeaderResponseContainer;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.Component;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class BaseTemplate extends WebPage {
    public static final String CONTENT_ID = "contentComponent";

    private Component headerPanel;
    private Component footerPanel;

    public BaseTemplate(){}
    public BaseTemplate(PageParameters parameters) { super(parameters); }

    protected void onInitialize() {
        super.onInitialize();
        add(new HeaderResponseContainer("footer-container", "footer-container"));
        add(headerPanel = new HeaderPanel("headerPanel"));
        add(footerPanel = new FooterPanel("footerPanel"));
    }
}