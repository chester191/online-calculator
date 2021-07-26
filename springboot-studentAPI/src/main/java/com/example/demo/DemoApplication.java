package com.example.demo;

import com.example.demo.student.Student;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
//	@GetMapping
//	public String hello(){
//		return "Hello World";
//	}
//	@GetMapping
//	public  ArrayList<String> users(){
//		ArrayList<String> a = new ArrayList<String>();
//		a.add("user1");
//		a.add("user2");
//		System.out.println(a);
//		return a;
//	}

}
