
function ProjectsCard({src,link,h3,p}) {
  return (
    <a href={link} target='_blank'>
        <br/>
        <br/>
        <img className='hover' src={src} alt={`${h3} projects `}/>
        <h3>{h3}</h3>
        <p>{p}</p>
        

    </a>
  );
}

export default ProjectsCard