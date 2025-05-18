package com.aukevanoost.domain.boundaries.teaser;

import com.aukevanoost.domain.dao.mock.MockTeaserDAO;

public class TeaserDAOFactory {
    public static ITeaserDAO inject() {
        return new MockTeaserDAO();
    }
}
