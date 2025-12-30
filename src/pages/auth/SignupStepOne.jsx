import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import loginPic from "assets/images/login_pic.jpg";
import logo from "assets/images/logo.png";

function SignupStepOne() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data and navigate to step two
    console.log("Signup Step One:", { fullName, email, password });
    navigate("/signup/details");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-left-content">
          <div className="logo">
            <img src={logo} alt="4hrs Report" className="logo-image" />
          </div>

          <h1 className="main-heading">
            Smart, Reliable Reports for
            <br />
            Roofing and Building Insights
          </h1>

          <p className="description">
            Access professionally curated reports on roofing, walls, and
            building structures to make informed decisions with accurate
            insights and expert analysis.
          </p>

          <div className="roof-image">
            <img src={loginPic} alt="Red corrugated roofing" />
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2 className="welcome-heading">Create An Account</h2>
          <p className="welcome-text">
            Create an account to explore, purchase, and manage detailed reports
            on roofing, walls, and building structures with ease.
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <div className="input-wrapper">
                <svg
                  className="input-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.0711 19C17.0711 15.134 13.866 12 10 12C6.13401 12 2.92893 15.134 2.92893 19"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <svg
                  className="input-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33333 3.33333H16.6667C17.5833 3.33333 18.3333 4.08333 18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5C1.66667 4.08333 2.41667 3.33333 3.33333 3.33333Z"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3333 5L10 10.8333L1.66667 5"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <svg
                  className="input-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.83333 9.16667V5.83333C5.83333 4.72826 6.27232 3.66846 7.05372 2.88706C7.83512 2.10565 8.89493 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88706C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V9.16667"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 2.5L17.5 17.5"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.81667 8.81667C8.53785 9.09644 8.31565 9.42749 8.16255 9.79202C8.00944 10.1566 7.92835 10.5486 7.92383 10.9453C7.91932 11.3419 7.99149 11.7358 8.13628 12.1039C8.28107 12.472 8.49568 12.808 8.76824 13.0931C9.0408 13.3783 9.36589 13.6073 9.72495 13.767C10.084 13.9267 10.4706 14.0141 10.8633 14.0238C11.256 14.0334 11.6464 13.9652 12.0133 13.8233C12.3803 13.6814 12.7167 13.4686 13.0033 13.1967"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.89167 4.34167C3.11833 5.57583 1.675 7.51083 0.833333 10C2.5 14.5833 6.03333 17.5 10 17.5C11.775 17.5 13.4417 17.0008 14.8917 16.1583"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.2583 13.7917C18.275 12.5583 19.0083 11.2917 19.1667 10C17.5 5.41667 13.9667 2.5 10 2.5C9.45 2.5 8.90833 2.55 8.38333 2.64167"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.9167 10.5917C12.7861 11.2028 12.4696 11.7593 12.0092 12.1862C11.5489 12.613 10.9666 12.8903 10.3417 12.9825"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.833333 10C0.833333 10 4.16667 3.33333 10 3.33333C15.8333 3.33333 19.1667 10 19.1667 10C19.1667 10 15.8333 16.6667 10 16.6667C4.16667 16.6667 0.833333 10 0.833333 10Z"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="referral-link">
              <Link to="/referral">Have Referral Code?</Link>
            </div>

            <button type="submit" className="signin-button">
              Signup
            </button>

            <div className="signup-link">
              <span>Already have an account? </span>
              <Link to="/">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupStepOne;
