package com.acts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.OrderItem;

public interface OrderItemsRepository extends JpaRepository<OrderItem, Integer> {

    void deleteByProductId(Integer id);

    void deleteByOrderId(Integer orderId);

}
