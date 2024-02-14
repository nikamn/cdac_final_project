package com.acts.service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import com.acts.dto.ApiResponse;
import com.acts.dto.ResponseDTO;
import com.acts.dto.user.SigninRequest;
import com.acts.dto.user.SigninResponse;
import com.acts.dto.user.SignupRequest;
import com.acts.dto.user.UserDTO;

public interface UserService {

    public List<UserDTO> getAllUsers();

    public UserDTO getUserById(Integer id);

    public UserDTO getUserByEmail(String email);

    public UserDTO createUser(UserDTO userDTO);

    public UserDTO updateUser(Integer id, UserDTO updatedUser);

    public ApiResponse deleteUser(Integer id);

    public ResponseDTO signUp(SignupRequest signupDTO);

    public SigninResponse signIn(SigninRequest signInDTO) throws NoSuchAlgorithmException;

}
