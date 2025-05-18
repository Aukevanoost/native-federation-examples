package com.aukevanoost.domain.dao.mock;

import com.aukevanoost.domain.boundaries.teaser.ITeaserDAO;
import com.aukevanoost.domain.dao.mock.db.Teasers;
import com.aukevanoost.domain.entities.Teaser;

import java.util.stream.Stream;

public class MockTeaserDAO implements ITeaserDAO {

    @Override
    public Stream<Teaser> getAll() {
        return Teasers.ALL.stream();
    }
}
