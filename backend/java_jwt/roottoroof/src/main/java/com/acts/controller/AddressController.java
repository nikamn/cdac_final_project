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
@RequestMapping("/api/users/{userId}/address")
@Validated
@RequiredArgsConstructor
public class AddressController {

	private final AddressService adrService;

	// http://host:port/api/users/{userId}/address , method=POST
	@PostMapping
	public ResponseEntity<?> assignUserAddress(@PathVariable @NotNull Integer userId,
			@RequestBody @Valid AddressDTO addressDTO) {

		return ResponseEntity.status(HttpStatus.CREATED).body(adrService.assignUserAddress(userId, addressDTO));
	}

	// http://host:port/api/users/{userId}/address method=GET
	@GetMapping
	public ResponseEntity<?> getAddressDetails(@PathVariable Integer userId) {

		return ResponseEntity.ok(adrService.getAddressDetails(userId));
	}

	// http://host:port/api/users/{userId}/address , method=PUT
	@PutMapping
	public ResponseEntity<?> updateUserAddress(@PathVariable @NotNull Integer userId,
			@RequestBody @Valid AddressDTO addressDTO) {

		return ResponseEntity.ok()
				.body(adrService.updateUserAddress(userId, addressDTO));
	}

	// http://host:port/api/users/{userId}/address , method=DELETE
	@DeleteMapping
	public ResponseEntity<?> deleteUserAddress(@PathVariable Integer userId) {

		return ResponseEntity.ok()
				.body(adrService.deleteUserAddress(userId));
	}

}
