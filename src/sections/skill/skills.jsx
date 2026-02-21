import React from 'react'
import Styles from './skillStyle.module.css'
import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../assets/Common/skillList.jsx'

function Skills() {
  return (
    <section id="skills" className={Styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <br></br>
      <br/>

      <div className={Styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>

      <hr />

      <div className={Styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="Tailwind-CSS" />
      </div>
    </section>
  )
}

export default Skills