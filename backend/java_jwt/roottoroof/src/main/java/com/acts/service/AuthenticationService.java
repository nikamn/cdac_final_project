package com.acts.service;

import com.acts.model.AuthenticationToken;
import com.acts.model.User;

public interface AuthenticationService {

    void saveConfirmationToken(AuthenticationToken authenticationToken);

    AuthenticationToken getToken(User user);

    void authenticate(String token);

    User getUser(String token);

    
}
