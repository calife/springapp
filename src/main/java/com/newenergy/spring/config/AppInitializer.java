package com.newenergy.spring.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.apache.log4j.Logger;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import com.newenergy.spring.controllers.HelloController;

/**
 * Spring4 replacement for web.xml
 * @author Pucci
 */
public class AppInitializer implements WebApplicationInitializer {
	
	private static final Logger logger = Logger.getLogger(AppInitializer.class);

	public void onStartup(ServletContext container) throws ServletException {
		
		if(logger.isDebugEnabled()){
			logger.debug("Start AppInitializer::onStartup");
		}

		AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
		ctx.register(AppConfigurerAdapter.class);
		ctx.setServletContext(container);

		ServletRegistration.Dynamic servlet = container.addServlet("dispatcher", new DispatcherServlet(ctx));

		servlet.setLoadOnStartup(1);
		servlet.addMapping("/");
		
		if(logger.isDebugEnabled()){
			logger.debug(" AppInitializer::onStartup leave");
		}
	}

}
