package com.acts.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.ApiResponse;
import com.acts.dto.UserDTO;
import com.acts.model.Address;
import com.acts.model.User;
import com.acts.repository.AddressRepository;
import com.acts.repository.UserRepository;
import com.acts.service.CustomerService;


@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private UserRepository customerRepository;

    @Autowired
	private ModelMapper mapper;

    @Autowired
	private AddressRepository adrRepo;



    public List<UserDTO> getAllCustomers() {

        List<User> customers = customerRepository.findAll();
        return customers.stream().map(customer -> mapper.map(customer, UserDTO.class)).collect(Collectors.toList());
    }

    public UserDTO getCustomerById(Integer id) {
        
        User customer = customerRepository.findById(id)
                       .orElseThrow(()-> new ResourceNotFoundException("INVALID ID"));
            
        return mapper.map(customer, UserDTO.class);
	}

    public UserDTO getCustomerByEmail(String email) {
        User customer = customerRepository.findByEmail(email)
                       .orElseThrow(()-> new ResourceNotFoundException("Email not found"));
        
        return mapper.map(customer, UserDTO.class);
    }

    public UserDTO createCustomer(UserDTO customerDTO) {
        
			User customer = mapper.map(customerDTO, User.class);
			User savedUser = customerRepository.save(customer);
			return mapper.map(savedUser,UserDTO.class);			
    }

    public UserDTO updateCustomer(Integer id, UserDTO customerDTO) {
        
        User customer = customerRepository.findById(id)
                        .orElseThrow(()->new ResourceNotFoundException("Invalid Customer ID"));


        mapper.map(customerDTO,customer);
        customerRepository.save(customer);
        customerDTO.setId(id); //// so that it doesn't send null in the json resp

        return customerDTO;


    }

    public ApiResponse deleteCustomer(Integer id) {
        

        Optional<Address> optionalAddress = adrRepo.findById(id);
        if(optionalAddress.isPresent())
           adrRepo.delete(optionalAddress.get());

        User customer = customerRepository.findById(id)
                        .orElseThrow(()-> new ResourceNotFoundException("Invalid customer id"));

        customerRepository.delete(customer);
        // // Before deleting emp rec , delete it's child rec from ProjectEmpDetails
		// projectEmpRepo.deleteByMyEmployeeId(empId);// yet to be tested

        return new ApiResponse("Customer Details deleted");
                
    }
}
