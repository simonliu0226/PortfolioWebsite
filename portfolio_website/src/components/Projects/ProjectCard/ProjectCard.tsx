import './ProjectCard.css'

type CardProps = {
    name: string;
    description: string;
    imageUrl: string;
    githubLink: string;
    // liveDemoLink: string;
}

export default function ProjectCard({name, description, imageUrl, githubLink} : CardProps) {
    return (
        <div>
            <div>
                <img src={imageUrl} alt="Project Image" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div>
                <a href={githubLink}>
                    <button type="button" />
                </a>
            </div>
        </div>
    )
}