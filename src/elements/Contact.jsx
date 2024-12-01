import { Link } from "react-router-dom"

function Contact () {

    return (
      <div className='container text-center mt-4 animator'>
        <Link className='' to={"mailto:jaxon.southern@mac.com"}>
          <i className="bi bi-send-fill dom-icon" title="Email"></i>
        </Link>
        <Link className='' to={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github dom-icon" title="GitHub"></i>
        </Link>
        <Link className='' to={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin dom-icon" title="LinkedIn"></i>
        </Link>
      </div>
    )
}

export default Contact