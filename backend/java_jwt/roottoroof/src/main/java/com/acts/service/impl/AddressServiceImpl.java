package com.acts.service.impl;


import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.ApiResponse;
import com.acts.dto.address.AddressDTO;
import com.acts.model.Address;
import com.acts.model.User;
import com.acts.repository.AddressRepository;
import com.acts.repository.UserRepository;
import com.acts.service.AddressService;

import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {
	
	private final UserRepository customerRepository;

	
	private final AddressRepository adrRepo;

	@Autowired
	private  ModelMapper mapper;	

	@Override
	public AddressDTO getAddressDetails(Integer addressId) {
		
		return mapper.map(
				adrRepo.findById(addressId).orElseThrow(
						() -> new ResourceNotFoundException("Invalid Emp  Id Or Address not yet assigned !!!!")),
				AddressDTO.class);

	}

	@Override
	public ApiResponse assignUserAddress(Integer customerId, AddressDTO address) {

		System.out.println(customerId);
		System.out.println(address.toString());

		User customer = customerRepository.findById(customerId)
		                 .orElseThrow(()-> new ResourceNotFoundException("invaid customer id"));
        

		System.out.println(customer.toString());

		// map dto --> entity
		Address addressEntity = mapper.map(address, Address.class);
        
		System.out.println(addressEntity.toString());

		// establish un dir link , adr ---> emp
		addressEntity.setOwner(customer);
		// save adr details
		System.out.println(addressEntity.toString());
        adrRepo.save(addressEntity);
		
		return new ApiResponse("Assigned new Address to Customer,"+ customer.getFirstName());
			
    }

	@Override
	public ApiResponse updateUserAddress(Integer empId, AddressDTO address) {

		Address addressEntity = adrRepo.findById(empId)
		                        .orElseThrow(()-> new ResourceNotFoundException("Address is not yet Assigned"));
	
		mapper.map(address, addressEntity);
		// save adr details
		adrRepo.save(addressEntity);
		return new ApiResponse("Updated address for Emp" +addressEntity.getId()); 
		
	}

    @Override
    public ApiResponse deleteUserAddress(Integer customerId) {

        Address address=adrRepo.findById(customerId).orElseThrow(()->new ResourceNotFoundException("Address not found"));
		
		return new ApiResponse("Address deleted of customer with id " + address.getId());
			

	}

	// Function<Address, AddressDTO> getAddressDTOFromAdress = address -> {
    //     AddressDTO addressDTO = mapper.map(address, AddressDTO.class);
    //     //addressDTO.setId(address.getId());
    //     return addressDTO;
    // };


}
