import { useLocation } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import { Link } from 'react-router-dom';


function Tabs () {
    const location = useLocation();
    const basePath = location.pathname.split('/').pop();

    return (
        <div className='flex flex-col items-center justify-center text-white'>
            <a href="/"><h1 className='raleway-heavy text-[4rem] select-none hover:text-white/5'>portfolio</h1></a>
            <p className='jersey-25-charted-regular text-[1.5rem] select-none -mt-2 uppercase'>jaxon southern</p>                      
            <div className='flex flex-row items-center justify-center bg-white text-[#e7a55e] rounded-lg p-2 mt-3'>
                <Link className='pl-2 pr-2 raleway-medium hover:text-white' to="/about">about</Link>
                <Link className='pl-2 pr-2 raleway-medium hover:text-white' to="/">projects</Link>
                <Link className='pl-2 pr-2 raleway-medium hover:text-white' to="/resume">resume</Link>
                <Link className='pl-2 pr-2 raleway-medium hover:text-white' to="/contact">contact</Link>
            </div>  
            <div className='flex flex-row items-center justify-center mt-6'>
                {basePath === '' && <Projects />}
                {basePath === 'about' && <About />}
                {basePath === 'resume' && <Resume />}
                {basePath === 'contact' && <Contact />}
            </div>
        </div>
    )
}

export default Tabs