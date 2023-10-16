package com.winsley.sandwich.services;

import com.winsley.sandwich.dao.MenuItemRepository;
import com.winsley.sandwich.entities.MenuItem;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class ReportService {
    @Autowired
MenuItemRepository menuItemRepository;
    public Collection<MenuItem> getSales() {
        Collection<MenuItem> sales = menuItemRepository.GetSales();
        System.out.println(sales);
        return sales;
    }

}
//TODO finish processing to group by id and set the last purchased date as the most recent for each ID.