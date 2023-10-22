package com.winsley.sandwich.TestClasses;

import com.winsley.sandwich.services.CheckoutService;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@WebMvcTest(CheckoutService.class)
public class PurchaseTest {
}
