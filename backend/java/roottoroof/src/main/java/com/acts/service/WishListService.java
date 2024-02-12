package com.acts.service;

import java.util.List;

import com.acts.dto.product.ProductDTO;
import com.acts.model.WishList;

public interface WishListService {

    void createWishlist(WishList wishList);

    List<ProductDTO> getWishList(String token);
    
}
