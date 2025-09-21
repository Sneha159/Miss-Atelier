import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/miss-atelier-logo-light.png'; // Your actual logo file

const HomePage = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Miss Atelier Logo" style={styles.logo} />
      <Link to="/projects" style={styles.link}>
        Visit Miss Atelier
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a28be823', // light blue background
    boxshadow:'0 7px 8px rgba(10, 0, 5, 0.1)', 
  borderradius:'70px',
  padding:'20px',
  },
  logo: {
    width: '500px', // Adjust size as needed
    height: 'auto',
    marginBottom: '20px',
    backgroundColor: '#a28be82b', // light blue background
    shadow:'0 7px 8px rgba(10, 0, 5, 0.1)', 
    borderradius:'70px',
     padding:'20px',
  },
  link: {
    fontSize: '20px',
    color: '#007BFF',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default HomePage;
