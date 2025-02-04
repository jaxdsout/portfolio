import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [zenMode, setZenMode] = useState(false);

    const handleZenMode = () => {
        if (zenMode) {
            setZenMode(false);
        } else {
            setZenMode(true);
        }
        
    }

    return (
            <div>
                {zenMode ? (
                    <>
                        <div className="container d-flex justify-content-center text-white animator">
                            <p className="zen-notif">You have now activated zen mode.</p>
                            <i onClick={handleZenMode} className="bi bi-peace icon-link icon-link-hover"></i>

                        </div>
                        <div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='container text-container text-center head'>
                            <Link to="/zen/" onClick={handleZenMode}><h1 className='text-white raleway-heavy portfolio'>portfolio</h1></Link>
                            <p className='text-white jersey-25-charted-regular author'>jaxon southern</p>
                        </div>
                        <div className="pb-4 pt-2 d-flex flex-column justify-content-center align-items-center">
                            <div className="tab-bar rounded-4">
                                <Link className='tabs raleway-medium' to="/about/">about</Link>
                                <Link className='tabs raleway-medium' to="/">projects</Link>
                                <Link className='tabs raleway-medium' to="/resume/">resume</Link>
                                <Link className='tabs raleway-medium' to="/contact/">contact</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
    )
}

export default Nav
