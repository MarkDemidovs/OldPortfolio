interface ContactProps {
    type: string,
    forward:string,
}

export default function Contact({type, forward}: ContactProps) {
    return (
        <div className="contacts">
            <h2 className="contactName">{type}</h2>
            <h5 className="contactForward">{forward}</h5>
        </div>
    );
}