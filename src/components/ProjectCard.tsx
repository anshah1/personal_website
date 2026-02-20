type Project = {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
};

function ProjectCard(p: Project) {
    return (
        <div className="card p-4">
            <h5>{p.title}</h5>
            <p>{p.description}</p>

            <div>
                {p.technologies.map((tech) => (
                    <span key={tech} className="badge bg-secondary me-2">
                        {tech}
                    </span>
                ))}
            </div>

            {p.url && (
                <a href={p.url} target="_blank">
                    View Project
                </a>
            )}
        </div>
    );
}

export default ProjectCard;