import ProjectCard from './ProjectCard';

export type Project = {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    detail?: string;
};

const projects: Project[] = [
    {
        title: 'Hoopheads',
        description: 'NBA player guessing game with 15k+ users and 300k YouTube views',
        technologies: ["Flask", "Bootstrap", "JavaScript", "Supabase", "REST APIs", "Beautiful Soup"],
        url: "https://hoopheads.vercel.app/",
        detail: "As my first web development experience, I wanted to build something I actually saw a use case for. As a huge NBA fan and daily player of online games, I noticed there were plenty of NBA guessing games out there, but none that let you guess players purely from their stats. <br><br>To build Hoopheads, I taught myself Flask, worked with REST APIs and web scraping to pull player data, and built a stats tracking dashboard with Google OAuth and Supabase for registered users. <br><br>After online marketing and cold emailing basketball creators, it got featured by KOT4Q, my favorite NBA YouTuber growing up, in <a href=\"https://www.youtube.com/watch?v=Rt_Bh02eD40\" target=\"_blank\" class=\"project-detail-link\">a video</a> that crossed 300k views. The game has since reached 15k unique players across 100 countries with 600 registered users."
    },
    /*
    {
        title: 'Blue_Lotus',
        description: 'Trade stress-testing',
        technologies: ["Python", "React", "Docker", "Postgresql"],
        url: "https://github.com",
        detail: ""
    },
    */
    /*
    {
        title: 'PBL Application Portal',
        description: 'Application portal for business fraternity with 200+ applicants',
        technologies: ["React", "Tailwind", "Firebase"],
        url: "",
        detail: ""
    },
    */
    {
        title: 'Recap',
        description: 'Summarize direct and group-chat conversations with a text',
        technologies: ["Python", "SQLite", "AppleScript", "macOS Launch Agent"],
        url: "https://github.com/anshah1/Recap",
        detail: "When I realized that everything you do on your computer is just executing lines of code in a user-friendly way, I had an epiphany. What if you could bypass the iMessage UI entirely and send messages straight from the terminal? My friends made fun of me for building something with no real use case instead of studying for a midterm, so I adapted it into something more practical: a bot that automatically summarizes long conversations. <br><br>I started by tapping directly into iMessage's local database to read conversations, then built trigger detection so the bot knows when to fire. From there I wired in an LLM to generate the summaries, engineered automatic model rotation to handle rate limits without needing extra API keys, and deployed the whole thing as a macOS LaunchAgent so it starts and stops silently with the system. <br><br>It's been running on my laptop ever since, and my friends and I use it regularly in group chats, occasionally for its intended use case, but primarily for humorous purposes, to see how an LLM interprets conversations full of inside jokes and slang."
    },
    {
        title: 'Dill.study',
        description: 'Helping students study with AI the right way',
        technologies: ["Vite", "React.js", "TypeScript", "Tailwind", "Firebase", "Gemini"],
        url: "https://dill-study.vercel.app/",
        detail: "At MHacks 2025, my teammates <a href=\"https://linkedin.com/in/nikhil-talla\" target=\"_blank\" class=\"project-detail-link\">Nikhil</a>, <a href=\"https://www.linkedin.com/in/nirav-jaiswal-a35272252/\" target=\"_blank\" class=\"project-detail-link\">Nirav</a>, <a href=\"https://www.linkedin.com/in/amanthallapally/\" target=\"_blank\" class=\"project-detail-link\">Aman</a>, and I wanted to tackle a problem we all recognized firsthand. When students get stuck, the easiest option is to just ask AI for the answer. The alternatives are inconvenient office hours or expensive tutoring. We wanted to build a platform where AI is forced to be a teacher and guidance tool rather than a task completer. <br><br>I implemented the Gemini-powered tutor, using iterative adversarial prompt tuning to get it to guide students through problems with hints and adaptive questioning rather than revealing answers. I also integrated Firebase authentication and AgentMail to handle automated assignment reminders. <br><br>We won 1st place in the MLH track at MHacks 2025. Since then, I've actually put it to use with my own tutoring students as a supplemental learning tool."
    },
    {
        title: 'Cache Simulator',
        description: 'Configurable CPU cache simulator in C',
        technologies: ["C"],
        url: "",
        detail: "Implemented a flexible CPU cache simulator in C, supporting configurable block sizes, set counts, and associativity levels. The simulator handles write-back with allocate-on-write policy, LRU block replacement, and correctly services instruction fetches, loads, and stores by managing data transfers between the processor, cache, and memory."
    },
    {
        title: 'Robotics Scouting Apps',
        description: 'Android and iOS apps to collect and analyze robot data',
        technologies: ["Swift", "Java", "XML", "Excel", "Tableau", "Python"],
        url: "https://docs.google.com/videos/d/11Mcq6h6bNkpQxx6ULCrOYq01cBJTPB1SS-9jFLlyjRs/edit?usp=sharing",
        detail: "Our robotics team needed a reliable way to collect and analyze match data to make informed strategy and alliance selection decisions at competition. <br><br>With my team, I developed four Android and iOS scouting apps for real-time data collection, Tableau dashboards to dynamically surface insights across thousands of data points per event, and a radio communication system to pipe match data back to the pits, all without using Wi-Fi. <br><br>The apps reached 500+ downloads across 20 teams and helped our team through three world championship qualifications."
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
