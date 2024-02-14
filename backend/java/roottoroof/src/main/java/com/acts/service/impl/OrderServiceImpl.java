package com.acts.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acts.custom_exceptions.OrderNotFoundException;
import com.acts.dto.cart.CartDTO;
import com.acts.dto.cart.CartItemDTO;
import com.acts.dto.checkout.CheckoutItemDTO;
import com.acts.model.Order;
import com.acts.model.OrderItem;
import com.acts.model.User;
import com.acts.repository.OrderItemsRepository;
import com.acts.repository.OrderRepository;
import com.acts.service.AuthenticationService;
import com.acts.service.CartService;
import com.acts.service.OrderService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.param.checkout.SessionCreateParams.LineItem;
import com.stripe.param.checkout.SessionCreateParams.LineItem.PriceData;


@Service
@Transactional

public class OrderServiceImpl implements OrderService {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private CartService cartService;

     @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderItemsRepository orderItemsRepository;

    HashMap<String,List<Order>> cancelOrders = new HashMap<>();
    

    @Value("${BASE_URL}")
    private String baseURL;

    @Value("${STRIPE_SECRET_KEY}")
    private String apiKey;

    
    // create session from list of checkout items
    @Override
    public Session createSession(List<CheckoutItemDTO> checkoutItemDTOList) throws StripeException {
        
         // supply success and failure url for stripe
        String successURL = baseURL + "payment/success";
        String failedURL = baseURL + "payment/failed";

        // set the private key
        Stripe.apiKey = apiKey;

        List<SessionCreateParams.LineItem> sessionItemsList = new ArrayList<>();

        // for each product compute SessionCreateParams.LineItem
        for (CheckoutItemDTO checkoutItemDTO : checkoutItemDTOList) {
            System.out.println("In create session");
            sessionItemsList.add(createSessionLineItem(checkoutItemDTO));
        }

        // build the session param
        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setCancelUrl(failedURL)
                .addAllLineItem(sessionItemsList)
                .setSuccessUrl(successURL)
                .build();
        return Session.create(params);
    }


     // build each product in the stripe checkout page
    LineItem createSessionLineItem(CheckoutItemDTO checkoutItemDTO) {
        System.out.println("In create sessionLineItem");
        return SessionCreateParams.LineItem.builder()
                // set price for each product
                .setPriceData(createPriceData(checkoutItemDTO))
                // set quantity for each product
                .setQuantity(Long.parseLong(String.valueOf(checkoutItemDTO.getQuantity())))
                .build();
    }

    // create total price
    LineItem.PriceData createPriceData(CheckoutItemDTO checkoutItemDTO) {

        System.out.println("In price  Data");
        System.out.println(checkoutItemDTO.getPrice());
        return  PriceData.builder()
                .setCurrency("usd")
                .setUnitAmount((long)(checkoutItemDTO.getPrice()*100))
                .setProductData(
                                 PriceData.ProductData.builder()
                                .setName(checkoutItemDTO.getProductName())
                                .build())
                .build();
    }


    @Override
    public void placeOrder(String token, String sessionId) {
        
        authenticationService.authenticate(token);
        User user = authenticationService.getUser(token);

        // first let get cart items for the user
        CartDTO cartDTO = cartService.getCartItems(token);

        List<CartItemDTO> cartItemDTOList = cartDTO.getCartItems();

        // create the order and save it.
        System.out.println("create the order and save it.");
        Order newOrder = new Order();
        newOrder.setCreatedDate(new Date());
        newOrder.setSessionId(sessionId);
        newOrder.setUser(user);
        System.out.println(cartDTO.getTotalCost());
        newOrder.setTotalPrice(cartDTO.getTotalCost());
        orderRepository.save(newOrder);

        for (CartItemDTO cartItemDTO : cartItemDTOList) {
            // create orderItem and save each one
            OrderItem orderItem = new OrderItem();
            orderItem.setCreatedDate(new Date());
            orderItem.setPrice(cartItemDTO.getProduct().getPrice());
            orderItem.setProduct(cartItemDTO.getProduct());
            orderItem.setQuantity(cartItemDTO.getQuantity());
            orderItem.setOrder(newOrder);

            // add to order item list
            System.out.println(orderItem.getProduct().getProductName());
            System.out.println(orderItem.getPrice());
            
            orderItemsRepository.save(orderItem);
        }
        

        cartService.deleteUserCartItems(user);
        
    }


    @Override
    public List<Order> listOrders(String token) {
        //authenticate user
        authenticationService.authenticate(token);
        // retrieve user
        User user = authenticationService.getUser(token);
        
        return orderRepository.findAllByUserOrderByCreatedDateDesc(user);

    }


    @Override
    public Order getOrder(Integer orderId,String token) throws OrderNotFoundException {
        authenticationService.authenticate(token);
        return orderRepository.findById(orderId).orElseThrow(()->new OrderNotFoundException("Order not found"));
    }


    @Override
    public void cancelOrder(Integer orderId, String token) {
        
        authenticationService.authenticate(token);
        Order order = orderRepository.findById(orderId).orElseThrow(()->  new OrderNotFoundException("Order not found"));
        orderItemsRepository.deleteByOrderId(orderId);  
        
        List<Order> list = cancelOrders.get(token);
        if(list!=null) {
             list.add(order);
             cancelOrders.put(token, list);
        }
        else{
            list = new ArrayList<>();
            list.add(order);
            cancelOrders.put(token, list);
        }
        System.out.println(cancelOrders.get(token).get(0).getId());
        orderRepository.deleteById(orderId);

    }


    @Override
    public List<Order> getAllCancelOrders(String token) {
       
        authenticationService.authenticate(token);
        if(cancelOrders.containsKey(token)){
            return cancelOrders.get(token);
        }
        return null;
    }

    
    

}
