package com.acts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.User;
import com.acts.model.WishList;

public interface WishListRepository extends JpaRepository<WishList,Integer> {

    List<WishList> findAllByUserOrderByCreatedDateDesc(User user);

    void deleteByProductIdAndUserId(Integer productId, Integer userId);

    Object findByProductIdAndUserId(Integer productId, Integer userId);

     

    
}
