import { Link } from "react-router-dom";
import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import logo from "/assets/images/logo.png";
import whitelogo from "/assets/images/white_logo.png";
import homeImage from "/assets/images/home.png";
import homeImage1 from "../assets/images/home_img1.png";
import banner1 from "../assets/images/banner_1.png";
import banner2 from "../assets/images/banner_2.png";
import banner3 from "../assets/images/banner_3.png";
import arrowIcon from "/assets/icons/arrow-up-right.png";
import blogImage1 from "../assets/images/home_img1.png";
import blogImage2 from "../assets/images/home_img1.png";
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
            <div className="industry-leaders-grid">
              {/* Left Side - Image */}
              <div className="industry-leaders-image">
                <img src={homeImage1} alt="Roofing Professional" />
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
                  We provide roof measurement reports within 4 hours using the
                  latest technology. Our reports are backed by advanced tools,
                  expert analysis, and a commitment to accuracy—helping you bid
                  confidently, build efficiently, and stay ahead in the roofing
                  industry.
                </p>

                <div className="industry-features">
                  <div className="industry-feature-item">
                    <div className="feature-icon red">🚀</div>
                    <div className="feature-text">
                      <h4>Fast Turnaround</h4>
                      <p>
                        Get reports delivered within 4 hours to accelerate your
                        workflow.
                      </p>
                    </div>
                  </div>

                  <div className="industry-feature-item">
                    <div className="feature-icon red">📊</div>
                    <div className="feature-text">
                      <h4>Consistent Results</h4>
                      <p>
                        Reliable, accurate measurements you can trust every
                        time.
                      </p>
                    </div>
                  </div>

                  <div className="industry-feature-item">
                    <div className="feature-icon red">⏰</div>
                    <div className="feature-text">
                      <h4>4-Hour Delivery</h4>
                      <p>
                        Quick and efficient service to meet tight project
                        deadlines.
                      </p>
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
        </section>

        {/* ================= Statistics Section ================= */}
        <section className="statistics-section">
          <div className="container">
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
        </section>

        {/* ================= Pricing Section ================= */}
        <section className="pricing-section">
          <div className="container">
            <div className="pricing-header">
              <h2 className="pricing-title">Simple, Transparent Pricing</h2>
              <p className="pricing-subtitle">
                For Us What May Be Complex
                <br />
                but We've packaged our roof measurement services into
                <br />
                straightforward pricing that scales with your project needs.
              </p>
            </div>

            <div className="pricing-grid">
              {/* Premium PDF */}
              <div className="pricing-card">
                <div className="pricing-icon">📄</div>
                <h3 className="pricing-card-title">Premium PDF</h3>
                <div className="pricing-amount">
                  <span className="currency">$</span>
                  <span className="price">12</span>
                  <span className="period">/order</span>
                </div>
                <p className="pricing-description">
                  Premium PDF delivers highly detailed roof measurement reports
                  for a-z builders and contractors.
                </p>

                <ul className="pricing-features">
                  <li>✓ Small roofed image</li>
                  <li>✓ Explosive compatible</li>
                  <li>✓ Attempt photo delivery</li>
                  <li>✓ Flat surfaces</li>
                  <li>✓ Bulk orders</li>
                  <li>✓ PDF files same as SEO</li>
                </ul>

                <button className="pricing-btn">
                  <span className="btn-text">Add to Cart</span>
                  <span className="btn-icon">
                    <img src={arrowIcon} alt="Arrow" />
                  </span>
                </button>
              </div>

              {/* XML */}
              <div className="pricing-card">
                <div className="pricing-icon">📑</div>
                <h3 className="pricing-card-title">XML</h3>
                <div className="pricing-amount">
                  <span className="currency">$</span>
                  <span className="price">15</span>
                  <span className="period">/order</span>
                </div>
                <p className="pricing-description">
                  XML Reports deliver structured data for system integration Of
                  XML extend for machine readable data.
                </p>

                <ul className="pricing-features">
                  <li>✓ 100% compatible with estimators</li>
                  <li>✓ Aerial custom Esware</li>
                  <li>✓ All included with Premium</li>
                  <li>✓ Multiple format support</li>
                  <li>✓ EagleView format support</li>
                  <li>✓ 25/7/365 support</li>
                </ul>

                <button className="pricing-btn">
                  <span className="btn-text">Add to Cart</span>
                  <span className="btn-icon">
                    <img src={arrowIcon} alt="Arrow" />
                  </span>
                </button>
              </div>

              {/* PDF Roof Report */}
              <div className="pricing-card">
                <div className="pricing-icon">📋</div>
                <h3 className="pricing-card-title">PDF Roof Report</h3>
                <div className="pricing-amount">
                  <span className="currency">$</span>
                  <span className="price">15</span>
                  <span className="period">/order</span>
                </div>
                <p className="pricing-description">
                  ESX Reports provide precise roof measurement files for use in
                  third-party use of roof.
                </p>

                <ul className="pricing-features">
                  <li>✓ Custom report PDF's</li>
                  <li>✓ Ready-to-use Jobsite photos</li>
                  <li>✓ Attempt photo delivery</li>
                  <li>✓ XML validity</li>
                  <li>✓ One page measurement for overhead</li>
                  <li>✓ Waste sheet optional</li>
                </ul>

                <button className="pricing-btn">
                  <span className="btn-text">Add to Cart</span>
                  <span className="btn-icon">
                    <img src={arrowIcon} alt="Arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Features Section ================= */}
        <section className="features-section">
          <div className="container">
            <h2 className="features-main-title">
              What Makes Our Roof Measurement Reports Different
            </h2>
            <p className="features-main-subtitle">
              Our measurements offer fast, accurate, and affordable roof
              reports. We reduce errors, streamline processes, and boost
              confidence for contractors and builders nationwide.
            </p>

            <div className="features-grid">
              {/* Feature 1 - Integrity */}
              <div className="feature-card">
                <div className="feature-card-icon red">🎯</div>
                <h3 className="feature-card-title">Integrity</h3>
                <p className="feature-card-description">
                  We believe in honest, reliable reporting. Every measurement is
                  backed by verified processes that prioritize accuracy and
                  ethical practices.
                </p>
              </div>

              {/* Feature 2 - Accuracy */}
              <div className="feature-card">
                <div className="feature-card-icon red">✓</div>
                <h3 className="feature-card-title">Accuracy</h3>
                <p className="feature-card-description">
                  Our reports deliver precise calculations down to the inch,
                  ensuring you get every dimension right for confident bidding
                  and planning.
                </p>
              </div>

              {/* Feature 3 - Innovation */}
              <div className="feature-card">
                <div className="feature-card-icon red">💡</div>
                <h3 className="feature-card-title">Innovation</h3>
                <p className="feature-card-description">
                  Leveraging the latest technology and industry best practices,
                  we continuously improve how roof measurements are captured and
                  delivered.
                </p>
              </div>

              {/* Feature 4 - Customer-Invoicing */}
              <div className="feature-card">
                <div className="feature-card-icon red">💰</div>
                <h3 className="feature-card-title">Customer-Invoicing</h3>
                <p className="feature-card-description">
                  Transparent, straightforward pricing with no hidden fees.
                  Enjoy seamless transactions tailored to your business workflow
                  and budget needs.
                </p>
              </div>

              {/* Feature 5 - Fast Delivery */}
              <div className="feature-card">
                <div className="feature-card-icon red">⚡</div>
                <h3 className="feature-card-title">Fast Delivery</h3>
                <p className="feature-card-description">
                  Get your roof report in just 4 hours. We understand time is
                  money in construction, and we deliver without compromising on
                  quality.
                </p>
              </div>

              {/* Feature 6 - Support */}
              <div className="feature-card">
                <div className="feature-card-icon red">🤝</div>
                <h3 className="feature-card-title">Support</h3>
                <p className="feature-card-description">
                  Our expert support team is available 24/7 to assist you with
                  any questions, ensuring a smooth experience from order to
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Blog Section ================= */}
        <section className="blog-section">
          <div className="container">
            <h2 className="blog-main-title">
              Insights, Ideas, and Industry Trends That Matter
            </h2>
            <p className="blog-main-subtitle">
              Explore expert guidance, real-world use cases, best practices, and
              actionable tips to help you stay ahead in roofing, estimation, and
              the construction industry.
            </p>

            <div className="blog-grid">
              {/* Blog Card 1 */}
              <div className="blog-card">
                <div className="blog-image">
                  <img src={blogImage1} alt="Common Roofing Issues" />
                  <span className="blog-date">Dec 12th, 2024</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    Common Roofing Issues Every Property Owner Should Identify
                    Early
                  </h3>
                  <p className="blog-description">
                    Detecting early roof issues, like leaks, shingles, and wear,
                    prevents costly repairs and extends roof lifespan with
                    timely maintenance.
                  </p>
                  <button className="blog-btn">
                    <span className="btn-text">Read More</span>
                    <span className="btn-icon">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="blog-card">
                <div className="blog-image">
                  <img src={blogImage2} alt="Roof Inspections" />
                  <span className="blog-date">Dec 11th, 2024</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    How Regular Roof Inspections Prevent Costly Structural
                    Damage
                  </h3>
                  <p className="blog-description">
                    Regular roof inspections catch small defects early,
                    preventing major structural issues, ensuring safety and
                    long-term roof performance.
                  </p>
                  <button className="blog-btn">
                    <span className="btn-text">Read More</span>
                    <span className="btn-icon">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </button>
                </div>
              </div>
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
