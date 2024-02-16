package com.acts.service;

import com.acts.dto.ApiResponse;
import com.acts.dto.cart.AddToCartDTO;
import com.acts.dto.cart.CartDTO;
import com.acts.model.User;

public interface CartService {

    ApiResponse addToCart(AddToCartDTO addToCartDTO);

    CartDTO getCartItems();

    ApiResponse deleteCartItem(Integer cartItemId);

    void deleteUserCartItems(User user);
    
}
