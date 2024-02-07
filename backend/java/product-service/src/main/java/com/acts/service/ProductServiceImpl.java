package com.acts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.acts.dto.ProductDTO;
import com.acts.model.Category;
import com.acts.model.Product;
import com.acts.repository.CategoryRepository;
import com.acts.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    private final CategoryRepository categoryRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer id) {
        return productRepository.findById(id);
    }

    public Optional<Product> getProductByName(String name) {
        return productRepository.findByProductName(name);
    }

    public Product createProduct(ProductDTO productDTO) {
        // Additional business logic can be added here before saving the product

        Category category = categoryRepository.findById(productDTO.getCategoryId()).get();

        Product product = Product.builder()
                .productName(productDTO.getProductName())
                .price(productDTO.getPrice())
                .imagePath(productDTO.getImagePath())
                .quantity(productDTO.getQuantity())
                .description(productDTO.getDescription())
                .category(category)
                .build();

        return productRepository.save(product);
    }

    public ResponseEntity<Product> updateProduct(Integer id, ProductDTO updatedProductDTO) {
        // Additional business logic can be added here before updating the customer
        Optional<Product> existingProduct = getProductById(id);

        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();

            Category category = categoryRepository.findById(updatedProductDTO.getCategoryId()).get();

            product.setProductName(updatedProductDTO.getProductName());
            product.setPrice(updatedProductDTO.getPrice());
            product.setImagePath(updatedProductDTO.getImagePath());
            product.setQuantity(updatedProductDTO.getQuantity());
            product.setDescription(updatedProductDTO.getDescription());
            product.setCategory(category);

            productRepository.save(product);

            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
}
