import { Link } from "react-router-dom"

function Resume () {

    return (
        <div className='container text-center mt-4'>
            <Link to={"https://warehouse-bkt-0810.s3.us-east-2.amazonaws.com/JaxonSouthernResume-SE.pdf"} target="_blank" rel="noopener noreferrer"> 
                <i className="bi bi-file-earmark-person-fill dom-icon" title="Current Resume"></i>
            </Link>
        </div>
    )
}

export default Resume