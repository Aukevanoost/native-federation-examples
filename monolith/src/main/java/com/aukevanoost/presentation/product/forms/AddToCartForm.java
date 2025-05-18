package com.aukevanoost.presentation.product.forms;

import com.aukevanoost.interfaces.boundaries.cart.CartProductDTO;
import com.aukevanoost.interfaces.boundaries.inventory.StockInfoDTO;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.HiddenField;
import org.apache.wicket.model.CompoundPropertyModel;
import org.apache.wicket.model.IModel;

import java.io.Serial;

public class AddToCartForm extends Form<AddToCartFormModel> {
    @Serial
    private static final long serialVersionUID = 1L;

    private final IModel<StockInfoDTO> stockInfoModel;

    public AddToCartForm(String id, IModel<StockInfoDTO> stockInfo) {
        super(id);
        this.stockInfoModel = stockInfo;

        AddToCartFormModel formModel = new AddToCartFormModel(
            stockInfo.getObject().productSku(),
            stockInfo.getObject().variantSku()
        );
        setModel(new CompoundPropertyModel<>(formModel));
    }

    @Override
    protected void onInitialize() {
        super.onInitialize();
        add(new HiddenField<>("productSku"));
        add(new HiddenField<>("variantSku"));
    }

    public IModel<CartProductDTO> getCartItem() {
        AddToCartFormModel formModel = getModelObject();
        return stockInfoModel.map(p -> CartProductDTO.from(
            formModel.getProductSku(),
            formModel.getVariantSku()
        ));
    }

    @Override
    protected void onDetach() {
        stockInfoModel.detach();
        super.onDetach();
    }
}