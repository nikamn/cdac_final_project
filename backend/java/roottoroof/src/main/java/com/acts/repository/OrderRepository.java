package com.acts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.Order;
import com.acts.model.User;

public interface OrderRepository extends JpaRepository<Order, Integer> {

    List<Order> findAllByUserOrderByCreatedDateDesc(User user);

}
