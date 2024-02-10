package com.acts.service;

import java.util.List;


import com.acts.dto.ApiResponse;
import com.acts.dto.service.ServiceDTO;

public interface ServiceManager {

    java.util.List<ServiceDTO> getAllServices();

    ServiceDTO getServiceById(Integer id);

    ServiceDTO createService( ServiceDTO serviceDTO);

    ServiceDTO updateService(Integer id,  ServiceDTO serviceDTO);

    ApiResponse deleteService(Integer id);

    List<ServiceDTO> giveServicesOfUser(Integer id);

    
}
