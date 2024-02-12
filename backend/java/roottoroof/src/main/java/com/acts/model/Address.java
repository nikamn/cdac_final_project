package com.acts.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "addresses")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(length = 20, name = "house_no")
	private String houseNo;

	@Column(length = 30)
	private String street;

	@Column(length = 20)
	private String city;

	@Column(length = 20)
	private String state;

	@Column(length = 6, name = "pin_code")
	private String pinCode;

	@Column(length = 6, name = "zip_code")
	private String zipCode;

	// owning side : Address (since FK)
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@MapsId
	private User owner;
}