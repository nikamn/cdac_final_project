package com.acts.service.impl;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.custom_exceptions.CustomException;
import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.ApiResponse;
import com.acts.dto.product.ProductDTO;
import com.acts.model.Category;
import com.acts.model.Product;
import com.acts.repository.CategoryRepository;
import com.acts.repository.ProductRepository;
import com.acts.service.ProductService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    private final CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper mapper;

    public List<ProductDTO> getAllProducts() {

        List<Product> products = productRepository.findAll();
        return products.stream().map(getProductDTOFromProduct).collect(Collectors.toList());
    }

    public ProductDTO getProductById(Integer id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Id @...!"));

        ProductDTO productDTO = getProductDTOFromProduct.apply(product);

        return productDTO;
    }

    public ProductDTO getProductByName(String name) {

        Product product = productRepository.findByProductName(name)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Name @...!"));

        return getProductDTOFromProduct.apply(product);
    }

    public ProductDTO createProduct(ProductDTO productDTO) {

        Category category = categoryRepository.findById(productDTO.getCategoryId()).orElseThrow(
                () -> new ResourceNotFoundException("Category not found with this Id: " + productDTO.getCategoryId()));

        Product product = Product.builder()
                .productName(productDTO.getProductName())
                .price(productDTO.getPrice())
                .imageURL(productDTO.getImageUrl())
                .quantity(productDTO.getQuantity())
                .description(productDTO.getDescription())
                .category(category)
                .build();

        Product savedProduct = productRepository.save(product);

        return getProductDTOFromProduct.apply(savedProduct);
    }

    public ProductDTO updateProduct(Integer id, ProductDTO productDTO) {

        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found @...!"));

        // Category category =
        // categoryRepository.findById(productDTO.getCategoryId()).get();
        Category category = categoryRepository.findById(productDTO.getCategoryId()).orElseThrow(
                () -> new ResourceNotFoundException("Category not found with this Id: " + productDTO.getCategoryId()));

        existingProduct.setProductName(productDTO.getProductName());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setImageURL(productDTO.getImageUrl());
        existingProduct.setQuantity(productDTO.getQuantity());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setCategory(category);

        Product updatedProduct = productRepository.save(existingProduct);

        return getProductDTOFromProduct.apply(updatedProduct);
    }

    public ApiResponse deleteProduct(Integer id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid product Id @...!"));

        try{
            productRepository.delete(product);
        }
        catch (Exception e) {
            throw new CustomException("Product can't deleted , Present in the cart of Customer");
        }

        return new ApiResponse(true, "Product Deleted successfully");
    }

    public Function<Product, ProductDTO> getProductDTOFromProduct = product -> {
        ProductDTO productDTO = mapper.map(product, ProductDTO.class);
        productDTO.setCategoryId(product.getCategory().getId());
        return productDTO;
    };

    @Override
    public Product findById(Integer productId) {
         
        return productRepository.findById(productId)
                        .orElseThrow(()-> new ResourceNotFoundException("Product Not Exists.!!"));
    }

}
