package com.acts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.acts.model.Address;
import com.acts.model.User;

public interface AddressRepository extends JpaRepository<Address, Integer> {

    long deleteAddressDetailsByState(String string);

    
    @Query("select a.owner from Address a where a.city=:city")
    List<User> findUsersByCity(String city);
	
}
