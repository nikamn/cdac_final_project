package com.acts.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.acts.model.User;


@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
class AddressRepoTest {
	@Autowired
	private AddressRepository addressRepository;;

	@Test
	void testFindUsersByCity() {
		List<User> list = addressRepository.findUsersByCity("Pune");
		list.forEach(System.out::println);
        assertEquals(1, list.size());
	}
	
	@Test
	void testDeleteByCity() {
	//	long count=dao.deleteByState("MH"); OR 
		long count=addressRepository.deleteAddressDetailsByState("MH");
		System.out.println(count);
        assertEquals(1, count);
	}

}
