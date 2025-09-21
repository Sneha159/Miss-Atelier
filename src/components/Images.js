import React from "react";
import images from "../data/images";

const Images = () => {
  return (
    <div style={styles.container}>
      <h2>Images</h2>
      <div style={styles.grid}>
        {images.map((img) => (
          <div key={img.id} style={styles.card}>
            <img src={img.imageUrl} alt={img.title} style={styles.image} />
            <h3>{img.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "2rem" },
  grid: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    display: "grid",
   gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
   gap: "1.5rem",
   justifyItems: "center",


  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    width: "300px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default Images;
