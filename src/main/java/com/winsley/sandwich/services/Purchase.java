package com.winsley.sandwich.services;

import com.winsley.sandwich.entities.Cart;
import com.winsley.sandwich.entities.CartItem;
import com.winsley.sandwich.entities.Customer;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Cart cart;
    private Set<CartItem> cartItem;
}
