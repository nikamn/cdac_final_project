package com.acts.dto.user;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
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

	private String password;

}
