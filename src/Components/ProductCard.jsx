function ProductCard({ product, onDelete }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>{product.price}</strong>

          <div className="product-actions">
            <button type="button" className="view-button">
              View Details
            </button>

            <button
              type="button"
              className="delete-button"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;