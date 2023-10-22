package com.winsley.sandwich.TestClasses;

import com.winsley.sandwich.dao.CustomerRepository;
import com.winsley.sandwich.entities.Customer;
import com.winsley.sandwich.entities.MenuItem;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;
import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

@RunWith(SpringRunner.class)
@WebMvcTest(CustomerRepository.class)
public class CustomerTest {
    public MockMvc mvc;
    private Customer customer = new Customer();
    @Autowired
    private WebApplicationContext ctx;
    @Before
    public void init() {
        this.mvc = webAppContextSetup(ctx).build();
    }
    @Test
    public void MenuItemCreateTest() {
        customer.setFirstName("Test item");
        customer.setPhone("7403727263");
        assertEquals(customer.getFirstName(), "Test item");
    }
    @Test
    public void MenuItemEditTest() {
        customer.setPhone("5448956520");
        assertEquals(customer.getPhone(), "5448956520");
    }
    @Test
    public void MenuItemSetDateTest() {
        Date date = new Date();
        customer.setCreate_date(date);
        assertEquals(customer.getCreate_date(), date);
    }
}
