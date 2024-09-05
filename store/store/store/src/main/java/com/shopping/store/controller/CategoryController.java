package com.shopping.store.controller;

import com.shopping.store.entity.Category;
import com.shopping.store.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

   // Endpoint to get all product categories
    @GetMapping("/getAll")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    // Endpoint to create a new product category
    @PostMapping("/createCategory")
    public Category createCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    // Endpoint to update tax rate for an existing category
    @PutMapping("/{name}/gst-rate")
    public Category updateGstRate(@PathVariable String name, @RequestBody double newGstRate) {
        return categoryService.updateGstRate(name, newGstRate);
    }

}
