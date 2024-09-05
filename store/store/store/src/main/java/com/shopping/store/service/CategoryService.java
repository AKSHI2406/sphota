package com.shopping.store.service;

import com.shopping.store.entity.Category;
import com.shopping.store.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category updateGstRate(String categoryName, double newGstRate) {
        // Find the category by its ID
        Category category = categoryRepository.findByName(categoryName);

        // Update the GST rate
        category.setGstRate(newGstRate);

        // Save the updated category back to the database
        return categoryRepository.save(category);
    }

    // Additional methods
}
