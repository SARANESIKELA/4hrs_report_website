import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-left-content">
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-square"></div>
              <div className="logo-text">
                <span className="logo-hours">4hrs</span>
                <span className="logo-report">Report</span>
              </div>
            </div>
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
            <img src="/roof-image.svg" alt="Red corrugated roofing" />
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          {!isSubmitted ? (
            <>
              <h2 className="welcome-heading">Forgot Password?</h2>
              <p className="welcome-text">
                No worries! Enter your email address and we'll send you
                instructions to reset your password.
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
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="signin-button">
                  Send Reset Link
                </button>

                <div className="signup-link">
                  <Link to="/">Back to Sign In</Link>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="welcome-heading">Check Your Email</h2>
              <p className="welcome-text">
                We've sent password reset instructions to <strong>{email}</strong>.
                Please check your inbox and follow the link to reset your password.
              </p>

              <div className="login-form">
                <div className="signup-link" style={{ marginTop: "24px" }}>
                  <span>Didn't receive the email? </span>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#dc2626",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: 0,
                      fontSize: "15px",
                    }}
                  >
                    Try again
                  </button>
                </div>

                <div className="signup-link" style={{ marginTop: "16px" }}>
                  <Link to="/">Back to Sign In</Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
