package com.acts.service;

import com.acts.dto.AddressDTO;
import com.acts.dto.ApiResponse;

public interface AddressService {	

	ApiResponse assignEmpAddress( Integer customerId,  AddressDTO address);		

	AddressDTO getAddressDetails(Integer addressId);
	//update emp address : complete update
	ApiResponse updateEmpAddress( Integer customerId,  AddressDTO address);

    ApiResponse deleteAddress(Integer customerId);
	
}