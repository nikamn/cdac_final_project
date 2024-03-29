package com.acts.dto.user;

// import com.acts.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SigninResponse {

    private UserDTO user;
    private String status;
    private String token;
}
