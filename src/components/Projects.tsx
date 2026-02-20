import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Hoopheads',
        description: 'NBA player guessing game with 10k+ users and 250k YouTube views',
        technologies: ["Flask", "Boostrap", "JavaScript", "SQL", "REST APIs"],
        url: "https://hoopheads.vercel.app/"
    },
    {
        title: 'Dill.study',
        description: 'Helping students study with AI the right way',
        technologies: ["Vite", "React.js", "TypeScript", "Tailwind", "Firebase", "Gemini"],
        url: "https://dill-study.vercel.app/"
    },
    {
        title: 'Robotics Scouting Apps',
        description: 'Android and iOS apps to collect and analyze robot data',
        technologies: ["Swift", "Java", "XML", "Excel", "Tableau", "Python"],
        url: "https://github.com/Robostangs/2025-Android-Scouting-App"
    }
]

function Projects() {
    return (
        <section className="container py-5">
            <h2 className="mb-4 text-light">Projects</h2>

            <div className="row g-4">
                {projects.map((project) => (
                    <div className="col-md-6 col-lg-4" key={project.title}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;