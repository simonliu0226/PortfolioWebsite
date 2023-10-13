import ProjectCard from './ProjectCard/ProjectCard'
import profilePic from '../../assets/Project1ExampleImage.jpg'
import './Projects.css'

type ProjectsArray = {
    name: string;
    description: string;
    imageUrl: string;
    githubLink: string;
}[]

export default function Projects() {
    const projects : ProjectsArray = [{name: 'Example Project 1', description: 'Example Project 1 description', imageUrl: profilePic, githubLink: 'https://github.com/'}, {name: 'Example Project 2', description: 'Example Project 2 description', imageUrl: profilePic, githubLink: 'https://github.com/'}]

    return (
        <div>
            {projects.map((project) => <ProjectCard name={project.name} description={project.description} imageUrl={project.imageUrl} githubLink={project.githubLink} />)}
        </div>
    )
}