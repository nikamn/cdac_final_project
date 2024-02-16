package com.acts.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.acts.model.OrderItem;
import com.acts.repository.OrderItemsRepository;
import com.acts.service.OrderItemsService;

public class OrderItemsServiceImpl implements OrderItemsService {

    @Autowired
    private OrderItemsRepository orderItemsRepository;

    @Override
    public void addOrderedProducts(OrderItem orderItem) {

        orderItemsRepository.save(orderItem);
       
    }
    
}
