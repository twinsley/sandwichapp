package com.winsley.sandwich.dao;

import com.winsley.sandwich.entities.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
