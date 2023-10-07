package com.winsley.sandwich.dao;

import com.winsley.sandwich.entities.Topping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost")
public interface ToppingRepository extends JpaRepository<Topping, Long> {
}
