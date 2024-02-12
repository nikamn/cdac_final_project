package com.acts.dto.user;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SigninRequest {

	@NotBlank(message = "Email can't be blank")
	@Email(message = "Invalid email format")
	private String email;

	@Length(min = 5, max = 20, message = "Invalid password length")
	private String password;

}
