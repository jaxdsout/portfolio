import { Link } from "react-router-dom"
import resume from "../components/resume.svg"


import ResumePDF from "../images/JaxonSouthernResume.pdf"

function About () {

    return (
        <div className="text-center justify-content-center align-items-center">
            <p> Due to my experiences in historical study and art, I am driven by reevaluating and analyzing old ideas to better understand and synthesize new ideas. Super excited to continue developing ideas based on my past roles and to join a team that allows me to explore new fields and industries. </p>
            <p> Based out of Houston, TX</p>
            <Link to={ResumePDF} target="_blank" rel="noopener noreferrer"> 
                <img src={resume} alt="resume-logo" className="icon" title="Current Resume" />
            </Link>
        </div>
    )
}

export default About