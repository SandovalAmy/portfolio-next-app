import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: 'React TypeScript Portfolio Website',
        description: 'Project 1 description',
        image: '/images/projects/1.png',
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: 'Project 2 Website',
        description: 'Project 2 description',
        image: '/images/projects/1.png',
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: 'Project 3 Website',
        description: 'Project 3 description',
        image: '/images/projects/1.png',
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectsSection = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => 
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            )}
        </div>
    </>
  )
}

export default ProjectsSection