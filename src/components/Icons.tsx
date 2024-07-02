import Icon from "./Icon";


export default function Icons() {
    return (
        <div className="IconStrip">
            <div className="iconsLine1">
                <Icon img="./ReactLogo.png" alt="React Logo" id="ReactIcon" site="https://react.dev/"/>
                <Icon img="./TSLogo.png" alt="TypeScript Logo" id="TSIcon" site="https://www.typescriptlang.org/"/>
                <Icon img="./JSLogo.png" alt="JavaScript Logo" id="JSIcon" site="https://en.wikipedia.org/wiki/JavaScript"/>
                <Icon img="./NodeLogo.png" alt="NodeJS Logo" id="NodeIcon" site="https://nodejs.org/en"/>
                <Icon img="./CPPLogo.png" alt="C++ Logo" id="CPPIcon" site="https://en.wikipedia.org/wiki/C%2B%2B"/>
            </div>
            <div className="iconsLine2">
                <Icon img="./MDBLogo.png" alt="MongoDB Logo" id="MDBIcon" site="https://www.mongodb.com/"/>
                <Icon img="./CSLogo.png" alt="C# Logo" id="CSIcon" site="https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29"/>
                <Icon img="./CLogo.png" alt="C Logo" id="CIcon" site="https://en.wikipedia.org/wiki/C_(programming_language)"/>
                <Icon img="./PythonLogo.png" alt="Python Logo" id="PythonIcon" site="https://www.python.org/"/>
            </div>
        </div>
    );
}