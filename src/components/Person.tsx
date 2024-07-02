interface PersonProps {
    name: string,
    linkTitle: string
}

export default function Person({name, linkTitle}: PersonProps) {
    return(
        <div>
            <div>
                <h5>
                {name}
                </h5>
                <p>{linkTitle}</p>
            </div>
        </div>
    )
}