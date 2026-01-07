import { Link } from "react-router-dom";
import logo from "/assets/images/logo.png";
import arrowIcon from "/assets/icons/arrow-up-right.png";
import blogBanner from "../assets/images/banner_1.png";
import blogImage1 from "../assets/images/blog_1.jpg";
import blogImage2 from "../assets/images/blog_2.jpg";
import blogImage3 from "../assets/images/home_img1.png";
import whitelogo from "/assets/images/white_logo.png";
import "../styles/Blogs.css";

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Common Roofing Issues Every Property Owner Should Identify Early",
      description:
        "Identify early roofing problems like leaks, cracks, and wear to prevent costly repairs and protect your property's structure long-term.",
      image: blogImage1,
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
    },
    {
      id: 2,
      title: "How Regular Roof Inspections Prevent Costly Structural Damage",
      description:
        "Regular roof inspections catch hidden damage early, preventing leaks, structural issues, and expensive repairs over time.",
      image: blogImage2,
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
    },
    {
      id: 3,
      title: "Roofing Materials Explained: Durability, Lifespan, and Performance",
      description:
        "Learn how different roofing materials compare in durability, lifespan, and performance to choose the best option for your building.",
      image: blogImage3,
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
    },
    {
      id: 4,
      title: "Signs Your Building Needs Immediate Roofing Assessment",
      description:
        "Visible leaks, sagging roofs, cracks, or water stains are warning signs your building needs an immediate roofing assessment.",
      image: blogImage1,
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
    },
  ];

  return (
    <div className="blogs-page">
      {/* ================= Header ================= */}
      <header className="header">
        <div className="container header-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="4hrs Report" />
          </div>

          {/* Navigation */}
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/blogs" className="nav-link active">
              Blogs
            </Link>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
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

      {/* ================= Hero Banner ================= */}
      <section className="blogs-hero">
        <img src={blogBanner} alt="Blogs" className="blogs-hero-image" />
        <div className="blogs-hero-overlay">
          <h1 className="blogs-hero-title">Blogs</h1>
        </div>
      </section>

      {/* ================= Blog Content Section ================= */}
      <section className="blogs-content-section">
        <div className="container">
          <div className="blogs-content-wrapper">
            {/* Left Side - Title and Description */}
            <div className="blogs-intro">
              <h2 className="blogs-main-title">
                Insights, Ideas, and Industry Trends That Matter
              </h2>
              <p className="blogs-main-subtitle">
                Explore expert insights, practical tips, and the latest trends
                across design, technology, and digital innovation—crafted to
                inform, inspire, and help you stay ahead.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="blogs-grid">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-card-meta">
                      <div className="blog-card-author">
                        <span className="author-name">{post.author}</span>
                        <span className="blog-card-date">{post.date}</span>
                      </div>
                      <span className="blog-card-category">{post.category}</span>
                    </div>
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-description">{post.description}</p>
                    <Link to={`/blogs/${post.id}`} className="blog-card-btn">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon">
                        <img src={arrowIcon} alt="Arrow" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-column">
              <img src={whitelogo} alt="4hrs Report" className="footer-logo" />
              <p className="footer-description">
                4hrsreport provides fast and reliable roof measurement reports
                across the U.S. in just 4 hours. Trusted by contractors,
                insurance adjusters, and property managers.
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:support@4hrsreport.com">
                    support@4hrsreport.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>1502 Cherry Dr, Arlington, TX 76013</span>
                </div>
              </div>
              <div className="social-links">
                <span className="social-title">Follow Us :</span>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
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
              <h3 className="footer-title">Our Solutions</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">ESX Reports</a>
                </li>
                <li>
                  <a href="#">ESX XML Reports</a>
                </li>
                <li>
                  <a href="#">ESX Detailed Reports</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-column">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>@2025 4hrsreport. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Blogs;
