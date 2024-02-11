package com.acts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.AuthenticationToken;

public interface TokenRepository extends JpaRepository<AuthenticationToken,Integer> {
    
}
