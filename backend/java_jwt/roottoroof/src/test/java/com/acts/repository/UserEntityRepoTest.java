package com.acts.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import com.acts.model.User;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserEntityRepoTest {
    
    @Autowired
	private UserRepository userRepo;

	@Autowired
	private PasswordEncoder enc;

    @Test
	void testAddUsers() {
    
   
		List<User> list = List.of(
				new User("a1", "b1","a1-1" ,"a1@gmail.com", enc.encode("12345"),"9009395852"),
				new User("a2", "b2","a2-2","a2@gmail.com", enc.encode("2345"),"9009395853"),
				new User("a3", "b3", "a3-3", "a3@gmail.com", enc.encode("1345"),"9009395854"));

		List<User> list2 = userRepo.saveAll(list);
		assertEquals(3, list2.size());

	}

}
