package com.acts.service;


import java.util.List;


import com.acts.dto.ApiResponse;
import com.acts.dto.user.SignInDTO;
import com.acts.dto.user.SignupDTO;
import com.acts.dto.user.UserDTO;

public interface UserService {


    public List<UserDTO> getAllUsers();

    public UserDTO getUserById(Integer id);

    public UserDTO getUserByEmail(String email);

    public UserDTO createUser(UserDTO userDTO);

    public UserDTO updateUser(Integer id, UserDTO updatedUser);

    public ApiResponse deleteUser(Integer id);

    public ApiResponse signUp(SignupDTO signupDTO);
    
    public ApiResponse signIn(SignInDTO signInDTO);

}

