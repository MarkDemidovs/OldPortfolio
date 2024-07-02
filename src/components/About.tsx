import Person from "./Person";
import Project from "./Project";


export default function About() {
    return (
        <>
            <div id="aboutSection">
                <h3 className="infoMain infoBio">
                    Hello, I’m mark
                </h3>

                <div id="mainText">
                    <p>I’m a 14 year old Software Developer and teacher living in Latvia, born in the United Kingdom.</p>
                    <p>My whole life I have been fascinated by computers, tech and old consoles. My first computer was when I was 5, and I love exploring the inside and outside of computers.</p>
                    <p>I have been coding professionally since 9, but I do have some experience before that at 5. My first ever Programming Language was C++, my 9 year old brain was going crazy at that time.</p>
                    <p>I am currently pursuing a career in Web-Development using the MERN or PERN stack.</p>
                    <p>Many consider me talanted, I have all my life been very good with tech (especially computers) and I have the ability to learn new tech insanely fast, I have repaired many electronics without the knowledge of their operation system - for example projectors.</p>
                    <p>As a hobby, I like coding and learning about new things every day!</p>
                </div>

                <div>
                    <h3 className="infoMain infoBio">
                        People who Inspire me
                    </h3>
                    <div className="personInfo">
                        <div id="robiotDiv">
                            <Person name="Robiot" linkTitle="x.com/robiotz" />
                        </div>

                        <div id="billDiv">
                            <Person name="Bill Gates" linkTitle="Founder of Microsoft" />
                        </div>
                    </div>

                    <h3 className="infoMain" id="projectsMain">
                        Projects
                    </h3>

                    <div id="projectsPage">

                        <div id="PortfolioProject">
                            <Project title="My Portfolio" tags="REACT + TS" content="You're looking at it! This is my portfolio. This was built using React and Typescript and shared across my social media accounts." devPhase="Maintaining" />
                        </div>

                        <div id="LearnProject">
                            <Project title="LearnToCode" tags="REACT + TS + NEXT.JS" content="LearnToCode is a free website built to teach people about coding and relavent Computer Science Topics, fully Open-Source and open for suggestions." devPhase="Development" />
                        </div>

                        <div id="dsaProject">
                            <Project title="DSA.JS" tags="JS + TS" content="dsa.js is a library which creates numberous Data Structure and Algorithm topics into easy-to-use functions or classes." devPhase="Update Incoming" />
                        </div>

                        <div id="creditProject">
                            <Project title="Social Credit Score Project" tags="REACT + TS + Node.js + MongoDB" content="This is an upcoming project, where a person can register themselves and get rated by other people." devPhase="Development" />
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}