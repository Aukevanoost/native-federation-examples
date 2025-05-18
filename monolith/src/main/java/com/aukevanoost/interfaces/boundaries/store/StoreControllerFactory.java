package com.aukevanoost.interfaces.boundaries.store;

import com.aukevanoost.domain.boundaries.store.StoreDAOFactory;
import com.aukevanoost.interfaces.StoreController;

public class StoreControllerFactory {
    public static IStoreController inject() {
        return new StoreController(
            StoreDAOFactory.inject()
        );
    }
}
