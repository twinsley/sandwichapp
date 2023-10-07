package com.winsley.sandwich.dao;

import com.winsley.sandwich.entities.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost")
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}
