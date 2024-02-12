package com.acts.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.acts.dto.ApiResponse;
import com.acts.model.Product;
import com.acts.model.User;
import com.acts.model.WishList;
import com.acts.service.AuthenticationService;
import com.acts.service.ProductService;
import com.acts.service.WishListService;

@RestController
@RequestMapping("/api/wishlist")
public class WishListController {
    
        @Autowired
        private WishListService wishListService;

         @Autowired
        private AuthenticationService authenticationService;



        @PostMapping("/add/{token}")
        public ResponseEntity<ApiResponse> addWishList(@RequestBody Product product,@PathVariable String token) {
                authenticationService.authenticate(token);
                User user = authenticationService.getUser(token);
                WishList wishList = new WishList(user, product);
                wishListService.createWishlist(wishList);
                return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Added to wishlist"), HttpStatus.CREATED);

        }

        @GetMapping("/{token}")
        public ResponseEntity<?> getWishList(@PathVariable String token) {
                
                return  ResponseEntity.ok(wishListService.getWishList(token));
        }


       



}
