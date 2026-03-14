import React from 'react'
import styles from "./Projectstyles.module.css"
import ProjectsCard from '../../assets/Common/ProjectsCard.jsx'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'



function Projects() {
  return (
    <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'> Projects</h1>
   <div className={styles.projectsContainer}>
    <ProjectsCard src={project2} 
    link={'https://simple-weather-app-kohl.vercel.app/'}
    h3='Weather-App' 
    p='React | API | CSS' 
    />
    <ProjectsCard src={project1} 
    link={'https://gaming-products.vercel.app/'}
    h3='Gaming-Accs.' 
    p='HTML | CSS | JavaScript' 
    />
    <ProjectsCard src={project3} 
    link={'#'}
    h3='Portfolio' 
    p='React | Vite | CSS' 
    />
    <ProjectsCard src={project4} 
    link={'https://github.com/Deepak7kohli/sentiment_analysis'}
    h3='Sentiment Analysis' 
    p='Python | Machine Learning | NLP' 
    />
    </div> 
    
    
    </section>
  )
}

export default Projects