package com.acts.dto.user;

// import com.acts.model.User;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Builder
public class SigninResponse {

    private UserDTO user;
    private String status;
    private String token;

    public SigninResponse(UserDTO user, String status, String token) {
        this.user = user;
        this.status = status;
        this.token = token;
    }

}
