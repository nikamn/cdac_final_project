package com.acts.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acts.custom_exceptions.CustomException;
import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.ApiResponse;
import com.acts.dto.cart.AddToCartDTO;
import com.acts.dto.cart.CartDTO;
import com.acts.dto.cart.CartItemDTO;
import com.acts.model.Cart;
import com.acts.model.Product;
import com.acts.model.User;
import com.acts.repository.CartRepository;
import com.acts.service.AuthenticationService;
import com.acts.service.CartService;
import com.acts.service.ProductService;


@Service
@Transactional
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ProductService productService;

    @Override
    public ApiResponse addToCart(AddToCartDTO addToCartDTO, String token) {

        authenticationService.authenticate(token);
        User user = authenticationService.getUser(token);
        
        Product product = productService.findById(addToCartDTO.getProductId());
        
        Cart cart = new Cart();
        cart.setProduct(product);
        cart.setUser(user);
        cart.setQuantity(addToCartDTO.getQuantity());
        cart.setCreatedDate(new Date());

        cartRepository.save(cart);

        return  new ApiResponse(true,"Added to Cart");
        
        
    }

    @Override
    public CartDTO getCartItems(String token) {

        authenticationService.authenticate(token);
        User user = authenticationService.getUser(token);
        List<Cart> cartList =  cartRepository.findAllByUserOrderByCreatedDateDesc(user);
        List<CartItemDTO> cartItems = new ArrayList<>();
        double totalCost = 0;
        for(Cart  cart : cartList) {
            CartItemDTO cartItemDTO = new CartItemDTO();
            cartItemDTO.setId(cart.getId());
            cartItemDTO.setQuantity(cart.getQuantity());
            cartItemDTO.setProduct(cart.getProduct());
            cartItems.add(cartItemDTO);
            totalCost += cartItemDTO.getQuantity()* cart.getProduct().getPrice();
        }

        CartDTO cartDTO = new CartDTO();
        cartDTO.setCartItems(cartItems);
        cartDTO.setTotalCost(totalCost);


        return cartDTO;

              
    }

    @Override
    public ApiResponse deleteCartItem(String token,Integer cartItemId) {
        
        authenticationService.authenticate(token);
        User user = authenticationService.getUser(token);

        Cart cart = cartRepository.findById(cartItemId).orElseThrow(()-> new ResourceNotFoundException("Cart id is invalid."));

        if(cart.getUser() != user) {
            throw new CustomException("cart item does not belong to user: "+cartItemId);
        }

        cartRepository.delete(cart);

        return new ApiResponse(true,"Cart item deleted successfully.>!!");


    }
    
}
