package com.winsley.sandwich.services;

import com.winsley.sandwich.entities.MenuItem;
import lombok.Data;

import java.util.Collection;

@Data
public class ReportResponse {
    public Collection<MenuItem> testingReports;
}
