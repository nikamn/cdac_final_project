package com.acts.service.impl;

import java.util.List;

import javax.validation.Valid;

import com.acts.dto.ApiResponse;
import com.acts.dto.service.ServiceDTO;
import com.acts.service.ServiceManager;

public class ServiceImpl implements ServiceManager {

    @Override
    public List<ServiceDTO> getAllServices() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getServiceById'");
        
    }

    @Override
    public ServiceDTO getServiceById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getServiceById'");
    }

    @Override
    public ApiResponse createService(@Valid ServiceDTO serviceDTO) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createService'");
    }

    @Override
    public ApiResponse updateService(Integer id, @Valid ServiceDTO serviceDTO) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateService'");
    }

    @Override
    public ApiResponse deleteService(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteService'");
    }

    @Override
    public List<ServiceDTO> giveServicesOfCustomers(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'giveServicesOfCustomers'");
    }

    @Override
    public ApiResponse addServiceInCustomer(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'addServiceInCustomer'");
    }
    
}
