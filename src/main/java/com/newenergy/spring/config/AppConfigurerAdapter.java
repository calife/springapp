package com.newenergy.spring.config;

import org.apache.log4j.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.newenergy.spring")
public class AppConfigurerAdapter extends WebMvcConfigurerAdapter {
	
	private static final Logger logger = Logger.getLogger(AppConfigurerAdapter.class);
	
	@Bean
	public ViewResolver viewResolver() {
		
		if(logger.isDebugEnabled()){
			logger.debug("Start AppConfigurerAdapter::viewResolver");
		}
		
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setViewClass(JstlView.class);
		viewResolver.setPrefix("/WEB-INF/views/");
		viewResolver.setSuffix(".jsp");
		
		if(logger.isDebugEnabled()){
			logger.debug("AppConfigurerAdapter::viewResolver leave");
		}

		return viewResolver;
	}

	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

}
