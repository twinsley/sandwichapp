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
@Table(name="toppings")
@Getter
@Setter
public class Topping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topping_id")
    private Long id;

    @Column(name = "create_date")
    @CreationTimestamp
    private Date create_date;

    @Column(name = "topping_price")
    private BigDecimal topping_price;

    @Column(name = "topping_title")
    private String topping_title;

    @Column(name = "image_url", length = 2500)
    private String image_URL;

    @Column(name = "last_update")
    @UpdateTimestamp
    private Date last_update;

    @ManyToOne
    @JoinColumn(name = "menuItem_id")
    private MenuItem menuItem_id;

    @ManyToMany(mappedBy = "toppings")
    private Collection<CartItem> cartItems;
}
