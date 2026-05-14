import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <nav className="navbar navbar-dark bg-black fixed-top shadow-sm">
            <div className="container d-flex justify-content-end align-items-center">

                {/* Desktop */}
                <ul className="navbar-nav flex-row d-none d-md-flex">
                    {navLinks.map((link) => (
                        <li className="nav-item mx-3" key={link.label}>
                            <a className="nav-link text-light" href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="d-md-none btn btn-link text-light p-0"
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                    style={{ fontSize: '1.4rem', lineHeight: 1 }}
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="bg-black border-top border-secondary d-md-none">
                    <ul className="navbar-nav px-3 py-2">
                        {navLinks.map((link) => (
                            <li className="nav-item py-1" key={link.label}>
                                <a
                                    className="nav-link text-light"
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
