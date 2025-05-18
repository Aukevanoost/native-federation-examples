package com.aukevanoost.presentation.category.components;

import com.aukevanoost.interfaces.boundaries.category.CategoryFilterDTO;
import org.apache.wicket.AttributeModifier;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.ExternalLink;
import org.apache.wicket.markup.html.panel.Fragment;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.model.IModel;

public class CategoryFilterPanel extends GenericPanel<CategoryFilterDTO> {
    private final WebMarkupContainer variantOption;

    private final Fragment activeFragment;
    private final Fragment inactiveFragment;

    public CategoryFilterPanel(String id, IModel<CategoryFilterDTO> option) {
        super(id, option);
        variantOption = new WebMarkupContainer("categoryFilter");

        activeFragment = createActiveFragment();
        inactiveFragment = createInactiveFragment();
    }

    @Override
    protected void onInitialize() {
        super.onInitialize();

        variantOption.add(new AttributeModifier(
            "class",
            getModel().map(f -> f.active() ? "e_Filter__filter--active" : "e_Filter__filter")));
        variantOption.add(getModelObject().active() ? activeFragment : inactiveFragment);
        add(variantOption);
        setOutputMarkupId(true);
        setRenderBodyOnly(true);
    }

    private Fragment createActiveFragment() {
        Fragment fragment = new Fragment("filterContainer", "activeFragment", this);
        fragment.add(new Label("name", getModel().map(CategoryFilterDTO::name)));
        fragment.setOutputMarkupId(true).setRenderBodyOnly(true);
        return fragment;
    }

    private Fragment createInactiveFragment() {
        Fragment fragment = new Fragment("filterContainer", "inactiveFragment", this);
        ExternalLink link = new ExternalLink("url", getModel().map(CategoryFilterDTO::url));
        link.add(new Label("name", getModel().map(CategoryFilterDTO::name)));
        fragment.add(link);
        fragment.setOutputMarkupId(true).setRenderBodyOnly(true);
        return fragment;
    }

    @Override
    protected void onModelChanged() {
        replace(getModelObject().active() ? activeFragment : inactiveFragment);
        super.onModelChanged();
    }
}
