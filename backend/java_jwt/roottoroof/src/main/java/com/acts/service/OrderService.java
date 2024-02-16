package com.acts.service;

import java.util.List;

import com.acts.dto.checkout.CheckoutItemDTO;
import com.acts.model.Order;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;

public interface OrderService {

    Session createSession(List<CheckoutItemDTO> checkoutItemDtoList)throws StripeException;

    void placeOrder(String sessionId);

    List<Order> listOrders();

    Order getOrder(Integer id);

    void cancelOrder(Integer id);

    List<Order> getAllCancelOrders();
    
} 