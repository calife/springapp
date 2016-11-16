package com.newenergy.spring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.apache.log4j.Logger;

@Controller
public class HelloController {
	
	private static final Logger logger = Logger.getLogger(HelloController.class);

	@GetMapping("/hello")
	public String hello(Model model) {
		
		//logs debug message
		if(logger.isDebugEnabled()){
			logger.debug("hello is executed!");
		}

		model.addAttribute("name", "Spring 4 NewEnergy");

		return "welcome";
	}
}
