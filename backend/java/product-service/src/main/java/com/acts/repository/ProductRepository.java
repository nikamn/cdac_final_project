package com.acts.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    Optional<Product> findByProductName(String productName);
}
