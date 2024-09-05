package com.shopping.store.service;

import com.shopping.store.entity.Category;
import com.shopping.store.entity.Product;
import com.shopping.store.entity.Sale;
import com.shopping.store.repository.CategoryRepository;
import com.shopping.store.repository.ProductRepository;
import com.shopping.store.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Sale createSale(List<String> productIds) {
        Sale sale = new Sale();

        List<Product> products = productRepository.findByNameIn(productIds);
        sale.setProducts(products);

        double totalAmount = 0;

        for (Product product : products) {
            double productPrice = product.getPrice();
            String categoryName = product.getCategory();
            Category category = categoryRepository.findByName(categoryName);

            double gstRate = category.getGstRate();
            double priceWithTax = productPrice + (productPrice * gstRate / 100);
            totalAmount += priceWithTax;
        }

        sale.setTotalAmount(totalAmount);
        sale.setSaleDate(LocalDateTime.now());

        return saleRepository.save(sale);
    }

    public double getTotalSalesBetweenDates(LocalDateTime startDate, LocalDateTime endDate) {
        List<Sale> sales = saleRepository.findBySaleDateBetween(startDate, endDate);

        double totalSales = 0;

        for (Sale sale : sales) {
            totalSales += sale.getTotalAmount();
        }

        return totalSales;
    }
}

