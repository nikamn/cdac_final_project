package com.acts.controller;

import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureWebMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.acts.model.Product;
import com.acts.service.ProductService;

@ExtendWith(MockitoExtension.class)
@WebMvcTest(controllers = ProductController.class)
@AutoConfigureWebMvc
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    @Test
    public void testGetProductById_validId_returnsProduct() throws Exception {
        // Given
        Integer productId = 1;

        Product product = new Product(1, "Product 1", 10.99, "product1.jpg", 50, "Product 1 description", null);

        when(productService.getProductById(productId)).thenReturn(Optional.of(product));

        // When
        mockMvc.perform(MockMvcRequestBuilders.get("/api/products/{id}", productId))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.productId").value(productId));
    }
}
