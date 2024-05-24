import { Link } from "react-router-dom"


import ResumePDF from "../images/JaxonSouthernResume.pdf"

function About ({ Resume }) {

    return (
        <div className="text-center justify-content-center">
            <div>
                <p> Because of my experiences in creative arts and historical study, I am driven by analyzing and reevaluating old practices to better understand and synthesize new ideas. On a constant search to find the right field, I have finally found my home in software engineering and data analysis. I am excited to continue developing ideas based on my past roles and to join a team that allows me to explore new fields and industries. </p>
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