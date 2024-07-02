import Contact from "./components/Contact";

export default function Contacts() {
    return (
        <div id="contactsPage">
            <h1 id="contactsMain">Contact Me</h1>

            <div className="contactsInfo">
                <div className="inliner">
                <Contact type="Email"  forward="markdemidovs@proton.me"/>
                </div>
                <Contact type="Twitter" forward="x.com/@markdemidovs"/>
                
                <Contact type="Youtube" forward="@marks_shot"/>
                <Contact type="Discord" forward="marks_shot"/>
            </div>
        </div>
    );
}