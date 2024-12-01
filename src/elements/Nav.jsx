import { Link } from 'react-router-dom';

function Nav() {

  return (
        <div className="pb-4 pt-2 d-flex flex-column justify-content-center align-items-center">
            <div className="tab-bar rounded-4">
                <Link className='tabs raleway-medium' to="/about/">about</Link>
                <Link className='tabs raleway-medium' to="/">projects</Link>
                <Link className='tabs raleway-medium' to="/resume/">resume</Link>
                <Link className='tabs raleway-medium' to="/contact/">contact</Link>
            </div>
        </div>
    )
}

export default Nav
