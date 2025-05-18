package com.aukevanoost.presentation.store;

import com.aukevanoost.interfaces.boundaries.store.StoreControllerFactory;
import com.aukevanoost.presentation.store.components.StoreCardPanel;
import com.aukevanoost.presentation._core.ListViewHandler;
import com.aukevanoost.presentation._core.layout.BaseTemplate;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;

public class StoresPage extends BaseTemplate {

    private final IModel<StoreViewModel> vm;

    public StoresPage(){
        super();
        var controller = StoreControllerFactory.inject();

        vm = Model.of(StoreViewModel.from(controller));
    }

    protected void onInitialize() {
        add(ListViewHandler.asPanel(
            "storeCards",
            vm.map(StoreViewModel::stores),
            StoreCardPanel::new
        ));

        super.onInitialize();
    }
}