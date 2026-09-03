import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Our Products</h1>

        <p>
          Find the best products at the best prices.
        </p>

        <Link to="/products" className="hero-button">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;