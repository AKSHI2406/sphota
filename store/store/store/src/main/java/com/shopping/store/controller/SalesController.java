package com.shopping.store.controller;

import com.shopping.store.entity.Sale;
import com.shopping.store.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/sales")
public class SalesController {

    @Autowired
    private SaleService saleService;

    @PostMapping("/create")
    public Sale createSale(@RequestBody List<String> productIds) {
        return saleService.createSale(productIds);
    }

    @GetMapping("/total-between-dates")
    public double getTotalSalesBetweenDates(@RequestParam String startDate,
                                            @RequestParam String endDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        LocalDateTime start = LocalDateTime.parse(startDate, formatter);
        LocalDateTime end = LocalDateTime.parse(endDate, formatter);

        return saleService.getTotalSalesBetweenDates(start, end);
    }
}

