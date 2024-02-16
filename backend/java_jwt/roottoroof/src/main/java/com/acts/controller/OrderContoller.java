package com.acts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.acts.custom_exceptions.AuthenticationFailException;
import com.acts.dto.ApiResponse;
import com.acts.dto.checkout.CheckoutItemDTO;
import com.acts.dto.checkout.StripeResponse;
import com.acts.model.Order;
import com.acts.service.OrderService;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;

@RestController
@RequestMapping("api/order")
public class OrderContoller {

    @Autowired
    private OrderService orderService;


    @PostMapping("/create-checkout-session")
    public ResponseEntity<?> checkoutList(@RequestBody List<CheckoutItemDTO> checkoutItemDtoList) throws StripeException {
        // create the stripe session
        Session session = orderService.createSession(checkoutItemDtoList);
        StripeResponse stripeResponse = new StripeResponse(session.getId());
        // send the stripe session id in response
        return new ResponseEntity<StripeResponse>(stripeResponse, HttpStatus.OK);
    
    }

    //place order
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/add")
    public ResponseEntity<?> placeOrder(@RequestParam("sessionId") String sessionId)
            throws AuthenticationFailException {
    
        System.out.println("In Order COntroller --------");
        // place the order
        orderService.placeOrder(sessionId);
        return new ResponseEntity<>(new ApiResponse(true, "Order has been placed"), HttpStatus.CREATED);
    }

    //get all orders
    @GetMapping("/")
    public ResponseEntity<?> getAllOrders(){
        
        return new ResponseEntity<>(orderService.listOrders(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable("id") Integer id)
    {
    
        return new ResponseEntity<>( orderService.getOrder(id),HttpStatus.OK);

    }

    @DeleteMapping("/cancel/{id}")
    public ResponseEntity<?>  cancelOrder(@PathVariable Integer id){

            orderService.cancelOrder(id);
            return new ResponseEntity<>(new ApiResponse(true,"Order has been cancelled"),HttpStatus.OK);
        
    }

    @GetMapping("/get-cancel-orders")
    public ResponseEntity<?> getCancelOrders(){
        List<Order> cancelOrders = orderService.getAllCancelOrders();
        if(cancelOrders!=null){
            return  ResponseEntity.ok(cancelOrders);
        }
        return ResponseEntity.ok(new ApiResponse(false,"No Cancel Orders Present"));
    }

}
