package com.acts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
