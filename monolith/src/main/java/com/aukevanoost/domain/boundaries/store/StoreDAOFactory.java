package com.aukevanoost.domain.boundaries.store;

import com.aukevanoost.domain.dao.mock.MockStoreDAO;

public class StoreDAOFactory {
    public static IStoreDAO inject() {
        return new MockStoreDAO();
    }
}
