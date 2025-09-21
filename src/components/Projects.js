import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>
            <img
              src={project.imageUrl}
              alt={project.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    marginBottom: "1.5rem",
    fontSize: "2rem",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "300px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "1rem",
  },
  title: {
    margin: "0.5rem 0",
  },
  description: {
    color: "#555",
  },
};

export default Projects;
