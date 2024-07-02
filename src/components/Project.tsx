interface ProjectProps {
    title: string,
    tags: string,
    content: string,
    devPhase: string
}

export default function Project({ title, tags, content, devPhase }: ProjectProps) {

    return (
        <div className="projectDiv">

            <h3 className="projectTitle">{title}</h3>
            <h6 className="projectPhase">{devPhase}</h6>
            <h6 className="projectTags">{tags}</h6>
            <p className="projectContent">{content}</p>


        </div>
    )
}