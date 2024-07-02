interface IconProps {
    alt: string;
    img: string;
    id: string;
    site: string;
}
export default function Icon({ alt, img, id, site="#" }: IconProps) {
    return (<div className="iconBack">
        <a href={site}>
        <img className="iconImg" alt={alt} src={img} id={id}>
        </img>
        </a>
    </div>)
}