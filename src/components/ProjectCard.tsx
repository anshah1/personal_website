type Project = {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
};

function ProjectCard(p: Project) {
    return (
        <div className="card bg-dark text-light shadow-lg border-0 rounded-4 p-4 h-100">
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
                <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light mt-3"
                >
                    View Project →
                </a>
            )}
        </div>
    );
}

export default ProjectCard;