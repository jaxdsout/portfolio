import { Link } from "react-router-dom"

function Contact () {

    return (
      <div className='text-center mt-4 animator text-[3rem] text-white text-nowrap'>
        <Link className='' to={"mailto:jaxon.southern@mac.com"}>
          <i className="bi bi-send-fill transition ease-out ml-3 mr-3 hover:text-[#eb8242]" title="Email"></i>
        </Link>
        <Link className='' to={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github transition ease-out ml-3 mr-3 hover:text-[#eb8242]" title="GitHub"></i>
        </Link>
        <Link className='' to={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin transition ease-out ml-3 mr-3 hover:text-[#eb8242]" title="LinkedIn"></i>
        </Link>
      </div>
    )
}

export default Contact