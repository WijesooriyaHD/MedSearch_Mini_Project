package com.example.MedSearchBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@SpringBootApplication
public class MedSearchBackendApplication {

	@GetMapping("/message")
	public String message(){
		return ("backend has been successfully deployed in azure ");
	}

	public static void main(String[] args) {
		SpringApplication.run(MedSearchBackendApplication.class, args);
	}

}
