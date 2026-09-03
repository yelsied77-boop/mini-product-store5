import { useEffect, useState } from "react";

import ProductsSection from "../components/ProductsSection";
import ProductForm from "../components/ProductForm";

const defaultProducts = [
  {
    id: 1,
    title: "Laptop",
    category: "Computers",
    price: "$900",
    description:
      "Powerful laptop for work, study, and everyday use.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    title: "Headphones",
    category: "Electronics",
    price: "$120",
    description:
      "Comfortable wireless headphones with clear sound.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    title: "Smart Watch",
    category: "Accessories",
    price: "$200",
    description:
      "Modern smart watch for fitness and daily activities.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 4,
    title: "Camera",
    category: "Photography",
    price: "$650",
    description:
      "High-quality camera for capturing special moments.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 5,
    title: "Keyboard",
    category: "Accessories",
    price: "$80",
    description:
      "Comfortable mechanical keyboard for work and gaming.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    title: "Smartphone",
    category: "Electronics",
    price: "$700",
    description:
      "Modern smartphone with a beautiful display and camera.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
];

function Products() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("miniStoreProducts");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    return defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem(
      "miniStoreProducts",
      JSON.stringify(products)
    );
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts((currentProducts) => [
      ...currentProducts,
      {
        ...newProduct,
        id: Date.now(),
      },
    ]);
  };

  const deleteProduct = (productId) => {
    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== productId
      )
    );
  };

  return (
    <section className="products-page">
      <ProductForm onAddProduct={addProduct} />

      <ProductsSection
        products={products}
        onDeleteProduct={deleteProduct}
      />
    </section>
  );
}

export default Products;