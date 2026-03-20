import React from 'react';

function ProjectsCard({ src, link, h3, p }) {
  return (
    <div className="projectCard">
      <img className="projectImg" src={src} alt={`${h3} logo`} />
      <div className="projectInfo">
        <h3>{h3}</h3>
        <p>{p}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn viewBtn">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectsCard;