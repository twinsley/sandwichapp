package com.winsley.sandwich;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.winsley.sandwich.dao")
@SpringBootApplication
public class SandwichApplication {

	public static void main(String[] args) {
		SpringApplication.run(SandwichApplication.class, args);
	}

}
