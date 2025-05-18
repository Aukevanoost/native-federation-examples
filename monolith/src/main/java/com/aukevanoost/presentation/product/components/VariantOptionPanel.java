package com.aukevanoost.presentation.product.components;

import com.aukevanoost.interfaces.boundaries.product.VariantOptionDTO;
import com.aukevanoost.presentation.product.ProductPage;
import org.apache.wicket.AttributeModifier;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.panel.Fragment;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.model.IModel;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class VariantOptionPanel extends GenericPanel<VariantOptionDTO>{
    private final WebMarkupContainer variantOption;

    private final Fragment activeFragment;
    private final Fragment inactiveFragment;

    public VariantOptionPanel(String id, IModel<VariantOptionDTO> option) {
        super(id, option);
        variantOption = new WebMarkupContainer("variantOption");

        activeFragment = createActiveFragment();
        inactiveFragment = createInactiveFragment();
    }

    @Override
    protected void onInitialize() {
        super.onInitialize();

        variantOption.add(AttributeModifier.append("style",
            getModel().map(c -> "--variant-color: " + c.color())));

        variantOption.add(getModelObject().active() ? activeFragment : inactiveFragment);
        add(variantOption);
        setOutputMarkupId(true);
        setRenderBodyOnly(true);
    }

    private Fragment createActiveFragment() {
        Fragment fragment = new Fragment("optionContainer", "activeFragment", this);
        fragment.add(new Label("name", getModel().map(VariantOptionDTO::name)));
        fragment.setOutputMarkupId(true).setRenderBodyOnly(true);
        return fragment;
    }

    private Fragment createInactiveFragment() {
        Fragment fragment = new Fragment("optionContainer", "inactiveFragment", this);

        Link<String> link = new Link<>("url", getModel().map(VariantOptionDTO::sku)) {
            @Override
            public void onClick() {
                setResponsePage(
                    ProductPage.class,
                    new PageParameters(getPage().getPageParameters())
                        .set("variant", getModelObject())
                );
            }
        };
        link.add(new Label(
            "name",
            getModel().map(VariantOptionDTO::name)
        ));

        fragment.add(link);
        fragment.setOutputMarkupId(true).setRenderBodyOnly(true);
        return fragment;
    }


    @Override
    protected void onModelChanged() {
        variantOption.replace(getModelObject().active() ? activeFragment : inactiveFragment);
        super.onModelChanged();
    }
}