type Experience = {
    company: string;
    time: string;
    role: string;
    description: string;
};

function ExperienceCard({ company, time, role, description }: Experience) {
    return (
        <div className="card bg-dark text-light shadow-lg border-0 rounded-4 p-4 h-100">
            <h5>{company}</h5>
            <p className="text-secondary mb-1">{time}</p>
            <p className="fw-semibold">{role}</p>
            <p>{description}</p>
        </div>
    );
}

export default ExperienceCard;
