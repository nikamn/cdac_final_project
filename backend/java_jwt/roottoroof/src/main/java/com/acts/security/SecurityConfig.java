package com.acts.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

        @Autowired
        private JWTRequestFilter jwtFilter;

        @Bean
        public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
                http
                                .cors()
                                .and()
                                .exceptionHandling()
                                .authenticationEntryPoint(
                                                (request, resp, exc) -> resp.sendError(HttpStatus.UNAUTHORIZED.value(),
                                                                "Not yet authenticated"))
                                .and()
                                .csrf().disable(). // disable CSRF to continue with REST APIs
                                authorizeRequests() // specify all authorization rules (i.e authorize all requests)
                                .antMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                                .antMatchers(HttpMethod.GET, "/api/categories/**").permitAll()
                                .antMatchers("/api/users/signin",
                                                "/api/users/signup",
                                                "/swagger*/**",
                                                "/v*/api-docs/**")
                                .permitAll()

                                .anyRequest().authenticated() // all remaining end points accessible only to
                                                              // authenticated users
                                .and().sessionManagement() // configure HttpSession management
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // DO NOT use HttpSession for
                                                                                        // storing any sec
                                                                                        // info
                                .and()
                                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

                return http.build();
        }

        // expose spring supplied auth mgr as a spring bean , so that auth controller
        // can use it for authentication .
        @Bean
        public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
                return config.getAuthenticationManager();
        }
}
