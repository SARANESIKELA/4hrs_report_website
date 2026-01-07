import { Link, useParams } from "react-router-dom";
import logo from "/assets/images/logo.png";
import arrowIcon from "/assets/icons/arrow-up-right.png";
import blogImage1 from "../assets/images/blog_1.jpg";
import blogImage2 from "../assets/images/blog_2.jpg";
import blogImage3 from "../assets/images/home_img1.png";
import whitelogo from "/assets/images/white_logo.png";
import "../styles/BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();

  // Sample blog data
  const blogData = {
    1: {
      title: "Common Roofing Issues Every Property Owner Should Identify Early",
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
      image: blogImage1,
      content: [
        {
          type: "paragraph",
          text: "Roofing issues often begin small but can quickly escalate into serious structural problems if ignored. One of the most common early signs is minor leaks, which may appear as water stains on ceilings or walls. These leaks often result from damaged shingles, poor flashing, or clogged drainage systems. Identifying and addressing them early helps prevent moisture buildup, mold growth, and long-term damage to the building's framework.",
        },
        {
          type: "paragraph",
          text: "Another frequent issue is roof surface deterioration caused by weather exposure and aging materials. Cracked, curling, or missing shingles reduce the roof's ability to protect the structure from heat, rain, and wind. In commercial and residential buildings alike, prolonged exposure to harsh conditions weakens roofing layers, leading to insulation damage and higher energy costs. Early inspections ensure these issues are corrected before performance is compromised.",
        },
        {
          type: "paragraph",
          text: "Structural warning signs such as sagging rooflines, uneven surfaces, or visible cracks should never be overlooked. These issues may indicate underlying problems like water retention, weakened support beams, or improper installation. Addressing them at an early stage allows property owners to plan repairs proactively, avoid costly replacements, and maintain the overall safety, value, and longevity of the building.",
        },
      ],
    },
    2: {
      title: "How Regular Roof Inspections Prevent Costly Structural Damage",
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
      image: blogImage2,
      content: [
        {
          type: "paragraph",
          text: "Regular roof inspections catch hidden damage early, preventing leaks, structural issues, and expensive repairs over time. Professional inspections identify problems before they escalate into major issues.",
        },
        {
          type: "paragraph",
          text: "Roofing professionals use specialized tools and techniques to assess the condition of your roof. They check for signs of water damage, structural weaknesses, and material degradation that may not be visible to the untrained eye.",
        },
        {
          type: "paragraph",
          text: "By scheduling regular inspections, property owners can extend the lifespan of their roofs and avoid unexpected repair costs. Early detection of issues allows for targeted repairs that are far less expensive than full roof replacements.",
        },
      ],
    },
    3: {
      title:
        "Roofing Materials Explained: Durability, Lifespan, and Performance",
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
      image: blogImage3,
      content: [
        {
          type: "paragraph",
          text: "Learn how different roofing materials compare in durability, lifespan, and performance to choose the best option for your building. Understanding material properties is crucial for making informed decisions.",
        },
        {
          type: "paragraph",
          text: "Asphalt shingles are the most common roofing material, offering affordability and ease of installation. Metal roofing provides superior durability and energy efficiency. Tile roofing offers exceptional longevity but requires stronger structural support.",
        },
        {
          type: "paragraph",
          text: "Each material has unique advantages and considerations. Factors like climate, building type, budget, and aesthetic preferences should guide your material selection to ensure optimal performance and value over time.",
        },
      ],
    },
    4: {
      title: "Signs Your Building Needs Immediate Roofing Assessment",
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      category: "Roofing",
      image: blogImage1,
      content: [
        {
          type: "paragraph",
          text: "Visible leaks, sagging roofs, cracks, or water stains are warning signs your building needs an immediate roofing assessment. Ignoring these signs can lead to catastrophic failures.",
        },
        {
          type: "paragraph",
          text: "Water stains on ceilings or walls indicate active leaks that require immediate attention. Sagging sections of the roof suggest structural damage that could lead to collapse. Cracked or missing shingles leave your building vulnerable to water intrusion.",
        },
        {
          type: "paragraph",
          text: "If you notice any of these warning signs, contact a professional roofing contractor immediately. Prompt action can prevent extensive damage, protect your investment, and ensure the safety of occupants.",
        },
      ],
    },
  };

  const currentBlog = blogData[id] || blogData[1];

  const relatedPosts = [
    {
      id: 2,
      title: "How Regular Roof Inspections Prevent Costly Structural Damage",
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      image: blogImage2,
    },
    {
      id: 3,
      title:
        "Roofing Materials Explained: Durability, Lifespan, and Performance",
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      image: blogImage3,
    },
    {
      id: 4,
      title: "Signs Your Building Needs Immediate Roofing Assessment",
      author: "Olivia Ryfe",
      date: "20 Jan 2025",
      image: blogImage1,
    },
  ].filter((post) => post.id !== parseInt(id));

  const nextPost = blogData[parseInt(id) === 4 ? 1 : parseInt(id) + 1];
  const prevPost = blogData[parseInt(id) === 1 ? 4 : parseInt(id) - 1];

  return (
    <div className="blog-detail-page">
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

      {/* ================= Blog Content ================= */}
      <section className="blog-detail-section">
        <div className="container">
          <div className="blog-detail-wrapper">
            {/* Main Content */}
            <div className="blog-detail-main">
              {/* Featured Image */}
              <div className="blog-detail-image">
                <img src={currentBlog.image} alt={currentBlog.title} />
              </div>

              {/* Category Badge */}
              <div className="blog-detail-category">
                <span className="category-badge">{currentBlog.category}</span>
              </div>

              {/* Title */}
              <h1 className="blog-detail-title">{currentBlog.title}</h1>

              {/* Meta Information */}
              <div className="blog-detail-meta">
                <span className="meta-text">By {currentBlog.author}</span>
                <span className="meta-divider">|</span>
                <span className="meta-text">{currentBlog.date}</span>
              </div>

              {/* Content */}
              <div className="blog-detail-content">
                {currentBlog.content.map((block, index) => (
                  <p key={index} className="content-paragraph">
                    {block.text}
                  </p>
                ))}
              </div>

              {/* Navigation */}
              <div className="blog-navigation">
                <Link
                  to={`/blogs/${parseInt(id) === 1 ? 4 : parseInt(id) - 1}`}
                  className="nav-item nav-prev"
                >
                  <span className="nav-arrow">← Prev</span>
                  <h3 className="nav-title">{prevPost.title}</h3>
                </Link>

                <Link
                  to={`/blogs/${parseInt(id) === 4 ? 1 : parseInt(id) + 1}`}
                  className="nav-item nav-next"
                >
                  <span className="nav-arrow">Next →</span>
                  <h3 className="nav-title">{nextPost.title}</h3>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-detail-sidebar">
              {/* Search Box */}
              <div className="sidebar-search">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <button className="search-btn">
                  <img src={arrowIcon} alt="Search" />
                </button>
              </div>

              {/* Related Posts */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Related Posts</h3>
                <div className="related-posts">
                  {relatedPosts.map((post) => (
                    <Link
                      to={`/blogs/${post.id}`}
                      key={post.id}
                      className="related-post-card"
                    >
                      <div className="related-post-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="related-post-content">
                        <h4 className="related-post-title">{post.title}</h4>
                        <div className="related-post-meta">
                          <span className="meta-author">By {post.author}</span>
                          <span className="meta-date">{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
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

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/1234567890"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#25D366" />
          <path
            d="M20 10C14.477 10 10 14.477 10 20C10 21.89 10.525 23.66 11.438 25.168L10.5 29.5L15.032 28.592C16.495 29.402 18.196 29.85 20 29.85C25.523 29.85 30 25.373 30 19.85C30 14.327 25.523 10 20 10ZM20 11.5C24.687 11.5 28.5 15.313 28.5 20C28.5 24.687 24.687 28.5 20 28.5C18.394 28.5 16.902 28.03 15.645 27.23L15.415 27.08L12.83 27.705L13.475 25.235L13.305 24.99C12.435 23.695 12 22.11 12 20C12 15.313 15.813 11.5 20 11.5Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}

export default BlogDetail;
