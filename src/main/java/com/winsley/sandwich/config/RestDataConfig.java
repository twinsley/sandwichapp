package com.winsley.sandwich.config;

import com.winsley.sandwich.entities.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
@CrossOrigin("http://localhost:3000")
public class RestDataConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){
        config.exposeIdsFor(Topping.class);
        config.exposeIdsFor(Customer.class);
        config.exposeIdsFor(FoodItem.class);
        config.exposeIdsFor(Ingredient.class);
        config.exposeIdsFor(Location.class);
    }
}
