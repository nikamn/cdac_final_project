package com.acts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

}
