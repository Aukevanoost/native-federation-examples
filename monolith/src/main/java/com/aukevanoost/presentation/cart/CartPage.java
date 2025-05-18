package com.aukevanoost.presentation.cart;

import com.aukevanoost.interfaces.boundaries.cart.CartControllerFactory;
import com.aukevanoost.interfaces.boundaries.cart.CartProductPreviewDTO;
import com.aukevanoost.interfaces.boundaries.featured.FeaturedControllerFactory;
import com.aukevanoost.interfaces.boundaries.inventory.InventoryControllerFactory;
import com.aukevanoost.interfaces.boundaries.product.ProductControllerFactory;
import com.aukevanoost.interfaces.boundaries.product.VariantOptionDTO;
import com.aukevanoost.presentation.StoreSession;
import com.aukevanoost.presentation._core.components.ImagePanel;
import com.aukevanoost.presentation._core.layout.BaseTemplate;
import com.aukevanoost.presentation.product.ProductPage;
import com.aukevanoost.presentation.product.ProductViewModel;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.list.ListItem;
import org.apache.wicket.markup.html.list.ListView;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class CartPage extends BaseTemplate {
    private final IModel<CartViewModel> vm;

    public CartPage(){
        super();
        vm = Model.of(
            CartViewModel.from(
                CartControllerFactory.inject(),
                StoreSession.get().cart()
            )
        );
    }

    protected void onInitialize() {
        super.onInitialize();

        add(new ListView<>("cartItems", vm.map(CartViewModel::products)) {
            @Override
            protected void populateItem(ListItem<CartProductPreviewDTO> item) {
                var product = item.getModel();

                Link<CartProductPreviewDTO> link = new Link<>("url", product) {
                    @Override
                    public void onClick() {
                        setResponsePage(
                            ProductPage.class,
                            new PageParameters(getPage().getPageParameters())
                                .set("product", product.map(CartProductPreviewDTO::productSku).getObject())
                                .set("variant", product.map(CartProductPreviewDTO::variantSku).getObject())
                        );
                    }
                };

                link.add(new ImagePanel("image", product.map(CartProductPreviewDTO::image), 200, 400));
                item.add(link);
                item.add(new Label("sku", product.map(CartProductPreviewDTO::variantSku)));
                item.add(new Label("quantity", product.map(CartProductPreviewDTO::quantity)));
                item.add(new Label("total", product.map(p -> String.format("%d Ø", p.totalPrice()))));

            }
        });

        add(new Label("totalAmount", vm.map(CartViewModel::totalPrice)));
    }
}