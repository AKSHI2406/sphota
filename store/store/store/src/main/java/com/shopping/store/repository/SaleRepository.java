package com.shopping.store.repository;

import com.shopping.store.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {

    // Find all sales made on a specific day
    List<Sale> findBySaleDateBetween(LocalDateTime startOfDay, LocalDateTime endOfDay);
}
