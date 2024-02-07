package com.acts.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class AddressDTO {

    private String houseNo;
    
    private String street;
	
	private String city;
	
	private String state;
	
    private String pinCode;

	private String zipCode;
	
}
