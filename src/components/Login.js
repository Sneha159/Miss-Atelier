import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let valid = true;
    setErrorEmail("");
    setErrorPassword("");

    if (!email) {
      setErrorEmail("Email is required");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorEmail("Please enter a valid email");
        valid = false;
      }
    }

    if (!password) {
      setErrorPassword("Password is required");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate login
    setTimeout(() => {
      alert(`Logged in as ${email}`);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="step-container auth-provider" style={styles.container}>
      <header className="step-header" style={styles.header}>
        <figure style={{ height: 72, margin: 0, marginBottom: 16 }}>
          <picture>
            <source
              srcSet="https://assets.adsttc.com/doodles/flat/logo-white-isotype.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="https://assets.adsttc.com/doodles/flat/logo-blue-isotype.svg"
              alt="ArchDaily"
              style={{ height: "100%", width: "auto", objectFit: "contain" }}
            />
          </picture>
        </figure>
        <header>
          <h2 className="title" style={styles.title}>
            Log In to Your ArchDaily Account
          </h2>
          <p className="subhead" style={styles.subhead}>
            Gain access to curated insights, professional tools, and daily inspiration to elevate your work.
          </p>
        </header>
      </header>

      <a
        className="social-signin-btn"
        href="https://www.archdaily.com/accounts/google/sign_in?site=us&country=IN&redirect_uri=https%3A%2F%2Fwww.archdaily.com%2Fsearch%2Fall%3Fauth%3Dhadid"
        rel="nofollow"
        style={{ ...styles.socialButton, backgroundColor: "#4285F4" }}
      >
        <span className="icon" style={styles.icon}>
          {/* Google SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.805 10.023h-9.78v3.954h5.6c-.24 1.44-1.68 4.23-5.6 4.23-3.36 0-6.12-2.79-6.12-6.24s2.76-6.24 6.12-6.24c1.92 0 3.2.81 3.94 1.5l2.68-2.58C17.1 5.1 15.3 4.2 13.02 4.2 7.62 4.2 3.3 8.55 3.3 14.04s4.32 9.84 9.72 9.84c5.61 0 9.3-3.93 9.3-9.48 0-.63-.06-1.11-.495-1.353z"
              fill="#fff"
            />
          </svg>
        </span>
        <span>Continue with Google</span>
      </a>

      <a
        className="social-signin-btn"
        href="https://www.archdaily.com/accounts/facebook/sign_in?site=us&country=IN&redirect_uri=https%3A%2F%2Fwww.archdaily.com%2Fsearch%2Fall%3Fauth%3Dhadid"
        rel="nofollow"
        style={{ ...styles.socialButton, backgroundColor: "#1877F2" }}
      >
        <span className="icon" style={styles.icon}>
          {/* Facebook SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"
              fill="#fff"
            />
          </svg>
        </span>
        <span>Continue with Facebook</span>
      </a>

      <div className="divider" style={styles.divider}>
        <span>or use your email</span>
      </div>

      <form className="provider-form" onSubmit={handleSubmit} style={styles.form}>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="you@example.com"
            required
          />
          {errorEmail && <p className="error-message" style={styles.errorMessage}>{errorEmail}</p>}
        </div>

        <div className="form-group" style={styles.formGroup}>
          <div style={styles.passwordLabelContainer}>
            <label htmlFor="password">Password</label>
            <p
              style={styles.forgotPassword}
              onClick={() => alert("Redirect to forgot password")}
              role="button"
              tabIndex={0}
            >
              Forgot your password?
            </p>
          </div>
          <div style={styles.passwordInputContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...styles.input, paddingRight: 30 }}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Eye closed icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19.5c-5.52 0-10-4.48-10-10 0-1.64.44-3.17 1.2-4.5" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                // Eye open icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {errorPassword && <p className="error-message" style={styles.errorMessage}>{errorPassword}</p>}
        </div>

        <div className="form-actions" style={styles.formActions}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              ...styles.continueButton,
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            Continue with email
          </button>
          <p className="login-link" style={styles.loginLink}>
            Don't have an account?{" "}
            <span
              style={styles.loginSpan}
              onClick={() => alert("Redirect to Sign Up")}
              role="button"
              tabIndex={0}
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: "3rem auto",
    padding: "1rem",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    color: "#222",
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
  },
  header: {
    marginBottom: "2rem",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0 0 0.5rem 0",
  },
  subhead: {
    fontSize: "1rem",
    color: "#555",
    margin: 0,
  },
  socialButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 600,
    padding: "0.75rem",
    borderRadius: 4,
    textDecoration: "none",
    marginBottom: "1rem",
    gap: 8,
    userSelect: "none",
  },
  icon: {
    display: "flex",
    alignItems: "center",
  },
  divider: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#888",
    fontSize: "0.9rem",
  },
  form: {},
  formGroup: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  passwordLabelContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  forgotPassword: {
    fontSize: "0.85rem",
    color: "#4285F4",
    cursor: "pointer",
    userSelect: "none",
  },
  passwordInputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: 4,
    border: "1px solid #ccc",
    width: "100%",
  },
  eyeButton: {
    position: "absolute",
    right: 8,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
  },
  errorMessage: {
    color: "red",
    fontSize: "0.85rem",
    marginTop: 4,
  },
  formActions: {
    marginTop: "1rem",
  },
  continueButton: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    fontWeight: 600,
    backgroundColor: "#222",
    color: "white",
    border: "none",
    borderRadius: 4,
  },
  loginLink: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#444",
  },
  loginSpan: {
    color: "#4285F4",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
