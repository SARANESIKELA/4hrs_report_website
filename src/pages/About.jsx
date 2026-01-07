import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="4hrs Report" />
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link active">
              About Us
            </Link>
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
          <Link to="/login" className="login-btn">
            Login Now
            <span className="arrow-icon">→</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About 4hrs Report</h1>
          <p>
            Your trusted partner for fast, accurate, and professional roof
            measurement reports
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="content-container">
          <div className="content-section">
            <h2>Who We Are</h2>
            <p>
              4hrs Report is a leading provider of professional roof measurement
              and building structure analysis services. We specialize in
              delivering accurate, detailed reports within just 4 hours, helping
              contractors, builders, and property owners make informed decisions
              quickly and efficiently.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to revolutionize the roofing and construction
              industry by providing fast, reliable, and professionally curated
              reports that empower our clients to make confident decisions with
              accurate insights and expert analysis.
            </p>
          </div>

          <div className="content-section">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast Delivery</h3>
                <p>Get your reports in just 4 hours, guaranteed.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Accurate Data</h3>
                <p>Precision measurements you can rely on.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Expert Analysis</h3>
                <p>Professional insights from industry experts.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💼</div>
                <h3>Professional Service</h3>
                <p>Dedicated support for all your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Order your roof measurement report today</p>
          <Link to="/login" className="cta-btn">
            Order Now
            <span className="arrow-icon">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 4hrs Report. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
