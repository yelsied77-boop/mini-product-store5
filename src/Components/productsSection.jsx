import ProductCard from "./ProductCard";

function ProductsSection() {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      category: "Electronics",
      title: "Laptop",
      description: "Powerful laptop for work and everyday use.",
      price: 999,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      category: "Audio",
      title: "Headphones",
      description: "Enjoy clear and immersive sound everywhere.",
      price: 149,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "Wearables",
      title: "Smart Watch",
      description: "Track your daily activities with a smart watch.",
      price: 199,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Photography",
      title: "Camera",
      description: "Capture beautiful moments with high quality.",
      price: 599,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      category: "Accessories",
      title: "Keyboard",
      description: "Comfortable keyboard for work and gaming.",
      price: 89,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      category: "Mobile",
      title: "Smartphone",
      description: "Modern smartphone with powerful performance.",
      price: 799,
    },
  ];

  return (
    <section className="products-section" id="products">
      <h2>Our Products</h2>

      <p className="section-description">
        Explore our collection of amazing products.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;