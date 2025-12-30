import { Link } from "react-router-dom";
import logo from "/assets/images/logo.png";
import homeImage from "/assets/images/home.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img src={logo} alt="4hrs Report" />
          </div>

          <nav className="nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <Link to="/login" className="login-btn">
            Login Now <span className="arrow-icon">→</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero">
            <img
              src={homeImage}
              alt="Roof"
              className="hero-background-image"
            />

            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">
                  Fast & Accurate Roof Measurement Reports in just 4 hours
                </h1>

                <p className="hero-description">
                  Access professionally curated reports on roofing, walls, and
                  building structures to make informed decisions with accurate
                  insights and expert analysis.
                </p>

                <button class="order-btn">
  <span class="btn-text">Order Now</span>
  <span class="btn-icon">
    <img src="/assets/icons/arrow-up-right.png" alt="Arrow" />
  </span>
</button>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p>&copy; 2024 4hrs Report. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
