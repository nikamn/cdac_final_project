package com.acts.repository;


import static org.junit.jupiter.api.Assertions.assertEquals;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.acts.model.Category;


@DataJpaTest
public class CategoryRepoTest {

    @Autowired
    CategoryRepository categoryRepository;

    @Test
	void testFindCategoryByName() {
		 Category cat = categoryRepository.findByCategoryName("Seeds").get();   
         System.out.println(cat.getCategoryName());
         assertEquals("Seeds", cat.getCategoryName());
	 
	}
    

}
