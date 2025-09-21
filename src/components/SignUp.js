import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Signup successful for ${email}`);
      setIsSubmitting(false);
      setEmail("");
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
            Create Your ArchDaily Account
          </h2>
          <p className="subhead" style={styles.subhead}>
            Gain access to curated insights, professional tools, and daily inspiration to elevate your work.
          </p>
        </header>
      </header>

      <a
        className="social-signin-btn"
        href="https://www.archdaily.com/accounts/google/sign_in?site=us&country=IN&redirect_uri=https%3A%2F%2Fwww.archdaily.com%2Fsearch%2Fimages%3Fauth%3Dhadid"
        rel="nofollow"
        style={styles.googleButton}
      >
        <span className="icon" style={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.805 10.023h-9.78v3.954h5.6c-.24 1.44-1.68 4.23-5.6 4.23-3.36 0-6.12-2.79-6.12-6.24s2.76-6.24 6.12-6.24c1.92 0 3.2.81 3.94 1.5l2.68-2.58C17.1 5.1 15.3 4.2 13.02 4.2 7.62 4.2 3.3 8.55 3.3 14.04s4.32 9.84 9.72 9.84c5.61 0 9.3-3.93 9.3-9.48 0-.63-.06-1.11-.495-1.353z"
              fill="#4285F4"
            />
          </svg>
        </span>
        <span>Continue with Google</span>
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
          {error && <p className="error-message" style={styles.errorMessage}>{error}</p>}
        </div>

        <div className="form-actions" style={styles.formActions}>
          <p className="terms" style={styles.terms}>
            By creating an account, you agree to our{" "}
            <a
              href="https://www.daaily.com/terms-conditions.html"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://www.daaily.com/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Privacy Policy
            </a>
            .
          </p>
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
            Already have a free account or paid plan?{" "}
            <span
              style={styles.loginSpan}
              onClick={() => alert("Redirect to login page")}
              role="button"
              tabIndex={0}
            >
              Log In
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
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
    color: "white",
    fontWeight: 600,
    padding: "0.75rem",
    borderRadius: 4,
    textDecoration: "none",
    marginBottom: "1.5rem",
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
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  errorMessage: {
    color: "red",
    fontSize: "0.85rem",
    marginTop: 4,
  },
  formActions: {
    marginTop: "1rem",
  },
  terms: {
    fontSize: "0.75rem",
    color: "#666",
    marginBottom: "1rem",
  },
  link: {
    color: "#4285F4",
    textDecoration: "none",
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

export default SignUp;
