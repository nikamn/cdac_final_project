package com.acts.service;

import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.AddressDTO;
import com.acts.dto.ApiResponse;
import com.acts.model.Address;
import com.acts.model.User;
import com.acts.repository.AddressRepository;
import com.acts.repository.CustomerRepository;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class AddressServiceImpl implements AddressService {
	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private AddressRepository adrRepo;

	@Autowired
	private ModelMapper mapper;	

	@Override
	public AddressDTO getAddressDetails(Integer addressId) {
		
		return mapper.map(
				adrRepo.findById(addressId).orElseThrow(
						() -> new ResourceNotFoundException("Invalid Emp  Id Or Address not yet assigned !!!!")),
				AddressDTO.class);
	}

	@Override
	public ApiResponse assignEmpAddress(Integer customerId, AddressDTO address) {


		User customer = customerRepository.findById(customerId)
		                 .orElseThrow(()-> new ResourceNotFoundException("invaid customer id"));
        
		// map dtp --> entity
		Address addressEntity = mapper.map(address, Address.class);
        
		// establish un dir link , adr ---> emp
		addressEntity.setOwner(customer);
		// save adr details

        //adrRepo.save(addressEntity);
		
		return new ApiResponse("Assigned new Address to Customer,"+ customer.getFirstName());
			
    }

	@Override
	public ApiResponse updateEmpAddress(Integer empId, AddressDTO address) {

		Address addressEntity = adrRepo.findById(empId)
		                        .orElseThrow(()-> new ResourceNotFoundException("Address is not yet Assigned"));
	
		mapper.map(address, addressEntity);
		// save adr details
		adrRepo.save(addressEntity);
		return new ApiResponse("Updated address for Emp" +addressEntity.getId()); 
		
	}

    @Override
    public ApiResponse deleteAddress(Integer customerId) {

        Address address=adrRepo.findById(customerId).orElseThrow(()->new ResourceNotFoundException("Address not found"));
		
		return new ApiResponse("Address deleted of customer with id " + address.getId());
			

	}


}
