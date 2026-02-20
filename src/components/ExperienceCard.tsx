type Experience = {
    company: string;
    time: string;
    role: string;
    description: string;
};

function ExperienceCard({ company, time, role, description }: Experience) {
    return (
        <div className="card p-4">
            <h5>{company}</h5>
            <p className="text-secondary mb-1">{time}</p>
            <p className="fw-semibold">{role}</p>
            <p>{description}</p>
        </div>
    );
}

export default ExperienceCard;