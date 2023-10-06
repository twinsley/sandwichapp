package com.winsley.sandwich.controllers;

import com.winsley.sandwich.services.CheckoutService;
import com.winsley.sandwich.services.Purchase;
import com.winsley.sandwich.services.PurchaseResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

    @RestController
    @RequestMapping("/api/checkout")
    public class CheckoutController {
        private CheckoutService checkoutService;

        public CheckoutController(CheckoutService checkoutService) {
            this.checkoutService = checkoutService;
        }

        @PostMapping("/purchase")
        public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {
            PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);
            return purchaseResponse;
        }
    }

