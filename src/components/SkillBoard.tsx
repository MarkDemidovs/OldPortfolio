interface SkillProps {
    title: string,
    items: string[]
}

export default function SkillBoard({ title, items }: SkillProps) {

    return (
        <div className="SkillBoard">
            <h5>{title}</h5>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}