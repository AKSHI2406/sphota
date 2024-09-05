// src/components/CreateSale.js
import React, { useState, useEffect } from "react";
import BillTable from "./../components/BillTable";

function CreateSale() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [billItems, setBillItems] = useState([]);

  const getAllCategories = async () => {
    const res = await fetch("http://localhost:8080/api/categories/getAll");
    setCategories(await res.json());
  };

  const getAllProducts = async () => {
    const res = await fetch("http://localhost:8080/api/products/getAll");
    setProducts(await res.json());
  };

  useEffect(() => {
    // Fetch available products
    getAllCategories();
    getAllProducts();
  }, []);

  const handleAddProduct = async () => {
    const product = products.find((p) => p.name === selectedProduct);
    const gstRate = findGstRateForProduct(product, categories);
    console.log(`GST Rate for ${product.name}: ${gstRate}%`);
    setBillItems([...billItems, { ...product, gstRate }]);
  };

  function findGstRateForProduct(product, categories) {
    // Find the category from the second object that matches the product's category
    const matchingCategory = categories.find(
      (category) => category.name === product.category
    );

    // Return the GST rate if found, otherwise return a default value (e.g., 0)
    return matchingCategory ? matchingCategory.gstRate : 0;
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Add Product to Bill</h2>
      <form className="bill-form">
        <label className="form-label">
          Product:
          <select
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="form-select"
          >
            <option value="">Select Product</option>
            {products.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={handleAddProduct}
          className="submit-button"
        >
          Add Product to Bill
        </button>
      </form>
      <BillTable products={billItems} />
    </div>
  );
}

export default CreateSale;
