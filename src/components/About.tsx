import headshot from '../assets/headshot.JPG';

function About() {
    return (
        <div className="container py-4" id="about">
            <div className="row align-items-center">

                {/* Headshot */}
                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                        src={headshot}
                        className="img-fluid rounded-4 shadow-lg"
                        style={{ maxWidth: "400px" }}
                    />
                </div>

                <div className="col-md-8 text-light">
                    <h1 className="fw-bold mb-3">
                        Hi, I'm Ansh, and I love problem-solving, learning, and exploring
                    </h1>

                    <p className="lead">
                        I'm a computer science student with a minor in mathematics
                        at the University of Michigan
                    </p>

                    <p>
                        I'm most interested in building innovative software, designing systems
                        from scratch, and staying curious
                    </p>

                    <p>
                        In my free time, I enjoy playing racket sports,
                        dancing, playing the keyboard, reading, and cheering for the Pistons
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;