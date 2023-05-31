import React from "react";
import Experience from "../components/Experience";
import MySkills from "../components/MySkills";
import Education from "../components/Education";
import Contact from "../components/Contact";

const AboutMe = () => {
    return(
        <div>
            <Experience />
            
            <MySkills />

            <Education />

            
        </div>
    );
}

export default AboutMe;