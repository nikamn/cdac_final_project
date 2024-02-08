package com.acts.service;


import java.util.List;

import com.acts.dto.ApiResponse;
import com.acts.dto.UserDTO;

public interface CustomerService {


    public List<UserDTO> getAllCustomers();

    public UserDTO getCustomerById(Integer id);

    public UserDTO getCustomerByEmail(String email);

    public UserDTO createCustomer(UserDTO customerDTO);

    public UserDTO updateCustomer(Integer id, UserDTO updatedCustomer);

    public ApiResponse deleteCustomer(Integer id);
}

