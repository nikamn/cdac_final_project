package com.acts.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.acts.dto.product.ProductDTO;
import com.acts.model.Product;
import com.acts.model.User;
import com.acts.model.WishList;
import com.acts.repository.WishListRepository;
import com.acts.service.WishListService;

@Service
@Transactional
public class WishListServiceImpl implements WishListService {

    @Autowired
    private WishListRepository wishListRepository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void createWishlist(WishList wishList) {
        wishListRepository.save(wishList);
    }

    @Override
    public List<ProductDTO> getWishList(User user) {

        List<WishList> wishLists = wishListRepository.findAllByUserOrderByCreatedDateDesc(user);
        List<ProductDTO> productDTOs = new ArrayList<>();

        for(WishList wishList: wishLists){
            Product product = wishList.getProduct();
            ProductDTO productDTO = mapper.map(product, ProductDTO.class);
            productDTO.setCategoryId(product.getCategory().getId());
            productDTOs.add(productDTO);
            
        }

        return productDTOs;
    }

    @Override
    public void removeFromWishlist(Integer productId,Integer userId) {
        
       wishListRepository.deleteByProductIdAndUserId(productId,userId);
    }
    
    
}
