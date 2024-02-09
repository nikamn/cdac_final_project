package com.acts.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

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

import com.acts.dto.address.AddressDTO;
import com.acts.service.AddressService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/customers/{customerId}/address")
@Validated 
@RequiredArgsConstructor
public class AddressController {
	
	private final AddressService adrService;

	
	// http://host:port/api/customers/{customerId}/address , method=POST
	@PostMapping
	public ResponseEntity<?> assignUserAddress(@PathVariable @NotNull Integer customerId,
			@RequestBody @Valid  AddressDTO addressDTO) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(adrService.assignUserAddress(customerId, addressDTO));
	}

	
	// http://host:port/api/customers/{customerId}/address method=GET
	@GetMapping
	public ResponseEntity<?> getAddressDetails(@PathVariable Integer customerId) {
		
		return ResponseEntity.ok(adrService.getAddressDetails(customerId));
	}

	
    // http://host:port/api/customers/{customerId}/address , method=PUT
	@PutMapping
	public ResponseEntity<?> updateUserAddress(@PathVariable  @NotNull Integer customerId,
			@RequestBody @Valid AddressDTO addressDTO) {
		
		return ResponseEntity.ok()
				.body(adrService.updateUserAddress(customerId, addressDTO));
	}

    // http://host:port/api/customers/{customerId}/address , method=DELETE
    @DeleteMapping
    public ResponseEntity<?> deleteUserAddress(@PathVariable  Integer customerId) {
		
		return ResponseEntity.ok()
				.body(adrService.deleteUserAddress(customerId));
	}



}
