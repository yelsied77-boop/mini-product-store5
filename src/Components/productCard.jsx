function ProductCard({ image, category, title, description, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-info">
        <span className="category">{category}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="product-bottom">
          <span className="price">${price}</span>

          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;