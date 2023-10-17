package com.winsley.sandwich.dao;

import com.winsley.sandwich.entities.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collection;
@Repository
@CrossOrigin("http://localhost:4200")
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    @Query(value = "select DISTINCT * from menu_items where menu_item_id in (select menu_item_id from cart_items where cart_id in (select cart_id from carts where create_date > current_date + INTERVAL '-7 days'))", nativeQuery = true)
    Collection<MenuItem> GetSales();
}
