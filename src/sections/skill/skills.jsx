import React from 'react';
import Styles from './skillStyle.module.css';
import SkillList from '../../assets/Common/skillList.jsx';

function Skills() {
  return (
    <section id="skills" className={Styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={Styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="Bootstrap" />
        <SkillList skill="JavaScript" />
        <SkillList skill="React.js" />
        <SkillList skill="Node.js" />
        <SkillList skill="Tailwind CSS" />
        <SkillList skill="SQL" />
      </div>
    </section>
  );
}

export default Skills;