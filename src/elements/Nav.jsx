import { useState } from 'react';

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
            <>
                {zenMode ? (
                    <>
                        <div className="flex flex-col justify-center items-center text-white animator">
                            <p>You have now activated zen mode.</p>
                            <i onClick={handleZenMode} className="bi bi-peace hover:drop-shadow-lg"></i>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col items-center text-white justify-center '>
                            <a href="/zen/" onClick={handleZenMode}><h1 className='raleway-heavy text-[4rem] select-none'>portfolio</h1></a>
                            <p className='jersey-25-charted-regular text-[1.5rem] select-none -mt-2 uppercase'>jaxon southern</p>                      
                    </div>
                )}
            </>
    )
}

export default Nav
