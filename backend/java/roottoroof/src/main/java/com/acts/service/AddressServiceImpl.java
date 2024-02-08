package com.acts.service;

import com.acts.dto.AddressDTO;
import com.acts.model.Address;
import com.acts.model.User;
import com.acts.repository.AddressRepository;
import com.acts.repository.CustomerRepository;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class AddressServiceImpl implements AddressService {
	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private AddressRepository adrRepo;

	@Autowired
	private ModelMapper mapper;	

	@Override
	public AddressDTO getAddressDetails(Integer addressId) {
		
		return mapper.map(
				adrRepo.findById(addressId).get(),
				AddressDTO.class);
	}

	@Override
	public AddressDTO assignEmpAddress(Integer customerId, AddressDTO address) {

		User customer = customerRepository.findById(customerId).get();
        
		// map dtp --> entity
		Address addressEntity = mapper.map(address, Address.class);
        
		// establish un dir link , adr ---> emp
		addressEntity.setOwner(customer);
		// save adr details

        //adrRepo.save(addressEntity);
		return mapper.map(adrRepo.save(addressEntity), AddressDTO.class);
			
    }

	@Override
	public AddressDTO updateEmpAddress(Integer empId, AddressDTO address) {
		Address addressEntity = adrRepo.findById(empId).get();
	
		mapper.map(address, addressEntity);
		// save adr details
		
        return mapper.map(adrRepo.save(addressEntity), AddressDTO.class);
	}

    @Override
    public AddressDTO deleteAddress(Integer customerId) {

        Address addressEntity = adrRepo.findById(customerId).orElseThrow(()->new IllegalArgumentException());

        adrRepo.deleteById(customerId);

       return mapper.map(addressEntity, AddressDTO.class);
 
           
       
    }


}
