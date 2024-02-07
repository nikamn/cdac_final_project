package com.acts;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acts.model.Product;
import com.acts.repository.ProductRepository;

@SpringBootTest
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Test
    public void whenFindByName_thenReturnProduct() {

        Product product = new Product();
        product.setProductName("Product 5");

        Product found = productRepository.findByProductName(product.getProductName()).get();

        // then
        assertThat(found.getProductName()).isEqualTo(product.getProductName());
    }
}
