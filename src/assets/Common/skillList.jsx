import React from 'react';

function SkillList({ skill }) {
  const iconLetter = skill ? skill.charAt(0).toUpperCase() : '';
  
  return (
    <div className="skillItemWrapper">
      <div className="skillIcon">{iconLetter}</div>
      <div className="skillName">{skill}</div>
    </div>
  );
}

export default SkillList;