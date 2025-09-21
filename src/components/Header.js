import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoBackground from "../assets/miss-atelier-logo-dark.png";
import Home from "./Home";


const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/images", label: "Images" },
  { to: "/professionals", label: "Professionals" },
  { to: "/news", label: "News" },
  { to: "/signup", label: "Sign Up" },
  { to: "/login", label: "Log In" },
];

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {navLinks.map(({ to, label }, index) => (
          <NavLink
            key={to}
            to={to}
            style={{
              ...styles.link,
              ...(hoveredIndex === index ? styles.linkHover : {}),
            }}
            activeStyle={styles.activeLink}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    height: 80,
    backgroundImage: `url(${logoBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "auto 60px",
    display: "flex",
    alignItems: "center",
    paddingLeft: 180,
    backgroundColor: "#d1beeeff", // light blue background
    boxShadow: "0 2px 4px rgba(146, 146, 198, 0.85)",
    marginBottom: "1rem",
  },
  nav: {
    
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#230255ff", // light text color
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.5rem",
    padding: "8px 16px",
    borderRadius: 9999, // large radius for oval shape
    transition: "background-color 0.3s, color 0.3s",
    display: "inline-block",
  },
  linkHover: {
    backgroundColor: "#a484ebff", // golden background on hover
    color: "#white", // dark text on hover for contrast
  },
  activeLink: {
    fontWeight: "bold",
    backgroundColor: "#600f0ff",
    color: "#222",
    borderRadius: 9999,
    padding: "8px 16px",
  },
};

export default Header;
