type ContactIconProps = {
    logo: string;
    url: string;
};

function ContactIcon({ logo, url }: ContactIconProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
        >
            <img
                src={logo}
                alt=""
                style={{ width: "40px", height: "40px", filter: "invert(1)" }}
                className="img-fluid"

            />
        </a>
    );
}

export default ContactIcon;