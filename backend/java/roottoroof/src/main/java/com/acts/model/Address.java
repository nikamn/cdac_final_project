package com.acts.model;

import javax.persistence.*;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="cust_adr")
@NoArgsConstructor
@Getter
@Setter
@ToString

public class Address  {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 20,name = "house_no")
    private String houseNo;

	@Column(length=30)
	private String street;

	@Column(length=20)
	private String city;

	@Column(length=20)
	private String state;

    @Column(length=20,name="pin_code")
	private String pinCode;
	
	@Column(length=20,name="zip_code")
	private String zipCode;

	//owning side : Address (since FK)
	@OneToOne (fetch = FetchType.LAZY)
	@JoinColumn(name="customer_id")
	@MapsId
	private Customer owner;
}