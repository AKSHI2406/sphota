import React, { useState } from "react";
import './AddCategory.css';

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [gstRate, setGstRate] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/categories/createCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name:category,gstRate }),
      });

      if (response.ok) {
        alert("Category added successfully!");
      } else {
        console.error("Error creating category", response.statusText);
      }
    } catch (error) {
      console.error("Error creating category", error);
    }
  };


return (
  <div className="form-container">
    <h2 className="form-title">Create a New Category</h2>
    <form onSubmit={handleSubmit} className="category-form">
      <label className="form-label">
        Category Name:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
          placeholder="Enter category name"
        />
      </label>
      <label className="form-label">
          Rate:
          <input
            type="number"
            value={gstRate}
            min={0}
            onChange={(e) => setGstRate(e.target.value)}
            className="form-input"
            placeholder="Enter rate"
          />
          </label>
      <button type="submit" className="submit-button">Add Category</button>
    </form>
  </div>
);
};

export default AddCategory;
