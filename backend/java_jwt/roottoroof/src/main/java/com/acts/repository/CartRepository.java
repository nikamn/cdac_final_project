package com.acts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.Cart;
import com.acts.model.User;

public interface CartRepository extends JpaRepository<Cart,Integer>{

    List<Cart> findAllByUserOrderByCreatedDateDesc(User user);

    void deleteByUser(User user);

}
