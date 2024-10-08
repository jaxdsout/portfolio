import { Link } from "react-router-dom"
import resume from "../components/resume.svg"

function Resume () {

    return (
        <div className='container text-center mt-3'>
            <Link to={"https://warehouse-bkt-0810.s3.us-east-2.amazonaws.com/JaxonSouthernResume-SE.pdf"} target="_blank" rel="noopener noreferrer"> 
                <img src={resume} alt="resume-logo" className="resume" title="Current Resume" />
            </Link>
            <hr className="mt-4"/>
        </div>
    )
}

export default Resume