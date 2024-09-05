package com.shopping.store.repository;


import com.shopping.store.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Product findProductByName(String name);

    List<Product> findByNameIn(List<String> names);
}
