import { Link } from "react-router-dom"


import ResumePDF from "../images/JaxonSouthernResume.pdf"

function About ({ Resume }) {

    return (
        <div className="text-center justify-content-center">
            <div>
                <p> because of my experiences in creative arts and historical study, I am propelled by analyzing and reevaluating old practices to better understand and synthesize new ideas. on a constant search to find the right field, I've finally landed in my right home with software engineering and data analysis. I am excited to continue developing ideas based on past roles and join a team which allows me to explore new fields and industries. </p>
                <p> currently based out of houston, tx</p>
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