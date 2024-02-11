package com.acts.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.ApiResponse;
import com.acts.dto.category.CategoryDTO;
import com.acts.model.Category;
import com.acts.repository.CategoryRepository;
import com.acts.service.CategoryService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@Transactional
@NoArgsConstructor
@AllArgsConstructor

public class CategoryServiceImpl implements CategoryService {

     @Autowired
     private CategoryRepository categoryRepository;
     
     @Autowired
     private ModelMapper mapper;

    @Override
    public List<CategoryDTO> getAllCategories() {

        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map(category-> mapper.map(category, CategoryDTO.class)).collect(Collectors.toList());
        
    }

    @Override
    public CategoryDTO getCategoryById(Integer id) {

        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with this  Id"));

        CategoryDTO CategoryDTO = mapper.map(category, CategoryDTO.class);
       

        return  CategoryDTO;
        
    }

    @Override
    public CategoryDTO createCategory(@Valid CategoryDTO categoryDTO) {
        Category category = mapper.map(categoryDTO, Category.class);
        Category savedCategory = categoryRepository.save(category);
        return mapper.map(savedCategory, CategoryDTO.class);

       
    }

    @Override
    public CategoryDTO updateCategory(Integer id, @Valid CategoryDTO categoryDTO) {
        Category category = categoryRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Category ID Not Found"));

        mapper.map(categoryDTO,category);
        categoryRepository.save(category);
    
        categoryDTO.setId(category.getId());
        
        return categoryDTO;

    }

    @Override
    public ApiResponse deleteCategory(Integer id) {

        Category category= categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category id not found"));

        categoryRepository.delete(category);

        return new ApiResponse("Category details deleted");

       
    }

    @Override
    public CategoryDTO  getCategoryByName(String name) {

        Category category = categoryRepository.findByCategoryName(name).
                      orElseThrow(()->new ResourceNotFoundException("Category Not Found"));

        
       return mapper.map(category, CategoryDTO.class);
        
    }
    
}
