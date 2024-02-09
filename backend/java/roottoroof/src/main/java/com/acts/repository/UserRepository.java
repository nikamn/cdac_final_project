package com.acts.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}
