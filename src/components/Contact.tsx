import ContactIcon from "./ContactIcon";

import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import emailLogo from "../assets/email.png";

const contacts = [
    {
        logo: githubLogo,
        url: "https://github.com/anshah1"
    },
    {
        logo: linkedinLogo,
        url: "https://www.linkedin.com/in/anshah18/"
    },
    {
        logo: emailLogo,
        url: "mailto:anshs@umich.edu?cc=anshshah2025@gmail.com&subject=%5BContact%20from%20personal%20website%5D"
    }
];

function Contact() {
    return (
        <section className="container py-5 text-center">
            <h2 className="mb-4 text-light">Contact</h2>

            <div className="d-flex justify-content-center align-items-center">
                {contacts.map((contact, index) => (
                    <ContactIcon key={index} {...contact} />
                ))}
            </div>
        </section>
    );
}

export default Contact;