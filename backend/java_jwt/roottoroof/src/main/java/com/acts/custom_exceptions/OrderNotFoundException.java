package com.acts.custom_exceptions;

public class OrderNotFoundException extends IllegalArgumentException{
    public OrderNotFoundException(String msg) {
        super(msg);
    }
    
}
