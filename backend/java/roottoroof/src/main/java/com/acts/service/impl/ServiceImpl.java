package com.acts.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;

import com.acts.custom_exceptions.ResourceNotFoundException;
import com.acts.dto.ApiResponse;
import com.acts.dto.service.ServiceDTO;

import com.acts.model.Service;
import com.acts.repository.ServiceRepository;
import com.acts.service.ServiceManager;

import lombok.AllArgsConstructor;

@org.springframework.stereotype.Service
@Transactional
@AllArgsConstructor
public class ServiceImpl implements ServiceManager {

    private final ServiceRepository serviceRepository;

    private final ModelMapper mapper;


    @Override
    public List<ServiceDTO> getAllServices() {
       
        List<Service> services = serviceRepository.findAll();

        return services.stream().map(service-> mapper.map(service, ServiceDTO.class)).collect(Collectors.toList());
        
    }

    @Override
    public ServiceDTO getServiceById(Integer id) {

        Service service = serviceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Id"));

        ServiceDTO serviceDTO = mapper.map(service, ServiceDTO.class);
        serviceDTO.setUserId(service.getUser().getId());

        return  serviceDTO;
       
    }

    @Override
    public ServiceDTO createService(ServiceDTO serviceDTO) {
        Service service = mapper.map(serviceDTO, Service.class);
        Service savedService = serviceRepository.save(service);
        return mapper.map(savedService, ServiceDTO.class);
       
    }

    @Override
    public ServiceDTO updateService(Integer id, @Valid ServiceDTO serviceDTO) {

        Service service = serviceRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Invalid  ID"));

        mapper.map(serviceDTO, service);
        serviceRepository.save(service);
       
        serviceDTO.setUserId(service.getUser().getId());

        return serviceDTO;
        
    }

    @Override
    public ApiResponse deleteService(Integer id) {

        

        Service service = serviceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid user id"));

        serviceRepository.delete(service);

        return new ApiResponse("Service details deleted");

       
    }

    @Override
    public List<ServiceDTO> giveServicesOfUser(Integer id) {
        System.out.println("Inside the sevice impl");
        List<Service> services =  serviceRepository.findServicesByUserId(id);

        return services.stream().map(service-> mapper.map(service, ServiceDTO.class)).collect(Collectors.toList());
        
    }


   
    
}
