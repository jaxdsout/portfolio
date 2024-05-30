import { Link } from "react-router-dom"


import ResumePDF from "../images/JaxonSouthernResume.pdf"

function About ({ Resume }) {

    return (
        <div className="text-center justify-content-center">
            <div>
                <p> Because of my experiences in historical study and art, I am driven by reevaluating and analyzing old ideas to better understand and synthesize new ideas. Super excited to continue developing ideas based on my past roles and to join a team that allows me to explore new fields and industries. </p>
                <p> Currently based out of Houston, TX</p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <Link to={ResumePDF} target="_blank" rel="noopener noreferrer"> 
                    <Resume className='icon resume'/>
                </Link>
                <p className="mt-3">Resume</p>
            </div>
        </div>
    )
}

export default About