package com.acts;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;

import com.acts.model.Customer;
import com.acts.repository.CustomerRepository;

@SpringBootTest
public class CustomerRepositoryTest {

    // @Autowired
    // private TestEntityManager entityManager;

    @Autowired
    private CustomerRepository customerRepository;

    @Test
    public void whenFindByEmail_thenReturnCustomer() {
        // given
        Customer customer = new Customer();
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setEmail("john@example.com");
        // entityManager.persist(customer);
        // entityManager.flush();

        // when
        Customer found = customerRepository.findByEmail(customer.getEmail()).get();

        // then
        assertThat(found.getEmail()).isEqualTo(customer.getEmail());
    }
}
