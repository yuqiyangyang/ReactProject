import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList =({projects}) =>{
    return(
        <div className="project-list section">
           {projects && projects.map(project=>{//first projects check if we have projects
               return(
                   <ProjectSummary project={project} key={project.id} />
               )

           })}

        </div>
    )
}

export default ProjectList