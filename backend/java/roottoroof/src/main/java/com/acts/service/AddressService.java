package com.acts.service;

import com.acts.dto.ApiResponse;
import com.acts.dto.address.AddressDTO;

public interface AddressService {	

	ApiResponse assignUserAddress( Integer customerId,  AddressDTO address);		

	AddressDTO getAddressDetails(Integer addressId);

	ApiResponse updateUserAddress( Integer customerId,  AddressDTO address);

    ApiResponse deleteUserAddress(Integer customerId);
	
}