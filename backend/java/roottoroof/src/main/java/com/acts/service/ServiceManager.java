package com.acts.service;

import java.util.List;

import javax.validation.Valid;

import com.acts.dto.ApiResponse;
import com.acts.dto.service.ServiceDTO;

public interface ServiceManager {

    java.util.List<ServiceDTO> getAllServices();

    ServiceDTO getServiceById(Integer id);

    ApiResponse createService(@Valid ServiceDTO serviceDTO);

    ApiResponse updateService(Integer id, @Valid ServiceDTO serviceDTO);

    ApiResponse deleteService(Integer id);

    List<ServiceDTO> giveServicesOfCustomers(Integer id);

    ApiResponse addServiceInCustomer(Integer id);
    
}
