import React, { useEffect, useState } from "react";

function ProductCategoryForm() {
  const [category, setCategory] = useState([]);
  const [rate, setRate] = useState(0);
  const [selectedCategory, setselectedCategory] = useState("");
  const [name, setName] = useState("");

  const getAllCategories = async () => {
    const res = await fetch("http://localhost:8080/api/categories/getAll");
    setCategory(await res.json());
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleSubmit = async () => {
    await fetch("http://localhost:8080/api/products/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: rate,
        category: selectedCategory,
      }),
    });
    alert("Product created!");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create a New Product</h2>
      <label className="form-label">
        Product Name:
        <input
          type="text"
          className="form-input"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="form-label">
        Price:
        <input
          type="number"
          value={rate}
          min={0}
          onChange={(e) => setRate(e.target.value)}
          className="form-input"
          placeholder="Enter rate"
        />
      </label>
      <label className="form-label">
        Category:
        <select
          className="form-select"
          defaultValue={category[0]}
          onChange={(e) => setselectedCategory(e.target.value)}
        >
          {category?.map((x) => (
            <option value={x.name} key={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="submit-button" onClick={handleSubmit}>
        Create Product
      </button>
    </div>
  );
}

export default ProductCategoryForm;
