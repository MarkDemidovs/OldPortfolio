import Icons from "./components/Icons"

export default function Hero() {
    return (
        <div id="heroBg">
            <div id="MainText" className="HeroElement">
                <h1 id="heroMain">MARK DEMIDOVS</h1>
                <h3 id="heroSubtitle">youngest baltic full-stack software developer</h3>
            </div>
            <div id="IconsNext" className="HeroElement">
                <Icons/>
            </div>
        </div>
    )
}