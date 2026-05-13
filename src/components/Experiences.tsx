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
        time: '2026',
        role: 'Software Engineering Intern',
        description: 'AI Platforms Team',
        location: 'Boston, MA',
        logo: dkLogo,
        url: 'https://www.draftkings.com/',
    },
    {
        company: 'Clear Estimates',
        time: 'Jan 2026 – May 2026',
        role: 'Software Developer',
        description: 'Collaborative Filtering Model',
        location: 'Ann Arbor, MI',
        logo: ceLogo,
        url: 'https://www.clearestimates.com/',
    },
    {
        company: '180 Degrees Consulting',
        time: '2025 – 2026',
        role: 'Software Analyst',
        description: 'Business analysis + software implementation',
        location: 'Ann Arbor, MI',
        logo: logo180,
        url: 'https://www.180dcmichigan.com/',
    },
    {
        company: 'Quantum Opus',
        time: '2025',
        role: 'Software Engineering Intern',
        description: 'Automated semiconductor wafer testing',
        location: 'Plymouth, MI',
        logo: qoLogo,
        url: 'https://www.quantumopus.com/web/',
    },
    {
        company: 'Henry Ford Health Systems',
        time: '2024',
        role: 'Research + Data Analyst',
        description: 'Medical imaging analysis',
        location: 'Detroit, MI',
        logo: hfhsLogo,
        url: 'https://www.hfhs-bjc.org/',
    },
    {
        company: 'Private Tutor',
        time: '2023 – 2025',
        role: 'Self-Employed',
        description: 'Personalized tutoring for all ages',
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

                {/* Detail panel anchored below selected dot */}
                <div
                    className="exp-detail"
                    style={{ left: `${STOPS[selected].x / 10}%` }}
                >
                    {exp.url && (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="exp-external-link">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M6 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                                <path d="M8 1h5v5M13 1 7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    )}

                    <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="exp-detail-logo">
                            {exp.logo
                                ? <img src={exp.logo} alt={exp.company} />
                                : <div className="exp-logo-placeholder large" />
                            }
                        </div>
                        <div>
                            <div className="text-light fw-semibold" style={{ fontSize: '1rem' }}>{exp.company}</div>
                            <div className="text-secondary" style={{ fontSize: '0.82rem' }}>{exp.role}</div>
                        </div>
                    </div>

                    <div className="exp-meta">
                        <div>
                            <div className="exp-meta-label">Timeline</div>
                            <div className="exp-meta-value">{exp.time}</div>
                        </div>
                        <div>
                            <div className="exp-meta-label">Location</div>
                            <div className="exp-meta-value">{exp.location}</div>
                        </div>
                    </div>

                    <p className="mb-0 mt-3" style={{ color: '#aaa', fontSize: '0.85rem' }}>{exp.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
