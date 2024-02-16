package com.acts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.model.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
	
}
