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
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    private CustomerRepository customerRepository;
    private CartRepository cartRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository, CartRepository cartRepository) {
        this.customerRepository = customerRepository;
        this.cartRepository = cartRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        try {
            Cart cart = purchase.getCart();
            String orderTrackingNumber = generateOrderTrackingNumber();

            Set<CartItem> cartItems = purchase.getCartItems();

            cartItems.forEach(item -> cart.add(item));

            Customer customer = purchase.getCustomer();

            cart.setOrderTrackingNumber(orderTrackingNumber);
            cart.setCustomer(customer);
            cart.setCartItems(cartItems);
            cart.setStatus(Status.ordered);

            cartRepository.save(cart);

        return new PurchaseResponse(orderTrackingNumber);
        } catch(Exception e) {
            return null;
        }
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
