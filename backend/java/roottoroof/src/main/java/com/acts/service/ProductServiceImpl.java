package com.acts.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.ApiResponse;
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

    @Autowired
	private ModelMapper mapper;

    public List<ProductDTO> getAllProducts() {
        
        List<Product> products = productRepository.findAll();
        return products.stream().map(product -> mapper.map(product, ProductDTO.class)).collect(Collectors.toList());
    }

    public ProductDTO getProductById(Integer id) {
       
        Product product = productRepository.findById(id)
                       .orElseThrow(()-> new ResourceNotFoundException("INVALID ID"));
            
        return mapper.map(product, ProductDTO.class);
    }

    public ProductDTO getProductByName(String name) {

         Product product = productRepository.findByProductName(name)
                       .orElseThrow(()-> new ResourceNotFoundException("INVALID NAME"));
            
        return mapper.map(product, ProductDTO.class);
        
    }


    public ProductDTO createProduct(ProductDTO productDTO) {

    //    Product product = mapper.map(productDTO, Product.class);
	//    Product savedProduct = productRepository.save(product);
	// 	return mapper.map(savedProduct,ProductDTO.class);	
    // This above code can also be written in place of the below long code
    
     Category category = categoryRepository.findById(productDTO.getCategoryId()).orElseThrow(()->new ResourceNotFoundException("Category not found with this id: " + productDTO.getCategoryId()));

        Product product = Product.builder()
                .productName(productDTO.getProductName())
                .price(productDTO.getPrice())
                .imageURL(productDTO.getImagePath())
                .quantity(productDTO.getQuantity())
                .description(productDTO.getDescription())
                .category(category)
                .build();

        return mapper.map(productRepository.save(product),ProductDTO.class);
    }

    public ProductDTO updateProduct(Integer id, ProductDTO productDTO) {

        //   Product product = productRepository.findById(id)
        //                 .orElseThrow(()->new ResourceNotFoundException("Invalid Product ID"));


        // mapper.map(productDTO,product);
        // productRepository.save(product);
        // productDTO.setProductId(id); //// so that it doesn't send null in the json resp

        // return productDTO;

        Product existingProduct = productRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Product not found"));

        Category category = categoryRepository.findById(productDTO.getCategoryId()).get();

        existingProduct.setProductName(productDTO.getProductName());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setImageURL(productDTO.getImagePath());
        existingProduct.setQuantity(productDTO.getQuantity());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setCategory(category);

        return mapper.map(productRepository.save(existingProduct),ProductDTO.class);

    }

    public ApiResponse deleteProduct(Integer id) {


        Product product = productRepository.findById(id)
                        .orElseThrow(()-> new ResourceNotFoundException("Invalid customer id"));

        productRepository.delete(product);
        // // Before deleting emp rec , delete it's child rec from ProjectEmpDetails
		// projectEmpRepo.deleteByMyEmployeeId(empId);// yet to be tested

        return new ApiResponse("Product deleted..!!");
        

    }
}
