package com.acts.custom_exceptions;

public class CustomException extends IllegalArgumentException {

    public CustomException(String message){
        super(message);
    }
    
}
