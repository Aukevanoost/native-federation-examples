package com.aukevanoost.presentation.product.components;

import com.aukevanoost.interfaces.boundaries.cart.CartProductDTO;
import com.aukevanoost.interfaces.boundaries.inventory.StockInfoDTO;
import com.aukevanoost.presentation.StoreSession;
import com.aukevanoost.presentation.cart.CartPage;
import com.aukevanoost.presentation.product.forms.AddToCartForm;
import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.form.AjaxButton;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.BookmarkablePageLink;
import org.apache.wicket.markup.html.panel.Fragment;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.model.IModel;

public class AddToCartPanel extends GenericPanel<StockInfoDTO> {
    private final AddToCartForm form;
    private final Fragment inStockFragment;
    private final Fragment outOfStockFragment;
    private final WebMarkupContainer confirmationContainer;

    public AddToCartPanel(String id, IModel<StockInfoDTO> model) {
        super(id, model);
        inStockFragment = createInStockFragment();
        outOfStockFragment = createOutOfStockFragment();
        confirmationContainer = new WebMarkupContainer("confirmationContainer");
        confirmationContainer.setOutputMarkupId(true);
        confirmationContainer.setOutputMarkupPlaceholderTag(true);
        confirmationContainer.setVisible(false);

        form = new AddToCartForm("form", getModel());
    }

    @Override
    protected void onInitialize() {
        super.onInitialize();
        form.add(new Label("price", getModel().map(x -> String.format("%d Ø", x.price()))));
        form.add(getModelObject().inventory() > 0 ? inStockFragment : outOfStockFragment);

        var btn = new AjaxButton("action", form) {
            @Override
            protected void onSubmit(AjaxRequestTarget target) {
                CartProductDTO item = form.getCartItem().getObject();
                StoreSession.get().updateCart(cart -> cart.add(item));
                confirmationContainer.setVisible(true);
                target.add(confirmationContainer);
            }
        };
        btn.setEnabled(getModelObject().inventory() > 0);
        form.add(btn);

        form.add(confirmationContainer);
        confirmationContainer.add(new BookmarkablePageLink<>("cartLink", CartPage.class));

        add(form);
    }

    private Fragment createInStockFragment() {
        Fragment fragment = new Fragment("inventoryState", "inStockFragment", this);
        fragment.add(new Label("inventory", getModel().map(StockInfoDTO::inventory)));
        fragment.setOutputMarkupId(true).setRenderBodyOnly(true);
        return fragment;
    }

    private Fragment createOutOfStockFragment() {
        Fragment fragment = new Fragment("inventoryState", "outOfStockFragment", this);
        fragment.setOutputMarkupId(true).setRenderBodyOnly(true);
        return fragment;
    }

    @Override
    protected void onModelChanged() {
        form.add(getModelObject().inventory() > 0 ? inStockFragment : outOfStockFragment);
        super.onModelChanged();
    }
}