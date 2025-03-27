import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Tabs () {
    const location = useLocation();
    const navigate = useNavigate();
    const [touched, setTouched] = useState(null);

    const projs = [
        {"id": 1, "name": "ATLAS", "type": "project"},
        {"id": 2, "name": "SUBSTREAM", "type": "project"},
        {"id": 3, "name": "GALLERY", "type": "project"},
        {"id": 4, "name": "ME", "type": "about"},
    ]

    const handleTouch = (id) => {
        setTouched(id);
    }

    const handleClick = (id) => {
        if (id !== 4) {
            navigate(`/proj/${id}`);
        } else {
            navigate('/about-me/')
        }
    }
    return (
        <div className={`flex flex-col items-center justify-center rounded-full z-10 h-screen`}>
            <div className={`z-20 flex flex-col items-center justify-center absolute h-48 w-48 rounded-full drop-shadow-xl text-center ${touched ? "bg-[#ffcf9b]" : "bg-white"}`}>
                <h1 className='text-[#e98f49] text-[5rem] raleway-heavy absolute ml-2 mb-6'>JS</h1>
                {touched && (
                    <p className="bg-[#e98f49] rounded-full text-white px-3 relative top-12 text-[0.75rem] mb-2"> 
                        {touched && <span className='text-[0.5rem] text-'> {projs.find((proj) => proj.id === touched)?.type.toLocaleUpperCase()} </span>}
                        {projs.find((proj) => proj.id === touched)?.name}
                    </p>
                )}          
            </div>
            <div 
                className={`grid grid-cols-2 relative z-20 animate-spin-slow`}
                style={{ animationPlayState: touched ? "paused" : "running" }}
            >
                {projs.map((proj, index) => (
                    <svg
                        key={proj.id}
                        width="190"
                        height="190"
                        xmlns="http://www.w3.org/2000/svg"
                        onMouseEnter={() => handleTouch(proj.id)}
                        onMouseLeave={() => setTouched(null)}
                        onClick={() => handleClick(proj.id)}
                        className={`cursor-pointer drop-shadow-xl shadow-[#e7a55e]`}
                        style={{ animationPlayState: touched ? "paused" : "running", transform: index === 1 ? "rotate(45deg)" : 
                            index === 2 ? "rotate(225deg)" :
                            index === 3 ? "rotate(135deg)" : "rotate(315deg)",}}
                    >
                        <path
                            d="M 10 80 Q 95 10 180 80"
                            stroke={touched === proj.id ? "#ffcf9b" : "white"}
                            strokeWidth="48"
                            fill="transparent"
                            strokeLinecap="round"
                        />
                    </svg>
                ))}
            </div>
        </div>
        // <div className='flex flex-col items-center justify-center text-white'>
        //     <div className='flex flex-col items-center justify-center'>
        //         <a href="/"><h1 className='raleway-heavy text-[4rem] select-none hover:text-white/5'>portfolio</h1></a>
        //         <p className='jersey-25-charted-regular text-[1.5rem] select-none -mt-2 uppercase'>jaxon southern</p>                      
        //         <div className='flex flex-row items-center justify-between bg-white text-[#e7a55e] rounded-lg p-2 mt-3'>
        //             <Link className='pl-4 pr-2 raleway-medium hover:text-white' to="/about">about</Link>
        //             <Link className='pl-2 pr-2 raleway-medium hover:text-white' to="/">projects</Link>
        //             <Link className='pl-2 pr-4 raleway-medium hover:text-white' to="/contact">contact</Link>
        //         </div>  
        //     </div>
        //     <div className='flex flex-row items-center justify-center mt-6'>
        //         {basePath === '' && <Projects />}
        //         {basePath === 'about' && <About />}
        //         {basePath === 'contact' && <Contact />}
        //     </div>
        // </div>
    )
}

export default Tabs