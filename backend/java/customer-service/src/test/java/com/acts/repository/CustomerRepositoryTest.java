package com.acts.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acts.model.Customer;

@SpringBootTest
public class CustomerRepositoryTest {

    @Autowired
    private CustomerRepository customerRepository;

    @Test
    public void whenFindByEmail_thenReturnCustomer() {
        // given
        Customer customer = new Customer();
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setEmail("johndoe@example.com");

        // when
        Customer found = customerRepository.findByEmail(customer.getEmail()).get();

        // then
        assertThat(found.getEmail()).isEqualTo(customer.getEmail());
    }
}
