import { Link } from "react-router-dom";
import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import logo from "/assets/images/logo.png";
import whitelogo from "/assets/images/white_logo.png";
import homeImage from "/assets/images/home.png";
import homeImage1 from "../assets/images/home_img1.png";
import Industryprofile from "../assets/images/industry_profile.png";
import banner1 from "../assets/images/banner_1.png";
import banner2 from "../assets/images/banner_2.png";
import banner3 from "../assets/images/banner_3.png";
import arrowIcon from "/assets/icons/arrow-up-right.png";
import blogImage1 from "../assets/images/home_img1.png";
import blogImage2 from "../assets/images/home_img1.png";
import esxIcon from "../assets/icons/esx.png";
import xmlIcon from "../assets/icons/xml.png";
import pdfIcon from "../assets/icons/pdf.png";
import "../styles/Home.css";

// Sticky Card Component
const StickyBannerCard = ({
  i,
  title,
  description,
  image,
  alt,
  progress,
  range,
  targetScale,
  arrowIcon,
}) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky-card-wrapper">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="sticky-banner-card"
      >
        <div className="banner-image-container">
          <img src={image} alt={alt} />
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content-overlay">
          <h2 className="banner-title">{title}</h2>
          <p className="banner-description">{description}</p>
          <button className="banner-btn">
            <span className="btn-text">Order Now</span>
            <span className="btn-icon">
              <img src={arrowIcon} alt="Arrow" />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

