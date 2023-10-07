package com.winsley.sandwich.services;

import com.winsley.sandwich.dao.CartRepository;
import com.winsley.sandwich.dao.CustomerRepository;
import com.winsley.sandwich.entities.Cart;
import com.winsley.sandwich.entities.CartItem;
import com.winsley.sandwich.entities.Customer;
import com.winsley.sandwich.entities.Status;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    private CustomerRepository customerRepository;
    private CartRepository cartRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository, CartRepository cartRepository) {
        this.cartRepository = cartRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        try{
            Cart cart = purchase.getCart();
            Set<CartItem> cartItems = purchase.getCartItems();
            Customer customer = purchase.getCustomer();

            cart.setCustomer(customer);
            cart.setCartItems(cartItems);
            cart.setStatus(Status.ordered);

            cartRepository.save(cart);


        } catch (Exception e) {
            return null;
        }


        return null;
    }
}
