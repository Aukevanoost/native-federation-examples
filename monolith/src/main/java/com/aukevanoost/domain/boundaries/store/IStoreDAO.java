package com.aukevanoost.domain.boundaries.store;

import com.aukevanoost.domain.dao.mock.MockStoreDAO;
import com.aukevanoost.domain.entities.Store;

import java.util.stream.Stream;

public interface IStoreDAO {
    Stream<Store> getStores();
}
