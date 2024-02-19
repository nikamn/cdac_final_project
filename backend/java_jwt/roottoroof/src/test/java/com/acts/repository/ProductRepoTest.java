package com.acts.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.model.Category;
import com.acts.model.Product;



@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class ProductRepoTest {
    
    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Test
    public void findProductByName(){

        Product product = productRepository.findByProductName("Product 1")
                        .orElseThrow(()->new ResourceNotFoundException("Product Not Found"));

        System.out.println(product.getProductName());
        assertEquals("Product 1", "Product 1");

    }

    @Test
    public void testAddProduct(){
        
         Category category = categoryRepository.findById(1).orElseThrow(
                () -> new ResourceNotFoundException("Category not found with this Id: "));

         Product product = new Product("Product desc new","Product102.jpj",501,"Product 104",100,category);
         
         Product savedProduct = productRepository.save(product);
        
         System.out.println(savedProduct.getProductName());
         assertEquals("Product 104", savedProduct.getProductName());

    }


}
