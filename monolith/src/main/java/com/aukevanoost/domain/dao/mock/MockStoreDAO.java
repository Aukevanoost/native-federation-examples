package com.aukevanoost.domain.dao.mock;

import com.aukevanoost.domain.boundaries.store.IStoreDAO;
import com.aukevanoost.domain.dao.mock.db.Stores;
import com.aukevanoost.domain.entities.Store;

import java.util.stream.Stream;

public class MockStoreDAO implements IStoreDAO {
    @Override
    public Stream<Store> getStores() {
        return Stores.ALL.stream();
    }
}
