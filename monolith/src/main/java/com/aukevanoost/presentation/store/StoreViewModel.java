package com.aukevanoost.presentation.store;

import com.aukevanoost.interfaces.boundaries.store.IStoreController;
import com.aukevanoost.interfaces.boundaries.store.StoreDTO;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

public record StoreViewModel(List<StoreDTO> stores) implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public static StoreViewModel from(IStoreController controller) {
        return new StoreViewModel(
            controller.getStores()
        );
    }
}
