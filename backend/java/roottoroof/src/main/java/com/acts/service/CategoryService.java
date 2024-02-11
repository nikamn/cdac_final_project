package com.acts.service;

import java.util.List;

import javax.validation.Valid;

import com.acts.dto.ApiResponse;
import com.acts.dto.category.CategoryDTO;


public interface CategoryService {

    List<CategoryDTO> getAllCategories();

    CategoryDTO getCategoryById(Integer id);

    CategoryDTO createCategory(@Valid  CategoryDTO categoryDTO);

    CategoryDTO updateCategory(Integer id, @Valid  CategoryDTO categoryDTO);

    ApiResponse deleteCategory(Integer id);

    CategoryDTO getCategoryByName(String name);

    


  
}
