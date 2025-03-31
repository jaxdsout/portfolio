import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Tabs () {
    const navigate = useNavigate();
    const [touched, setTouched] = useState(null);

    const projs = [
        {"id": 1, "name": "ATLAS", "type": "PROJECT", "color": "#5F85DB"},
        {"id": 2, "name": "SUBSTREAM", "type": "PROJECT", "color": "#a5d294"},
        {"id": 3, "name": "GALLERY", "type": "PROJECT", "color": "#464646"},
        {"id": 4, "name": "ME", "type": "ABOUT", "color": "#eb8242"},
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

    console.log(`bg-[${touched?.color}]`)
    return (
        <div className={`flex flex-col items-center justify-center rounded-full z-10 h-screen`}>
            <div className={`z-20 flex flex-col items-center justify-center absolute h-48 w-48 rounded-full drop-shadow-xl`} style={{ backgroundColor: touched ? touched.color : "white"}}>
                <h1 className={`${touched && "text-white"} text-[#e98f49] text-[5rem] font-ralewayBlack font-black absolute drop-shadow`}>
                    JS
                </h1>
                {touched && (
                    <div className={`flex flex-row items-center justify-center relative bg-white rounded-full px-4 px-2 top-14 drop-shadow-wedge font-ralewayRegular`} style={{ color: touched ? touched.color : "white"}}>
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
                        onTouchStartCapture={() => handleTouch(proj)}
                        onMouseLeave={() => setTouched(null)}
                        onTouchEnd={() => setTouched(null)}
                        onTouchEndCapture={() => setTouched(null)}
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
                            stroke={touched?.id === proj.id ? `${proj.color}` : "white" }
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