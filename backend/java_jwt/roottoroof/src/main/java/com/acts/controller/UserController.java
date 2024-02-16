package com.acts.controller;

import java.security.NoSuchAlgorithmException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.dto.user.SigninRequest;
import com.acts.dto.user.SigninResponse;
import com.acts.dto.user.SignupRequest;
import com.acts.dto.user.UserDTO;
import com.acts.jwt_utils.JwtUtils;
import com.acts.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils utils;

    // http://host:port/api/users , method=GET
    @GetMapping
    public ResponseEntity<?> getAllUsers() {

        return ResponseEntity.ok(userService.getAllUsers());

    }

    // http://host:port/api/users/{id} , method=GET
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Integer id) {

        return ResponseEntity.ok(userService.getUserById(id));
    }

    // http://host:port/api/users , method=POST
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody @Valid UserDTO userDTO) {

        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(userDTO));
    }

    // http://host:port/api/users/{id} , method=PUT
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody @Valid UserDTO updatedUser) {

        return ResponseEntity.ok(userService.updateUser(id, updatedUser));
    }

    // http://host:port/api/users/{id} , method=DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {

        return ResponseEntity.ok(userService.deleteUser(id));
    }

    // http://host:port/api/users/signup , method=POST
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody SignupRequest signupDTO) {
        return ResponseEntity.ok(userService.signUp(signupDTO));
    }

    // http://host:port/api/users/signin , method=POST
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody SigninRequest signInDTO) throws NoSuchAlgorithmException {
        Authentication principal = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(signInDTO.getEmail(), signInDTO.getPassword()));

		// generate JWTS
		String jwtToken = utils.generateJwtToken(principal);
        SigninResponse signInResponse = userService.signIn(signInDTO);

        signInResponse.setToken(jwtToken);
        return ResponseEntity.ok(signInResponse);

    }

}
