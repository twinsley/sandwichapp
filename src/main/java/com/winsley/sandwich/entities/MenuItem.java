package com.winsley.sandwich.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="menu_items")
@Getter
@Setter
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menuItem_id")
    private Long id;

    @Column(name = "create_date")
    @CreationTimestamp
    private Date create_date;

    @Column(name = "description", length = 2500)
    private String description;

    @Column(name = "image_url", length = 2500)
    private String image_URL;

    @Column(name = "last_update")
    @UpdateTimestamp
    private Date last_update;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "menuItem_title")
    private String menuItem_title;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "menuItem")
    private Set<CartItem> cartItems = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "menuItem_id")
    private Set<Topping> toppings = new HashSet<>();
}
