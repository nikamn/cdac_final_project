package com.acts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.model.User;
import com.acts.repository.CustomerRepository;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {

    @Autowired
    private final CustomerRepository customerRepository;


    public List<User> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<User> getCustomerById(Integer id) {
        return customerRepository.findById(id);
    }

    public Optional<User> getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    public User createCustomer(User customer) {
        // Additional business logic can be added here before saving the customer
        return customerRepository.save(customer);
    }

    public User updateCustomer(Integer id, User updatedCustomer) {
        // Additional business logic can be added here before updating the customer
        updatedCustomer.setId(id); // Ensure that the ID of the updated customer is set
        return customerRepository.save(updatedCustomer);
    }

    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }
}

