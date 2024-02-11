package com.acts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.AuthenticationToken;
import com.acts.model.User;

public interface TokenRepository extends JpaRepository<AuthenticationToken,Integer> {

    AuthenticationToken findByUser(User user);
    
}
