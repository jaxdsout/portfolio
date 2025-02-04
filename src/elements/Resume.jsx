import { Link } from "react-router-dom"

function Resume () {

    return (
        <div className='flex flex-row items-center justify-center text-center mt-4 animator text-[3rem] text-white text-nowrap'>
            <Link to={"https://warehouse-bkt-0810.s3.us-east-2.amazonaws.com/JaxonSouthernResume-SE.pdf"} target="_blank" rel="noopener noreferrer"> 
                <i className="bi bi-file-earmark-person-fill transition ease-out ml-3 mr-3 hover:text-[#eb8242]" title="Current Resume"></i>
            </Link>
        </div>
    )
}

export default Resume