import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { Project, ProjectLink } from './Projects';

function LinkButtons({ links, onContactClick }: { links?: ProjectLink[]; onContactClick?: () => void }) {
    if (!links || links.length === 0) {
        return (
            <a href="#contact" className="btn btn-outline-light w-100 mt-auto" onClick={onContactClick}>
                Contact for Release
            </a>
        );
    }
    return (
        <div className="d-flex gap-2 mt-auto">
            {links.map(link => (
                <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light flex-fill"
                    onClick={e => e.stopPropagation()}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}

type Rect = { x: number; y: number; width: number; height: number };

function ProjectModal({ p, onClose, originRect }: { p: Project; onClose: () => void; originRect: Rect }) {
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const dx = originRect.x + originRect.width / 2 - vw / 2;
    const dy = originRect.y + originRect.height / 2 - vh / 2;

    useEffect(() => {
        const front = frontRef.current;
        const back = backRef.current;
        const inner = innerRef.current;
        if (front && back && inner) {
            inner.style.height = `${Math.max(front.scrollHeight, back.scrollHeight)}px`;
        }
        requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    }, []);

    return createPortal(
        <div
            className={`project-modal-overlay${ready ? ' visible' : ''}`}
            onClick={onClose}
        >
            {/* this wrapper moves from the card's position to center AND flips simultaneously */}
            <div
                className="project-modal-mover"
                style={!ready ? { transform: `translate(${dx}px, ${dy}px) scale(0.75) rotateY(0deg)` } : undefined}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="project-modal-inner" ref={innerRef}>

                    {/* FRONT */}
                    <div ref={frontRef} className="project-modal-face project-modal-front card bg-dark text-light border-0 rounded-4 p-4">
                        <h5>{p.title}</h5>
                        <p>{p.description}</p>
                        <div>
                            {p.technologies.filter(Boolean).map((tech) => (
                                <span key={tech} className="badge bg-secondary me-2 mb-1">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* BACK */}
                    <div ref={backRef} className="project-modal-face project-modal-back card bg-dark text-light border-0 rounded-4 p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <h5 className="mb-0">{p.title}</h5>
                            <button className="btn btn-sm btn-outline-secondary ms-3" onClick={onClose} aria-label="Close">✕</button>
                        </div>

                        {p.detail && (
                            <p className="mb-4" style={{ fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: p.detail }} />
                        )}

                        <LinkButtons links={p.links} onContactClick={onClose} />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

function ProjectCard({ p }: { p: Project }) {
    const [originRect, setOriginRect] = useState<Rect | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    function handleClick() {
        if (!p.detail || !cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        setOriginRect({ x: r.x, y: r.y, width: r.width, height: r.height });
    }

    return (
        <>
            <div
                ref={cardRef}
                className={`project-card-wrapper${p.detail ? ' project-card-clickable' : ''}`}
                onClick={handleClick}
            >
                <div className="card bg-dark text-light shadow-lg border-0 rounded-4 p-4 h-100">
                    <h5>{p.title}</h5>
                    <p>{p.description}</p>

                    <div className="mb-3">
                        {p.technologies.filter(Boolean).map((tech) => (
                            <span key={tech} className="badge bg-secondary me-2 mb-1">{tech}</span>
                        ))}
                    </div>

                    <LinkButtons links={p.links} />
                </div>
            </div>

            {originRect && (
                <ProjectModal
                    p={p}
                    originRect={originRect}
                    onClose={() => setOriginRect(null)}
                />
            )}
        </>
    );
}

export default ProjectCard;
