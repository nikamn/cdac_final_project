package com.acts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.dto.ApiResponse;
import com.acts.dto.cart.AddToCartDTO;
import com.acts.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    
    @Autowired
    private CartService cartService;

   

    //ADD TO CART API
    //http://host:port/api/cart/add, method=POST
    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody AddToCartDTO addToCartDTO){

        return  new ResponseEntity<ApiResponse>(cartService.addToCart(addToCartDTO),HttpStatus.CREATED);

    }
    //http://host:port/api/cart/, method=GET
    @GetMapping("/")
    public ResponseEntity<?> getCartItems(){
        return ResponseEntity.ok(cartService.getCartItems());
    }

    //http://host:port/api/cart/delete/1, method=DELETE
    @DeleteMapping("/delete/{cartItemId}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Integer cartItemId){
        return ResponseEntity.ok(cartService.deleteCartItem(cartItemId));
    }

}
