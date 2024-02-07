package com.acts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.acts.model.Product;
import com.acts.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer id) {
        return productRepository.findById(id);
    }

    public Optional<Product> getProductByName(String name) {
        return productRepository.findByProductName(name);
    }

    public Product createProduct(Product product) {
        // Additional business logic can be added here before saving the product
        return productRepository.save(product);
    }

    public Product updateProduct(Integer id, Product updatedProduct) {
        // Additional business logic can be added here before updating the customer
        updatedProduct.setProductId(id); // Ensure that the ID of the updated customer is set
        return productRepository.save(updatedProduct);
    }

    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
}
