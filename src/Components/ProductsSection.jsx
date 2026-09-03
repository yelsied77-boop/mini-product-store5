import ProductCard from "./ProductCard";

function ProductsSection({ products, onDeleteProduct }) {
  return (
    <section className="products-section">
      <div className="section-heading">
        <h2>Our Products</h2>

        <p>
          Explore our collection of quality products.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={onDeleteProduct}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;