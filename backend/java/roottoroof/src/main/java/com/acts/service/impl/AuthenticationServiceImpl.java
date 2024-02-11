package com.acts.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acts.model.AuthenticationToken;
import com.acts.model.User;
import com.acts.repository.TokenRepository;
import com.acts.service.AuthenticationService;


@Service
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private TokenRepository tokenRepository;


    @Override
    public void saveConfirmationToken(AuthenticationToken authenticationToken) {

        tokenRepository.save(authenticationToken);
       
    }


    @Override
    public AuthenticationToken getToken(User user) {
        return  tokenRepository.findByUser(user);
    }
    
}
