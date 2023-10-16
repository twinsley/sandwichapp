package com.winsley.sandwich.controllers;

import com.winsley.sandwich.dao.MenuItemRepository;
import com.winsley.sandwich.services.ReportResponse;
import com.winsley.sandwich.services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/reports")
public class ReportController {
    @Autowired
    private ReportService reportService;
    private ReportResponse reportResponse = new ReportResponse();


    @GetMapping("/sales")
    public ReportResponse report() {
        System.out.println("Running report");
        reportResponse.testingReports = reportService.getSales();
        System.out.println("Returning report");
        return reportResponse;
    }

}
