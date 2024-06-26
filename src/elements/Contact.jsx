import { Link } from "react-router-dom"
import linkedin from '../components/linkedin.svg'
import github from '../components/github.svg'
import email from '../components/email.svg'

function Contact () {

    return (
        <div className='container text-center'>
                <Link className='' to={"mailto:jaxon.southern@mac.com"}>
                  <img src={email} alt="email" className="icon"/>
                </Link>

                <Link className='' to={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="github" className="icon"/>
                </Link>

                <Link className='' to={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" className="icon"/>
                </Link>
        </div>
    )
}

export default Contact