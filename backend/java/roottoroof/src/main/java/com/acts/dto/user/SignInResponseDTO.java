package com.acts.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SignInResponseDTO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String message;

}
