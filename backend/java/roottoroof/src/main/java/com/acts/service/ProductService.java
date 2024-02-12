package com.acts.service;

import java.util.List;
import java.util.function.Function;

import com.acts.dto.ApiResponse;
import com.acts.dto.product.ProductDTO;
import com.acts.model.Product;

public interface ProductService {

    public List<ProductDTO> getAllProducts();

    public ProductDTO getProductById(Integer id);

    public ProductDTO getProductByName(String name);

    public ProductDTO createProduct(ProductDTO productDTO);

    public ProductDTO updateProduct(Integer id, ProductDTO updatedProductDTO);

    public ApiResponse deleteProduct(Integer id);

}
