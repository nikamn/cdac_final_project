package com.acts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.acts.model.Service;

public interface ServiceRepository extends JpaRepository<Service, Integer> {

    @Query( value = "SELECT * FROM services s WHERE s.user_id = ?1", 
    nativeQuery = true)
    List<Service> findServicesByUserId(Integer id);

    
}
