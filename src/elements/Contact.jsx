import { Link } from "react-router-dom"

function Contact ({Email, GitHub, LinkedIn}) {

    return (
        <div className='container text-center'>
                <Link className='' to={"mailto:jaxon.southern@mac.com"}>
                  <Email className='icon'/>
                </Link>

                <Link className='' to={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
                  <GitHub className='icon'/>
                </Link>

                <Link className='' to={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
                  <LinkedIn className='icon'/>
                </Link>
        </div>
    )
}

export default Contact