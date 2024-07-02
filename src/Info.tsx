import About from "./components/About"
import Skills from "./components/Skills"
import "./info.css"

export default function Info() {
    return(
        <div id="InfoSection">
            <Skills />
            <About />
        </div>
    )
}