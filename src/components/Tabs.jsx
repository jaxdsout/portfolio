import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Tabs () {
    const location = useLocation();
    const navigate = useNavigate();
    const [touched, setTouched] = useState(null);

    const projs = [
        {"id": 1, "name": "ATLAS", "type": "PROJECT"},
        {"id": 2, "name": "SUBSTREAM", "type": "PROJECT"},
        {"id": 3, "name": "GALLERY", "type": "PROJECT"},
        {"id": 4, "name": "ME", "type": "ABOUT"},
    ]

    const handleTouch = (proj) => {
        setTouched(proj);
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
            <div className={`z-20 flex flex-col items-center justify-center absolute h-48 w-48 rounded-full drop-shadow-xl
                ${touched?.id === 1 ? "bg-[#5F85DB]" 
                    : touched?.id === 2 ? "bg-[#a5d294]" 
                    : touched?.id === 3 ? "bg-[#464646]" 
                    : touched?.id === 4 ? "bg-[#eb8242]" 
                    : "bg-white"}
                `}
            >
                <h1 className={`${touched && "text-white"} text-[#e98f49] text-[5rem] font-ralewayBlack font-black absolute drop-shadow`}>
                    JS
                </h1>
                {touched && (
                    <div className={`flex flex-row items-center justify-center relative bg-white rounded-full px-4 px-2 top-14 drop-shadow-wedge font-ralewayRegular ${touched?.id === 1 ? "text-[#5F85DB]" 
                        : touched?.id === 2 ? "text-[#a5d294]" 
                        : touched?.id === 3 ? "text-[#464646]" 
                        : touched?.id === 4 ? "text-[#eb8242]" 
                        : "text-white"}`}
                    >
                        <p className='text-[0.5rem] mt-0.5 font-ralewayRegular font-light mr-1'>        
                            {touched?.type}  
                        </p>
                        <p className={`text-[1rem] font-black`}>
                            {touched?.name}
                        </p>
                    </div>
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
                        onMouseEnter={() => handleTouch(proj)}
                        onTouchStart={() => handleTouch(proj)}
                        onTouchStartCapture={() => handleClick(proj.id)}
                        onMouseLeave={() => setTouched(null)}
                        onTouchEnd={() => setTouched(null)}
                        onClick={() => handleClick(proj.id)}
                        className={`cursor-pointer animate-glow`}
                        style={{ 
                            animationPlayState: touched ? "paused" : "running", 
                            transform: 
                                index === 1 ? "rotate(45deg)" : 
                                index === 2 ? "rotate(225deg)" :
                                index === 3 ? "rotate(135deg)" : 
                                "rotate(315deg)",       
                        }}
                        
                    >
                        <path
                            d="M 10 80 Q 95 10 180 80"
                            stroke={touched?.id === proj.id 
                                ? proj.id === 1 ? "#5F85DB" 
                                : proj.id === 2 ? "#a5d294" 
                                : proj.id === 3 ? "#464646" 
                                : proj.id === 4 ? "#eb8242" 
                                : "white" 
                                : "white"
                            }
                            strokeWidth="48"
                            fill="transparent"
                            strokeLinecap="round"
                            className='drop-shadow-wedge'
                            
                        />
                    </svg>
                ))}
            </div>
        </div>
    )
}

export default Tabs