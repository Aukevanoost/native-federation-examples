package com.aukevanoost.interfaces.boundaries.auth;

public interface IAuthController {
    long JWT_EXPIRATION = 3600000;
    
    String generateToken();
    boolean validateToken(String token);
}
