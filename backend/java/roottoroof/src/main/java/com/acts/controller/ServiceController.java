package com.acts.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.dto.service.ServiceDTO;
import com.acts.service.ServiceManager;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/services")
@RequiredArgsConstructor

public class ServiceController {

    private final ServiceManager serviceManager;

    @GetMapping
    public ResponseEntity<?>  getAllServices(){

        return ResponseEntity.ok(serviceManager.getAllServices());
    }

     @GetMapping("/{id}")
    public ResponseEntity<?> getServiceById(@PathVariable Integer id) {
        
        return ResponseEntity.ok(serviceManager.getServiceById(id));
    }

    
    @PostMapping
    public ResponseEntity<?> createService(@RequestBody @Valid ServiceDTO serviceDTO) {
        
        return ResponseEntity.status(HttpStatus.CREATED).body(serviceManager.createService(serviceDTO));
    }

    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateService(@PathVariable Integer id, @RequestBody @Valid ServiceDTO serviceDTO) {

       return ResponseEntity.ok(serviceManager.updateService(id, serviceDTO));
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteService(@PathVariable Integer id) {

        return ResponseEntity.ok(serviceManager.deleteService(id));
    }


    /* Section of the customers starts here..!() */
    
    //return the services of the customer with given id
    @GetMapping("/customers/{id}")
    public ResponseEntity<?> giveServicesOfCustomer(@PathVariable Integer id) {

        return ResponseEntity.ok(serviceManager.giveServicesOfCustomers(id));
    }

    //add the given service in the services of given customer
    @PostMapping("{serviceId}/customers/{customerId}")
    public ResponseEntity<?> addServiceInCustomer(@PathVariable Integer id) {

        return ResponseEntity.ok(serviceManager.addServiceInCustomer(id));

    }
    

    
    
    
}
