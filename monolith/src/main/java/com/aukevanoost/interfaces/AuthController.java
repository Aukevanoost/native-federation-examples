package com.aukevanoost.interfaces;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.aukevanoost.interfaces.boundaries.auth.IAuthController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class AuthController implements IAuthController {
    private static final Key JWT_SECRET = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generateToken() {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);

        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", "user-autk-token");
        claims.put("iat", now.getTime() / 1000);
        claims.put("exp", expiryDate.getTime() / 1000);
        claims.put("scope", "read write");
        claims.put("client_id", "tractor-store-2.0");
        claims.put("token_type", "Bearer");

        return Jwts.builder()
            .setHeaderParam("typ", "JWT")
            .setClaims(claims)
            .setIssuer("mock-auth-server")
            .signWith(JWT_SECRET, SignatureAlgorithm.HS256)
            .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                .setSigningKey(JWT_SECRET)
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
