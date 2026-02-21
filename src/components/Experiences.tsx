import ExperienceCard from './ExperienceCard';

const experiences = [
    {
        company: 'DraftKings',
        time: '2026',
        role: 'Software Engineering Intern',
        description: 'Summer 2026'
    },
    {
        company: '180 Degrees Consulting',
        time: '2025',
        role: 'Software Analyst',
        description: 'LLM research and performance/cost modeling for a YC startup'
    },
    {
        company: 'Quantum Opus',
        time: '2025',
        role: 'Software Engineering Intern',
        description: 'Built an automated semiconductor wafer testing pipeline'
    },
    //{
    //    company: 'Private Tutor',
    //    time: '2023-2025',
    //    role: 'Self-Employed',
    //    description: 'Personalized tutoring for all ages.'
    //}
]

function Experiences() {
    return (
        <div className="container py-5" id="experience">
            <h2 className="mb-4 text-light">Experiences</h2>
            <div className="row g-4">
                {experiences.map((experience) => (
                    <div
                        className="col-md-6 col-lg-4"
                        key={experience.company}
                    >
                        <ExperienceCard {...experience} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiences;