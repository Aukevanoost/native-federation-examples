package com.aukevanoost.domain.boundaries.teaser;

import com.aukevanoost.domain.dao.mock.MockTeaserDAO;
import com.aukevanoost.domain.entities.Teaser;

import java.util.stream.Stream;

public interface ITeaserDAO {
    Stream<Teaser> getAll();

}