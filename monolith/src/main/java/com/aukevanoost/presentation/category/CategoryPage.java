package com.aukevanoost.presentation.category;

import com.aukevanoost.interfaces.boundaries.category.CategoryControllerFactory;
import com.aukevanoost.interfaces.boundaries.category.ICategoryController;
import com.aukevanoost.presentation.category.components.CategoryFilterPanel;
import com.aukevanoost.presentation.category.components.ProductCardPanel;
import com.aukevanoost.presentation._core.ListViewHandler;
import com.aukevanoost.presentation._core.layout.BaseTemplate;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;
import org.apache.wicket.request.mapper.parameter.PageParameters;
import org.apache.wicket.util.string.StringValue;

import java.util.List;

public class CategoryPage extends BaseTemplate {
    private final IModel<CategoryViewModel> vm;

    public CategoryPage(PageParameters parameters) {
        super(parameters);
        var controller = CategoryControllerFactory.inject();
        vm = Model.of(CategoryViewModel.from(controller, parameters));
    }

    public CategoryPage() {
        this(new PageParameters().add("category", StringValue.valueOf("all")));
    }

    @Override
    protected void onInitialize() {
        super.onInitialize();

        add(new Label("title", vm.map(CategoryViewModel::category)));

        WebMarkupContainer actionsContainer = new WebMarkupContainer("actionsContainer");

        actionsContainer.add(new Label("productsSize", vm.map(CategoryViewModel::products).map(List::size)));

        actionsContainer.add(ListViewHandler.asPanel(
            "filterCards",
            vm.map(CategoryViewModel::filters),
            CategoryFilterPanel::new
        ));

        add(actionsContainer);

        add(ListViewHandler.asPanel(
            "productCards",
            vm.map(CategoryViewModel::products),
            ProductCardPanel::new
        ));
    }
}