import React from 'react';
import professionals from '../data/professionals';
import './Professionals.css';

const Professional = () => {
  return (
    <div className="professionals-container">
      {professionals.map((pro) => (
        <div key={pro.id} className="professional-card">
          <img
            src={pro.photo}
            alt={`${pro.name} photo`}
            className="professional-photo"
            loading="lazy"
          />
          <h2 className="professional-name">{pro.name}</h2>
          <p><strong>Country:</strong> {pro.country}</p>
          <p><strong>Projects:</strong> {pro.projects}</p>
          <p><strong>Expertise:</strong> {pro.expertise.join(', ')}</p>
          <a
            href={pro.website}
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            Visit Website
          </a>
        </div>
      ))}
    </div>
  );
};

export default Professional;
