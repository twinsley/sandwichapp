package com.winsley.sandwich.TestClasses;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;
import com.winsley.sandwich.dao.MenuItemRepository;
import com.winsley.sandwich.entities.MenuItem;
import org.hibernate.annotations.Immutable;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;
import java.math.BigDecimal;
import java.util.Date;
import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@WebAppConfiguration
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK, classes= {MenuItemRepository.class, MenuItem.class})
public class MenuItemTest {

    public MockMvc mvc;
    private MenuItem menuItem = new MenuItem();
    @Autowired
    private WebApplicationContext ctx;
    @Before
    public void init() {
        this.mvc = webAppContextSetup(ctx).build();
    }
    @Test
    public void MenuItemCreateTest() {
        menuItem.setMenuItem_title("Test item");
        menuItem.setPrice(BigDecimal.valueOf(5.50));
        menuItem.setId(45000L);
        assertEquals(menuItem.getMenuItem_title(), "Test item");
    }
    @Test
    public void MenuItemEditTest() {
        menuItem.setPrice(BigDecimal.valueOf(6.50));
        assertEquals(menuItem.getPrice(), BigDecimal.valueOf(6.50));
    }
    @Test
    public void MenuItemSetDateTest() {
        Date date = new Date();
        menuItem.setCreate_date(date);
        assertEquals(menuItem.getCreate_date(), date);
    }

}
