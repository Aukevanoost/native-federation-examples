package com.aukevanoost.interfaces.boundaries.auth;

import com.aukevanoost.interfaces.AuthController;

public class AuthControllerFactory {
    public static IAuthController inject() {
        return new AuthController();
    }
}