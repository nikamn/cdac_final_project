package com.acts.dto.address;

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

    //private Integer id;
    
    private String houseNo;
    
    private String street;
	
	private String city;
	
	private String state;
	
    private String pinCode;

	private String zipCode;
	
}
