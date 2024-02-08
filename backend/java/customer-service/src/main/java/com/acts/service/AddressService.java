package com.acts.service;

import com.acts.dto.AddressDTO;

public interface AddressService {	

	AddressDTO assignEmpAddress( Integer customerId,  AddressDTO address);		

	AddressDTO getAddressDetails(Integer addressId);
	//update emp address : complete update
	AddressDTO updateEmpAddress( Integer customerId,  AddressDTO address);

    AddressDTO deleteAddress(Integer customerId);
	
}