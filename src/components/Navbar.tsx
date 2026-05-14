function Navbar() {
    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <nav className="navbar navbar-dark bg-black fixed-top shadow-sm">
            <div className="container d-flex justify-content-end">

                <ul className="navbar-nav flex-row">
                    {navLinks.map((link) => (
                        <li className="nav-item mx-3" key={link.label}>
                            <a className="nav-link text-light" href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;