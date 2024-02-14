package com.acts.service;

import java.util.List;

import com.acts.dto.checkout.CheckoutItemDTO;
import com.acts.model.Order;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;

public interface OrderService {

    Session createSession(List<CheckoutItemDTO> checkoutItemDtoList)throws StripeException;

    void placeOrder(String token, String sessionId);

    List<Order> listOrders(String token);

    Order getOrder(Integer id, String token);

    void cancelOrder(Integer id, String token);

    List<Order> getAllCancelOrders(String token);
    
} 