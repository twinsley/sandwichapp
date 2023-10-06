package com.winsley.sandwich.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "sandwich")
public class FoodItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "create_date")
    @CreationTimestamp
    private Date create_date;

    @Column(name = "last_update")
    @UpdateTimestamp
    private Date last_update;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "image_url")
    private String image_URL;

    @ManyToMany
    @JoinTable(name = "ingredient_fooditem",
            joinColumns = @JoinColumn(name = "food_item_id"), inverseJoinColumns = @JoinColumn(name = "ingredient_id"))
    private Collection<Ingredient> ingredients;

    @ManyToMany(mappedBy = "foodItems")
    private Collection<Topping> toppings;

    @ManyToMany(mappedBy = "foodItems")
    private Collection<CartItem> cartItems;

}
