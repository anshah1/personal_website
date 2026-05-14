import headshot from '../assets/headshot.JPG';

function About() {
    return (
        <div className="container py-4" id="about">
            <div className="row align-items-center">
                <div className="col-md-4 mb-4 mb-md-0">
                    <img
                        src={headshot}
                        className="shadow-lg"
                        style={{ width: "100%", maxWidth: "340px", aspectRatio: "1", objectFit: "cover", borderRadius: "50%" }}
                    />
                </div>

                <div className="col-md-8 text-light d-flex flex-column justify-content-between" style={{ minHeight: "340px" }}>
                    <div>
                        <h2 className="fw-bold mb-1">Ansh Shah</h2>
                        <p className="text-secondary mb-4">Computer Science @ University of Michigan</p>
                    </div>
                    <p style={{ fontSize: '1.05rem' }}>
                        I love building innovative software, designing systems from scratch, solving hard problems, and staying curious.
                    </p>
                    <p style={{ fontSize: '1.05rem' }}>
                        In my free time, I play racket sports, dance, play the keyboard, and cheer for the Pistons 🏀.
                    </p>
                    <p className="mb-0" style={{ fontSize: '1.05rem' }}>
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
