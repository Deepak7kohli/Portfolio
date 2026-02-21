import React from 'react'
import styles from "./Projectstyles.module.css"
import ProjectsCard from '../../assets/Common/ProjectsCard.jsx'
import Project1 from '../../assets/Project1.png'
// import freshBurger from '../../assets/fresh-burger.png'
// import fitlift from '../../assets/fitlift.png'
// import hipsster from '../../assets/hipsster.png'
import defaultt from '../../assets/defaultt.png'



function Projects() {
  return (
    <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'> Projects</h1>
   <div className={styles.projectsContainer}>
    <ProjectsCard src={Project1} 
    link={'https://github.com/Deepak7kohli/Gaming_products.git'}
    h3='Landing Page(Frontend)' 
    p='' 
    />
    <ProjectsCard src={defaultt} 
    // link={'https://github.com/Deepak7kohli/Gaming_products.git'}
    h3='N/A' 
    p='N/A' 
    />
    <ProjectsCard src={defaultt} 
    // link={'https://github.com/Deepak7kohli/Gaming_products.git'}
    h3='N/A' 
    p='N/A' 
    />
    <ProjectsCard src={defaultt} 
    // link={'https://github.com/Deepak7kohli/Gaming_products.git'}
    h3='N/A' 
    p='N/A' 
    />
    </div> 
    
    
    </section>
  )
}

export default Projects