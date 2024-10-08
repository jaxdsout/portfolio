import { Link } from "react-router-dom"
import linkedin from '../components/linkedin.svg'
import github from '../components/github.svg'
import email from '../components/email.svg'

function Contact () {

    return (
      <div className='container text-center mt-3'>
        <Link className='' to={"mailto:jaxon.southern@mac.com"}>
          <img src={email} alt="email" className="icon" title="Email"/>
        </Link>
        <Link className='' to={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="icon" title="Github"/>
        </Link>
        <Link className='' to={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className="icon" title="LinkedIn"/>
        </Link>
        <hr className="mt-4"/>
      </div>
    )
}

export default Contact