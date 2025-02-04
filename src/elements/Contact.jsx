import { Link } from "react-router-dom"

function Contact () {

    return (
      <div className='mb-12 animator flex flex-row p-7 items-center justify-center text-[3rem] text-white text-nowrap'>
        <a className='mr-4' href={"mailto:jaxon.southern@mac.com"}>
          <i className="bi bi-send-fill transition ease-out hover:text-[#eb8242]" title="Email"></i>
        </a>
        <a className='ml-4 mr-4' href={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github transition ease-out hover:text-[#eb8242]" title="GitHub"></i>
        </a>
        <a className='ml-4' href={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin transition ease-out hover:text-[#eb8242]" title="LinkedIn"></i>
        </a>
      </div>
    )
}

export default Contact