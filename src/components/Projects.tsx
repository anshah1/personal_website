import ProjectCard from './ProjectCard';

export type ProjectDetail = {
    inspiration: string;
    contribution: string;
    impact: string;
};

export type Project = {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    detail?: ProjectDetail;
};

const projects: Project[] = [
    {
        title: 'Hoopheads',
        description: 'NBA player guessing game with 10k+ users and 250k YouTube views',
        technologies: ["Flask", "Bootstrap", "JavaScript", "Supabase", "REST APIs", "Beautiful Soup"],
        url: "https://hoopheads.vercel.app/",
        detail: { inspiration: "", contribution: "", impact: "" }
    },
    {
        title: 'Blue_Lotus',
        description: 'Trade stress-testing',
        technologies: ["Python", "React", "Docker", "Postgresql"],
        url: "https://github.com",
        detail: { inspiration: "", contribution: "", impact: "" }
    },
    {
        title: 'Dill.study',
        description: 'Helping students study with AI the right way',
        technologies: ["Vite", "React.js", "TypeScript", "Tailwind", "Firebase", "Gemini"],
        url: "https://dill-study.vercel.app/",
        detail: { inspiration: "", contribution: "", impact: "" }
    },
    {
        title: 'PBL Application Portal',
        description: 'Application portal for business fraternity with 200+ applicants',
        technologies: ["React", "Tailwind", "Firebase"],
        url: "",
        detail: { inspiration: "", contribution: "", impact: "" }
    },
    {
        title: 'Recap',
        description: 'Summarize direct and group-chat conversations with a text',
        technologies: [],
        url: "https://github.com/anshah1/Recap",
        detail: { inspiration: "", contribution: "", impact: "" }
    },
    {
        title: 'Robotics Scouting Apps',
        description: 'Android and iOS apps to collect and analyze robot data',
        technologies: ["Swift", "Java", "XML", "Excel", "Tableau", "Python"],
        url: "https://docs.google.com/videos/d/11Mcq6h6bNkpQxx6ULCrOYq01cBJTPB1SS-9jFLlyjRs/edit?usp=sharing",
        detail: { inspiration: "", contribution: "", impact: "" }
    },
];

function Projects() {
    return (
        <div className="container py-4" id="projects">
            <h2 className="mb-4 text-light">Projects</h2>

            <div className="row g-4 position-relative">
                <div className="projects-hint" aria-hidden="true">
                    <span>click a card for details</span>
                </div>
                {projects.map((project) => (
                    <div className="col-md-6 col-lg-4" key={project.title}>
                        <ProjectCard p={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
