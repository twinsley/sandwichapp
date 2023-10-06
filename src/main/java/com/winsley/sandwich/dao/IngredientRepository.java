package com.winsley.sandwich.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost")
public interface IngredientRepository extends JpaRepository<IngredientRepository, Long> {
}