function Home() {
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [addons, setAddons] = useState("");

  const bannerContainerRef = useRef(null);

  // Scroll progress for sticky banners
  const { scrollYProgress } = useScroll({
    target: bannerContainerRef,
    offset: ["start start", "end end"],
  });

  // Banner data
  const banners = [
    {
      id: 1,
      title: "Premium",
      description:
        "Premium PDF delivers highly detailed, professionally formatted roof measurement reports with clear layouts, accurate dimensions, and easy-to-read visuals, ensuring reliable data for planning, estimating, and confident decision-making on every project.",
      image: banner1,
      alt: "Premium PDF Report",
    },
    {
      id: 2,
      title: "XML Reports",
      description:
        "XML Reports deliver structured, machine-readable roof measurement data designed for seamless system integration, accurate calculations, and automated workflows, helping teams streamline estimating, reduce errors, and improve efficiency.",
      image: banner2,
      alt: "XML Reports",
    },
    {
      id: 3,
      title: "ESX Reports",
      description:
        "ESX Reports provide precise, data-rich roof measurement files compatible with industry estimation tools, ensuring accurate material calcs, easier side view, and seamless integration into your roofing workflow.",
      image: banner3,
      alt: "ESX Reports",
    },
  ];

  return (
    <ReactLenis root>
      <div className="home">
        {/* ================= Header ================= */}
        <header className="header">
          <div className="container header-container">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="4hrs Report" />
            </div>

            {/* Navigation */}
            <nav className="nav">
              <Link to="/" className="nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-link">
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

            {/* Login Button */}
            <Link to="/login" className="login-btn">
              <span className="btn-text">Login Now</span>
              <span className="btn-icon">
                <img src={arrowIcon} alt="Arrow" />
              </span>
            </Link>
          </div>
        </header>

        {/* ================= Hero Section ================= */}
        <section className="hero-section">
          <div className="hero">
            <img src={homeImage} alt="Roof" className="hero-background-image" />

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

                <button className="order-btn">
                  <span className="btn-text">Order Now</span>
                  <span className="btn-icon">
                    <img src={arrowIcon} alt="Arrow" />
                  </span>
                </button>
              </div>

              <div className="hero-form-card">
                <h2 className="form-title">Choose Your Service & Pricing</h2>
                <p className="form-description">
                  Select the service and pricing option that best fits your
                  project needs.
                </p>

                <div className="form-group">
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category*</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Select Service*</option>
                    <option value="roof-measurement">Roof Measurement</option>
                    <option value="wall-measurement">Wall Measurement</option>
                    <option value="full-building">
                      Full Building Analysis
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-select"
                    value={addons}
                    onChange={(e) => setAddons(e.target.value)}
                  >
                    <option value="">Select Addons*</option>
                    <option value="3d-model">3D Model</option>
                    <option value="detailed-report">Detailed Report</option>
                    <option value="expedited">Expedited Delivery</option>
                  </select>
                </div>

                <button className="form-order-btn">
                  <span className="btn-text">Order Now</span>
                  <span className="btn-icon">
                    <img src={arrowIcon} alt="Arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Commitment Section ================= */}
        <section className="commitment-section">
          <div className="container">
            <div className="commitment-content">
              <p className="commitment-text">
                We are committed to helping roofing professionals succeed by
                providing fast, accurate, and affordable roof measurement
                reports. With our expertise and technology, you can focus on
                building and leave the measurements to us.
              </p>
            </div>
          </div>
        </section>

        {/* ================= Accurate Reports Section ================= */}
        <section className="accurate-reports-section">
          <div className="container">
            <div className="accurate-reports-grid">
              {/* Left Side - Text Content */}
              <div className="reports-text-content">
                <h2 className="reports-title">
                  Accurate Roof Reports, Delivered When You Need Them
                </h2>
                <p className="reports-description">
                  4hrs Report empowers roofing professionals with fast, precise,
                  and affordable roof measurement reports. Using advanced
                  technology and industry expertise, we handle the measurements
                  so you can focus on building, bidding, and growing your
                  business with confidence.
                </p>
              </div>

              {/* Right Side - Card */}
              <div className="reports-card">
                <div className="reports-card-image">
                  <img src={homeImage1} alt="Roofing Professional" />
                </div>
                <div className="reports-card-content">
                  <h3 className="reports-card-title">
                    Fast & Accurate Roof Measurement Reports
                  </h3>
                  <p className="reports-card-description">
                    Get reliable roof measurement reports delivered in just 4
                    hours—complete with imagery and expert analysis—so you can
                    focus on building, not measuring.
                  </p>
                  <button className="reports-card-btn">
                    <span className="btn-text">Order Now</span>
                    <span className="btn-icon">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Sticky Scrolling Banner Section ================= */}
        <section ref={bannerContainerRef} className="sticky-banner-section">
          <div className="container">
            {banners.map((banner, i) => {
              const targetScale = Math.max(
                0.85,
                1 - (banners.length - i - 1) * 0.05,
              );
              return (
                <StickyBannerCard
                  key={banner.id}
                  i={i}
                  title={banner.title}
                  description={banner.description}
                  image={banner.image}
                  alt={banner.alt}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                  arrowIcon={arrowIcon}
                />
              );
            })}
          </div>
        </section>

        {/* ================= Industry Leaders Section ================= */}
        <section className="industry-leaders-section">
          <div className="container">
            <div className="industry-leaders-card">
              <div className="industry-leaders-grid">
                {/* Left Side - Image */}
                <div className="industry-leaders-image">
                  <img src={Industryprofile} alt="Roofing Professional" />
                  <div className="industry-badge">
                    <h3>4 Hours</h3>
                    <p>Guaranteed Delivery</p>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="industry-leaders-content">
                  <h2 className="industry-leaders-title">
                    Industry Leaders in Speed & Accuracy
                  </h2>
                  <p className="industry-leaders-description">
                    At 4hrsreport, we understand that time is money in the
                    roofing industry. That's why we deliver precise roof
                    measurement reports within 4 hours. Whether you are a
                    roofing contractor, insurance adjuster, or property manager,
                    our detailed reports help you save time, reduce errors, and
                    focus on what matters most - growing your business.
                  </p>

                  <div className="industry-features">
                    <div className="industry-feature-item">
                      <div className="feature-icon red">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="feature-text">
                        <h4>Accurate Measurements</h4>
                        <p>
                          Powered by high-quality aerial and satellite data.
                        </p>
                      </div>
                    </div>

                    <div className="industry-feature-item">
                      <div className="feature-icon red">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="feature-text">
                        <h4>Professional Reports</h4>
                        <p>Easy-to-read, detailed, and contractor-ready.</p>
                      </div>
                    </div>

                    <div className="industry-feature-item">
                      <div className="feature-icon red">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="feature-text">
                        <h4>4 Hour Delivery</h4>
                        <p>Get your roof reports fast without delays.</p>
                      </div>
                    </div>
                  </div>

                  <button className="industry-order-btn">
                    <span className="btn-text">Order Now</span>
                    <span className="btn-icon">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Statistics Section ================= */}
        <section className="statistics-section">
          <div className="container">
            <div className="statistics-wrapper">
              <div className="statistics-card">
                <div className="statistics-grid">
                  <div className="stat-item">
                    <h3 className="stat-number">100K+</h3>
                    <p className="stat-label">Reports Delivered</p>
                  </div>

                  <div className="stat-item">
                    <h3 className="stat-number">24/7</h3>
                    <p className="stat-label">Support Centers</p>
                  </div>

                  <div className="stat-item">
                    <h3 className="stat-number">99.8%</h3>
                    <p className="stat-label">Accuracy Rate</p>
                  </div>

                  <div className="stat-item">
                    <h3 className="stat-number">7+</h3>
                    <p className="stat-label">Regions Supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Pricing Section ================= */}
        <section className="pricing-section">
          <div className="container">
            <div className="pricing-wrapper">
              <div className="pricing-header">
                <div className="pricing-header-left">
                  <h2 className="pricing-title">Simple, Transparent Pricing</h2>
                </div>
                <div className="pricing-header-right">
                  <p className="pricing-subtitle">
                    No hidden fees, no surprises.
                    <br />
                    Just fast, accurate roof reports at competitive prices.
                  </p>
                </div>
              </div>

              <div className="pricing-grid">
                {/* ESX */}
                <div className="pricing-card">
                  <div className="pricing-icon-img">
                    <img src={esxIcon} alt="ESX" />
                  </div>
                  <h3 className="pricing-card-title">ESX</h3>
                  <div className="pricing-amount">
                    <span className="price">$12</span>
                    <span className="period">Starting</span>
                  </div>
                  <p className="pricing-description">
                    Xactimate™ compatible sketches for adjusters and insurance
                    providers.
                  </p>

                  <ul className="pricing-features">
                    <li>✓ Sketch within 4 hours*</li>
                    <li>✓ Xactimate compatible</li>
                    <li>✓ 2 hours rush delivery</li>
                    <li>✓ PDF addon</li>
                    <li>✓ Customised PDFs</li>
                    <li>✓ Bulk orders</li>
                    <li>✓ ESX Walls starts at $20</li>
                    <li>✓ 24/7 support</li>
                  </ul>

                  <button className="pricing-btn">
                    <span className="btn-text">Order Now</span>
                    <span className="btn-icon">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </button>
                </div>

                {/* XML */}
                <div className="pricing-card">
                  <div className="pricing-icon-img">
                    <img src={xmlIcon} alt="XML" />
                  </div>
                  <h3 className="pricing-card-title">XML</h3>
                  <div className="pricing-amount">
                    <span className="price">$15</span>
                    <span className="period">Starting</span>
                  </div>
                  <p className="pricing-description">
                    Talk to us to get other formats of XMLs which fit to your
                    existing applications.
                  </p>

                  <ul className="pricing-features">
                    <li>✓ 100% compatible with symbility</li>
                    <li>✓ sketch within 4 hours</li>
                    <li>✓ optional pdf</li>
                    <li>✓ multiple format options</li>
                    <li>✓ priority support</li>
                  </ul>

                  <button className="pricing-btn">
                    <span className="btn-text">Order Now</span>
                    <span className="btn-icon">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </button>
                </div>

                {/* PDF Roof Report */}
                <div className="pricing-card">
                  <div className="pricing-icon-img">
                    <img src={pdfIcon} alt="PDF" />
                  </div>
                  <h3 className="pricing-card-title">PDF Roof Report</h3>
                  <div className="pricing-amount">
                    <span className="price">$15</span>
                    <span className="period">Starting</span>
                  </div>
                  <p className="pricing-description">
                    Customised PDFs to serve the individual needs of contractors
                    and others.
                  </p>

                  <ul className="pricing-features">
                    <li>✓ Customised PDFs</li>
                    <li>✓ Waste factor calculations</li>
                    <li>✓ ESX addon</li>
                    <li>✓ XML addon</li>
                    <li>✓ Separate measurements for detaches</li>
                    <li>✓ White label options</li>
                  </ul>

                  <button className="pricing-btn">
                    <span className="btn-text">Order Now</span>
                    <span className="btn-icon">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Features Section ================= */}
        <section className="features-section">
          <div className="container">
            <div className="features-layout">
              {/* Left Side - Title and Description */}
              <div className="features-header">
                <h2 className="features-main-title">
                  What Makes Our Roof Measurement Reports Different
                </h2>
                <p className="features-main-subtitle">
                  Our streamlined process ensures you get accurate roof
                  measurements quickly and efficiently, every time.
                </p>
                <div className="features-stats">
                  <div className="stats-avatars">
                    {/* Add avatar images here if needed */}
                  </div>
                  <div className="stats-count">
                    <strong>50K</strong>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              {/* Right Side - 2-Column Grid */}
              <div className="features-grid">
                {/* Feature 1 - HD Imagery */}
                <div className="feature-card">
                  <div className="feature-card-icon red">📷</div>
                  <h3 className="feature-card-title">HD Imagery</h3>
                  <p className="feature-card-description">
                    We use the latest premium imagery to deliver highly
                    detailed, precise and reliable roof measurements you can
                    trust for accurate planning and decisions.
                  </p>
                </div>

                {/* Feature 2 - Accuracy */}
                <div className="feature-card">
                  <div className="feature-card-icon red">▶</div>
                  <h3 className="feature-card-title">Accuracy</h3>
                  <p className="feature-card-description">
                    Each sketch goes with multi-layered quality checks to ensure
                    the highest accuracy. We are the trusted choice of our
                    clients for our commitment to precision.
                  </p>
                </div>

                {/* Feature 3 - Integrations */}
                <div className="feature-card">
                  <div className="feature-card-icon red">💡</div>
                  <h3 className="feature-card-title">Integrations</h3>
                  <p className="feature-card-description">
                    Our systems are designed to easily connect with platforms of
                    your choice, ensuring flexibility and scalability for your
                    operations.
                  </p>
                </div>

                {/* Feature 4 - Enterprise Invoicing */}
                <div className="feature-card">
                  <div className="feature-card-icon red">📋</div>
                  <h3 className="feature-card-title">Enterprise Invoicing</h3>
                  <p className="feature-card-description">
                    Add sub-users to your account and let your team place orders
                    seamlessly while all payments and invoices are handled under
                    your enterprise account.
                  </p>
                </div>

                {/* Feature 5 - Flat Pricing */}
                <div className="feature-card">
                  <div className="feature-card-icon red">💰</div>
                  <h3 className="feature-card-title">Flat Pricing</h3>
                  <p className="feature-card-description">
                    No roof size limits for commercial or residential
                    properties. Enjoy transparent, fair pricing with a flat rate
                    applied to every sketch.
                  </p>
                </div>

                {/* Feature 6 - Support */}
                <div className="feature-card">
                  <div className="feature-card-icon red">💬</div>
                  <h3 className="feature-card-title">Support</h3>
                  <p className="feature-card-description">
                    Our support team is available 24/7 via chat and email, with
                    a dedicated comment window on every order to share remarks
                    until it's closed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Blog Section ================= */}
        <section className="blog-section">
          <div className="container">
            <div className="blog-header-wrapper">
              {/* Left Side - Title and Description */}
              <div className="blog-header">
                <h2 className="blog-main-title">
                  Insights, Ideas, and Industry Trends That Matter
                </h2>
              </div>

              {/* Right Side - Subtitle */}
              <div className="blog-subtitle-wrapper">
                <p className="blog-main-subtitle">
                  Explore expert insights, practical tips, and the latest trends
                  across design, technology, and digital innovation—crafted to
                  inform, inspire, and help you stay ahead.
                </p>
              </div>
            </div>

            <div className="blog-carousel-wrapper">
              {/* Navigation Buttons */}
              <button className="blog-nav-btn blog-nav-prev">
                <span>&#8249;</span>
              </button>

              <div className="blog-grid">
                {/* Blog Card 1 */}
                <div className="blog-card">
                  <div className="blog-image">
                    <img src={blogImage1} alt="Common Roofing Issues" />
                    <div className="blog-meta">
                      <div className="blog-author">
                        <span className="author-name">Oliva Ryfe</span>
                        <span className="blog-date">20 Jan 2025</span>
                      </div>
                      <span className="blog-category">Roofing</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      Common Roofing Issues Every Property Owner Should Identify
                      Early
                    </h3>
                    <p className="blog-description">
                      Identify early roofing problems like leaks, cracks, and
                      wear to prevent costly repairs and protect your property's
                      structure long-term.
                    </p>
                    <Link to="/blogs/1" className="blog-btn">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon">
                        <img src={arrowIcon} alt="Arrow" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Blog Card 2 */}
                <div className="blog-card">
                  <div className="blog-image">
                    <img src={blogImage2} alt="Roof Inspections" />
                    <div className="blog-meta">
                      <div className="blog-author">
                        <span className="author-name">Oliva Ryfe</span>
                        <span className="blog-date">20 Jan 2025</span>
                      </div>
                      <span className="blog-category">Roofing</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      How Regular Roof Inspections Prevent Costly Structural
                      Damage
                    </h3>
                    <p className="blog-description">
                      Regular roof inspections catch hidden damage early,
                      preventing leaks, structural issues, and expensive repairs
                      over time.
                    </p>
                    <Link to="/blogs/2" className="blog-btn">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon">
                        <img src={arrowIcon} alt="Arrow" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <button className="blog-nav-btn blog-nav-next">
                <span>&#8250;</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================= Footer ================= */}
        <footer className="footer">
          <div className="container footer-container-full">
            <div className="footer-grid">
              {/* Logo and Contact */}
              <div className="footer-column">
                <div className="footer-logo">
                  <img src={whitelogo} alt="4hrs Report" />
                </div>
                <p className="footer-description">
                  4HRS REPORT is one of the MOST reliable roof measurement
                  reporting services. Starting from scratch, through passion and
                  commitment, our services are recognized and trusted worldwide.
                </p>
                <div className="footer-contact">
                  <p>📍 1027 Cherry Ave, San Bruno, CA 94066</p>
                  <p>📧 help@4hrsreport.com</p>
                  <p>📞 (650) 260 - 4862 (option #1 for Sales)</p>
                </div>
                <div className="footer-socials">
                  <span>Follow Us:</span>
                  <a href="#" className="social-icon">
                    f
                  </a>
                  <a href="#" className="social-icon">
                    t
                  </a>
                  <a href="#" className="social-icon">
                    in
                  </a>
                  <a href="#" className="social-icon">
                    y
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-column">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Our Solutions */}
              <div className="footer-column">
                <h3 className="footer-heading">Our Solutions</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Premium PDF</a>
                  </li>
                  <li>
                    <a href="#">XML Reports</a>
                  </li>
                  <li>
                    <a href="#">ESX Reports</a>
                  </li>
                  <li>
                    <a href="#">Roof Measurement</a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="footer-column">
                <h3 className="footer-heading">Legal</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Sample Report</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2025 4hrsreport.com | 4HRS Report LLC</p>
            </div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default Home;
