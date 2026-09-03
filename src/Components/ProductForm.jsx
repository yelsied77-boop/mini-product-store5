import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.price ||
      !formData.description ||
      !formData.image
    ) {
      alert("Please fill in all fields.");
      return;
    }

    onAddProduct(formData);

    setFormData({
      title: "",
      category: "",
      price: "",
      description: "",
      image: "",
    });
  };

  return (
    <section className="product-form-section">
      <div className="section-heading">
        <h2>Add New Product</h2>

        <p>Add a new product to your store.</p>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Product Name"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="price"
          placeholder="Price e.g. $150"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit" className="add-button">
          Add Product
        </button>
      </form>
    </section>
  );
}

export default ProductForm;