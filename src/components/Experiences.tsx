import { useState } from 'react';
import dkLogo from '../assets/DK_Logo.png';
import ceLogo from '../assets/CE_Logo.png';
import logo180 from '../assets/180_Logo.png';
import qoLogo from '../assets/QO_Logo.png';
import hfhsLogo from '../assets/HFHS_Logo.png';
import ptLogo from '../assets/PT_Logo.png';

type Experience = {
    company: string;
    time: string;
    role: string;
    description: string;
    location: string;
    logo?: string;
    url?: string;
};

const experiences: Experience[] = [
    {
        company: 'DraftKings',
        time: 'Summer 2026',
        role: 'Software Engineering Intern',
        description: 'AI Platforms Team \n\n\n I do not condone gambling \n Gamble at your own risk',
        location: 'Boston, MA',
        logo: dkLogo,
        url: 'https://www.draftkings.com/',
    },
    {
        company: 'Clear Estimates',
        time: 'Winter 2026',
        role: 'Software Developer',
        description: 'At Atlas Digital, my tech consulting club, my team built a recommendation system for Clear Estimates, a construction estimating platform, to flag potentially missing line items before contractors finalize orders. This involved studying different model architectures, extensive hyperparameter tuning, and iterative testing before landing on a two-phase PyTorch approach combining an autoencoder for slot classification with collaborative filtering, correctly surfacing 2 out of 3 masked missing parts from its top 10 recommendations.',
        location: 'Ann Arbor, MI',
        logo: ceLogo,
        url: 'https://www.clearestimates.com/',
    },
    {
        company: '180 Degrees Consulting',
        time: 'Fall 2025 - Winter 2026',
        role: 'Software Analyst',
        description: 'As an analyst at 180 Degrees Consulting, I had the opportunity to work with a YC-backed startup and a Detroit nonprofit across two consecutive semesters. \n For Aspect, a video indexing platform, I led the visual search component of a broader model evaluation report, researching and comparing commercial and open-source multimodal models using Z-score normalization across accuracy, latency, and cost to recommend the strongest fit for their film content pipeline. \n For GreenLight Fund Detroit, I contributed to refining their Community Engagement Playbook and built a web-based internal tool to log outreach activities and visualize their stakeholder interactions through a live dashboard.',
        location: 'Ann Arbor, MI',
        logo: logo180,
        url: 'https://www.180dcmichigan.com/',
    },
    {
        company: 'Quantum Opus',
        time: 'Summer 2025',
        role: 'Software Engineering Intern',
        description: 'At Quantum Opus, I built an automated electrical testing system from scratch for the custom semiconductor wafers powering their superconducting nanowire single-photon detectors. This involved writing Python libraries to control the wafer prober and source measurement units (SMUs), a Tkinter GUI for test configuration, an algorithm to iterate through and execute the selected test sequence, and a full data pipeline that logged results and generated dot plots and heatmaps, giving the fabrication team immediate, actionable feedback to quickly iterate during R&D. The system runs hands-free overnight across an entire wafer and is now used in production to validate every new chip.',
        location: 'Plymouth, MI',
        logo: qoLogo,
        url: 'https://www.quantumopus.com/web/',
    },
    {
        company: 'Henry Ford Health Systems',
        time: 'Summer 2024',
        role: 'Research + Data Analyst',
        description: 'At Henry Ford Health Systems Bone and Joint Center, I worked in an orthopedic research lab analyzing bone DXA scans to find an alternate approach for determining fracture risk. This involved processing imaging data through a computer vision pipeline and conducting statistical analysis in R, where we isolated a variogram factor significantly predictive of bone fracture risk. The findings are currently in the peer review process, with abstracts submitted to the 2026 Orthopaedic Research Society conference.',
        location: 'Detroit, MI',
        logo: hfhsLogo,
        url: 'https://www.hfhs-bjc.org/',
    },
    {
        company: 'Private Tutor',
        time: 'Fall 2023 – Present',
        role: 'Self-Employed',
        description: "Teaching is one of my biggest passions, so what better side job than tutoring? I've worked with seven students across grades 4 through 12 in math, reading, writing, physics, and computer science, tailoring my lesson plans approach to each student's learning style and pace. Beyond academics, I've done college counseling work focused on essay development and extracurricular positioning. Contact me with any opportunities or inquiries!",
        location: 'Northville, MI',
        logo: ptLogo,
    },
];

// wave: 6 stops, alternating high/low
// SVG viewBox 0 0 1000 100 — x positions evenly spaced, y alternates 28 / 72
const STOPS = [
    { x: 83,  y: 28 },
    { x: 250, y: 72 },
    { x: 416, y: 28 },
    { x: 583, y: 72 },
    { x: 750, y: 28 },
    { x: 916, y: 72 },
];

// smooth bezier through alternating points
const WAVE_PATH = `
    M 83,28
    C 166,28 166,72 250,72
    C 333,72 333,28 416,28
    C 499,28 499,72 583,72
    C 666,72 666,28 750,28
    C 833,28 833,72 916,72
`.trim();

function Experiences() {
    const [selected, setSelected] = useState(0);
    const exp = experiences[selected];

    return (
        <div className="container py-4" id="experience">
            <h2 className="mb-5 text-light">Experience</h2>

            {/* Timeline + anchored panel */}
            <div className="exp-stage">
                <div className="exp-timeline">
                    <svg
                        className="exp-wave"
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d={WAVE_PATH} stroke="#2a2a2a" strokeWidth="3" strokeDasharray="8 5" fill="none" />
                    </svg>

                    {experiences.map((e, i) => (
                        <button
                            key={e.company}
                            className={`exp-stop${selected === i ? ' active' : ''}`}
                            style={{
                                left: `${STOPS[i].x / 10}%`,
                                top: `${STOPS[i].y}%`,
                            }}
                            onClick={() => setSelected(i)}
                            title={e.company}
                        >
                            {e.logo
                                ? <img src={e.logo} alt={e.company} />
                                : <div className="exp-logo-placeholder" />
                            }
                        </button>
                    ))}
                </div>

                {/* Detail panel always centered */}
                <div className="exp-detail">
                    {exp.url && (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="exp-external-link">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M6 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                                <path d="M8 1h5v5M13 1 7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    )}

                    <div className="d-flex align-items-center gap-3 mb-3" style={{ paddingRight: '2rem' }}>
                        <div className="exp-detail-logo">
                            {exp.logo
                                ? <img src={exp.logo} alt={exp.company} />
                                : <div className="exp-logo-placeholder large" />
                            }
                        </div>
                        <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 }}>
                            <div className="d-flex justify-content-between align-items-baseline">
                                <div className="text-light fw-semibold" style={{ fontSize: '1rem' }}>{exp.company}</div>
                                <div className="exp-meta-value">{exp.time}</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-baseline">
                                <div className="text-secondary" style={{ fontSize: '0.82rem' }}>{exp.role}</div>
                                <div className="exp-meta-value" style={{ fontSize: '0.82rem' }}>{exp.location}</div>
                            </div>
                        </div>
                    </div>

                    <div className="exp-desc-box">{exp.description}</div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
