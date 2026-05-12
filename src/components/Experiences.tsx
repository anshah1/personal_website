import ExperienceCard from './ExperienceCard';

const experiences = [
    {
        company: 'DraftKings',
        time: '2026',
        role: 'Software Engineering Intern',
        description: 'AI Platforms'
    },
    {
        company: 'Atlas Digital Tech Consulting',
        time: '2026-Present',
        role: 'Software Analyst',
        description: 'Technical solution development and integration'
    },
    {
        company: '180 Degrees Consulting',
        time: '2025-2026',
        role: 'Software Analyst',
        description: 'Business analysis + software implementation'
    },
    {
        company: 'Quantum Opus',
        time: '2025',
        role: 'Software Engineering Intern',
        description: 'Automated semiconductor wafer testing'
    },
    {
        company: 'Henry Ford Health Systems',
        time: '2024',
        role: 'Research + Data Analyst',
        description: 'Medical imaging analysis'
    },
    {
        company: 'Private Tutor',
        time: '2023-2025',
        role: 'Self-Employed',
        description: 'Personalized tutoring for all ages.'
    }
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

//add smth ab contacting for resume