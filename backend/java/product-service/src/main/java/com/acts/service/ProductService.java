package com.acts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.acts.dto.ProductDTO;
import com.acts.model.Product;

public interface ProductService {

    public List<Product> getAllProducts();

    public Optional<Product> getProductById(Integer id);

    public Optional<Product> getProductByName(String name);

    public Product createProduct(ProductDTO productDTO);

    public ResponseEntity<Product> updateProduct(Integer id, ProductDTO updatedProductDTO);

    public void deleteProduct(Integer id);

}
