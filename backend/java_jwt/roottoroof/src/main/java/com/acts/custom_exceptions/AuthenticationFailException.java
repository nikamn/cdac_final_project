package com.acts.custom_exceptions;

public class AuthenticationFailException extends IllegalArgumentException{
    
    public AuthenticationFailException(String message){
        super(message);
    }
}
