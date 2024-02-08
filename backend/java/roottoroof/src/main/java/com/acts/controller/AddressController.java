package com.acts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.acts.dto.AddressDTO;
import com.acts.service.AddressService;

@RestController
@RequestMapping("/api/customers/{customerId}/address")
@Validated 
public class AddressController {
	@Autowired
	private AddressService adrService;

	public AddressController() {
		System.out.println("in ctor of " + getClass());
	}

	
	// http://host:port/api/customers/{customerId}/address , method=POST
	@PostMapping
	
	public ResponseEntity<?> assignEmpAddress(@PathVariable  Integer customerId,
			@RequestBody  AddressDTO address) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(adrService.assignEmpAddress(customerId, address));
	}

	
	// http://host:port/api/customers/{customerId}/address method=GET
	@GetMapping
	
	public ResponseEntity<?> getEmpAddress(@PathVariable Integer customerId) {
		
		return ResponseEntity.ok(adrService.getAddressDetails(customerId));
	}

	
    // http://host:port/api/customers/{customerId}/address , method=PUT
	@PutMapping
	public ResponseEntity<?> updateEmpAddress(@PathVariable  Integer customerId,
			@RequestBody  AddressDTO address) {
		
		return ResponseEntity.ok()
				.body(adrService.updateEmpAddress(customerId, address));
	}

    // http://host:port/api/customers/{customerId}/address , method=DELETE
    @DeleteMapping
    public ResponseEntity<?> deleteAddress(@PathVariable  Integer customerId) {
		
		return ResponseEntity.ok()
				.body(adrService.deleteAddress(customerId));
	}



}
