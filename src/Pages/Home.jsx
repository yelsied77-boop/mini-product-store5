import Hero from "../Components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section className="home-summary" id="about">
        <h2>Welcome to My Store</h2>

        <p>
          Discover quality products at great prices. Browse our
          collection and find something that suits you.
        </p>

        <div className="summary-cards">
          <div className="summary-card">
            <h3>Quality Products</h3>
            <p>
              We offer carefully selected products for our customers.
            </p>
          </div>

          <div className="summary-card">
            <h3>Great Prices</h3>
            <p>
              Enjoy competitive prices across our product collection.
            </p>
          </div>

          <div className="summary-card" id="contact">
            <h3>Easy Shopping</h3>
            <p>
              Browse our products and choose what you need easily.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;