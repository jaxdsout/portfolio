import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Resume from "./Resume"
import { useLocation, Link } from 'react-router-dom';

function Nav() {
    const location = useLocation(); 
    const basePath = location.pathname.split('/').pop();

  return (
    <div className="p-4 d-flex flex-column justify-content-center align-items-center">
        <div className="tab-bar rounded-4">
            <Link className='tabs raleway-medium' to="/about">about</Link>
            <Link className='tabs raleway-medium' to="/projects">projects</Link>
            <Link className='tabs raleway-medium' to="/resume">resume</Link>
            <Link className='tabs raleway-medium' to="/contact">contact</Link>
        </div>
        <div>
            {basePath === 'about' && <About />}
            {basePath === 'projects' && <Projects />}
            {basePath === 'resume' && <Resume />}
            {basePath === 'contact' && <Contact />}
        </div>
    </div>
    )
}

export default Nav
