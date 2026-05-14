import headshot from '../assets/headshot.JPG';

function About() {
    return (
        <div className="container py-4" id="about">
            <h1 className="fw-bold text-light mb-4">
                Hi, I'm{' '}
                <span className="about-name-highlight">
                    Ansh
                    <svg className="about-name-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0,7 Q25,2 50,6 Q75,10 100,5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    </svg>
                </span>!
            </h1>

            <div className="row align-items-stretch">
                <div className="col-md-4 mb-4 mb-md-0 d-flex align-items-center">
                    <img
                        src={headshot}
                        className="shadow-lg w-100"
                        style={{ maxWidth: "340px", aspectRatio: "1", objectFit: "cover", borderRadius: "50%" }}
                    />
                </div>

                <div className="col-md-8 text-light d-flex flex-column justify-content-between">
                    <p style={{ fontSize: '1.4rem' }}>
                        I'm a computer science and mathematics student at Michigan driven by curiosity. I love understanding how things work at a deep level, which is why I'm especially drawn to building systems from scratch and tackling hard problems in the fields of low-latency systems and AI.
                    </p>
                    <p style={{ fontSize: '1.4rem' }}>
                        Outside of software, I care deeply about giving back to the communities that shaped me through teaching and volunteering.
                    </p>
                    <p style={{ fontSize: '1.4rem' }}>
                        In my free time, I love playing racket sports, dancing, playing the keyboard, traveling with friends, and cheering for the Pistons 🏀.
                    </p>
                    <p className="mb-0" style={{ fontSize: '1.4rem' }}>
                        Check out what I've been{' '}
                        <a href="https://www.goodreads.com/user/show/89175918-ansh" target="_blank" rel="noopener noreferrer" className="project-detail-link">reading</a>
                        {' '}and{' '}
                        <a href="https://stats.fm/anshshah" target="_blank" rel="noopener noreferrer" className="project-detail-link">listening to</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
