import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import "../styles/Pricing.css";
import headerBanner from "assets/images/header_banner.png";


function Pricing() {
  return (
    <div className="pricing-page">
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
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
            <Link to="/pricing" className="nav-link active">
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
<section className="pricing-hero">
  <img src={headerBanner} alt="Pricing - 4hrs Report" />
  <div className="pricing-hero-content">
    <h1>Pricing</h1>
    <p>
      Simple, transparent pricing. Choose the plan that fits your business.
    </p>
  </div>
</section>


      {/* Pricing Cards */}
      <section className="pricing-content">
        <div className="pricing-container">
          <div className="pricing-card">
            <div className="card-header">
              <h3>Basic</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">49</span>
                <span className="period">/report</span>
              </div>
            </div>
            <div className="card-body">
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span>
                  Basic roof measurements
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  PDF report delivery
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  4-hour turnaround
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Email support
                </li>
                <li className="disabled">
                  <span className="cross-icon">✗</span>
                  Detailed analysis
                </li>
              </ul>
              <Link to="/login" className="select-btn">
                Get Started
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>

          <div className="pricing-card featured">
            <div className="badge">Most Popular</div>
            <div className="card-header">
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/report</span>
              </div>
            </div>
            <div className="card-body">
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span>
                  Complete roof measurements
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Detailed PDF & Excel reports
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  3-hour turnaround
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Priority support
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Expert analysis included
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Wall measurements
                </li>
              </ul>
              <Link to="/login" className="select-btn primary">
                Get Started
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">199</span>
                <span className="period">/report</span>
              </div>
            </div>
            <div className="card-body">
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span>
                  Full building structure analysis
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Multi-format reports
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  2-hour turnaround
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  24/7 dedicated support
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Comprehensive analysis
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Unlimited revisions
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  API access
                </li>
              </ul>
              <Link to="/login" className="select-btn">
                Get Started
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's included in the 4-hour delivery?</h4>
              <p>
                All plans include professional roof measurements delivered
                within 4 hours or less, depending on your selected plan.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I upgrade my plan later?</h4>
              <p>
                Yes, you can upgrade to a higher plan at any time. Contact our
                support team for assistance.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer bulk discounts?</h4>
              <p>
                Yes, we offer custom pricing for bulk orders. Contact us to
                discuss your needs.
              </p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>
                We accept all major credit cards, PayPal, and bank transfers for
                enterprise accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Order your first roof measurement report today</p>
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

export default Pricing;
