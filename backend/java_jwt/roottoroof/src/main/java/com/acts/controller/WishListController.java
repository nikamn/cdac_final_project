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
import com.acts.jwt_utils.JwtUtils;
import com.acts.model.Product;
import com.acts.model.User;
import com.acts.model.WishList;
import com.acts.service.UserService;
import com.acts.service.WishListService;

@RestController
@RequestMapping("/api/wishlist")
public class WishListController {
    
        @Autowired
        private WishListService wishListService;

        @Autowired
        private UserService userService;

        @PostMapping("/add")
        public ResponseEntity<ApiResponse> addWishList(@RequestBody Product product) {
                
                User user = userService.getUserFromEmail(JwtUtils.getEmail());
                WishList wishList = new WishList(user, product);
                wishListService.createWishlist(wishList);
                return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Added to wishlist"), HttpStatus.CREATED);

        }

        @GetMapping("/")
        public ResponseEntity<?> getWishList() {
                 User user = userService.getUserFromEmail(JwtUtils.getEmail());
                return  ResponseEntity.ok(wishListService.getWishList(user));
        }

        @DeleteMapping("/delete/{productId}")
        public ResponseEntity<ApiResponse> deleteFromWishlist(@PathVariable Integer productId) {
                User user = userService.getUserFromEmail(JwtUtils.getEmail());
                wishListService.removeFromWishlist(productId, user.getId());
                return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Removed From wishlist"), HttpStatus.CREATED);

        }



}
