import umichLogo from '../assets/umich.png';

type Course = {
    code: string;
    name: string;
    thoughts: string;
};

const courses: Course[] = [
    {
        code: 'EECS 370',
        name: 'Computer Organization',
        thoughts: 'Learned that I love low-level programming and became more curious about how systems work. Drew some cool datapaths.',
    },
    {
        code: 'EECS 281',
        name: 'Data Structures & Algorithms',
        thoughts: 'Made fun projects about Mario, zombies, and Among Us from scratch.',
    },
    {
        code: 'MATH 425',
        name: 'Probability Theory',
        thoughts: "Every event has a 50% chance of occurring. Either it happens or it doesn't.",
    },
    {
        code: 'EECS 280',
        name: 'Object-Oriented Programming',
        thoughts: 'Programmed euchre!',
    },
    {
        code: 'EECS 203',
        name: 'Discrete Math',
        thoughts: 'Sat in office hours every Tuesday confused but had the most rewarding epiphanies of my life.',
    },
    {
        code: 'PHIL 340',
        name: 'Minds and Machines',
        thoughts: 'Watched some cool movies, read a cool book, and understood why COE requires you to take humanities courses.',
    },
    {
        code: 'ENGR 100-850',
        name: 'Robotics Mechanisms',
        thoughts: 'Got my hands on Arduinos and reinforced my decision to go down the software route.',
    },
];

function Education() {
    return (
        <div className="container py-4" id="education">
            <h2 className="mb-4 text-light">Education</h2>

            <div className="education-header mb-5">
                <img
                    src={umichLogo}
                    alt="University of Michigan"
                    className="umich-logo"
                />
                <div>
                    <h4 className="text-light mb-1">University of Michigan College of Engineering</h4>
                    <p className="text-secondary mb-0">B.S.E Computer Science &middot; Minor in Mathematics &middot; Class of 2028</p>
                </div>
            </div>

            <h5 className="text-secondary text-uppercase mb-4" style={{ fontSize: '0.7rem', letterSpacing: '0.12em' }}>
                Some of my favorite classes
            </h5>

            <div className="row g-4">
                {courses.map(c => (
                    <div className="col-md-4" key={c.code}>
                        <p className="text-light mb-1" style={{ fontSize: '0.9rem' }}>
                            <span className="text-secondary">{c.code}:</span> {c.name}
                        </p>
                        {c.thoughts && (
                            <p className="text-secondary mb-0" style={{ fontSize: '0.82rem' }}>{c.thoughts}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
