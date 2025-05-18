package com.aukevanoost.interfaces;

import com.aukevanoost.domain.boundaries.store.IStoreDAO;
import com.aukevanoost.interfaces.boundaries.store.IStoreController;
import com.aukevanoost.presentation.store.StoreViewModel;
import com.aukevanoost.interfaces.boundaries.store.StoreDTO;

import java.util.List;

public class StoreController implements IStoreController {

    private final IStoreDAO storeDAO;

    public StoreController(IStoreDAO storeDAO) {
        this.storeDAO = storeDAO;
    }

    public List<StoreDTO> getStores() {
        return storeDAO.getStores()
            .map(StoreDTO::from)
            .toList();
    }
}
