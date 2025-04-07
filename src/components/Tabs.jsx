import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Tabs () {
    const navigate = useNavigate();
    const [touched, setTouched] = useState(null);
    const [clicked, setClicked] = useState(null);

    const handleInteraction = (proj) => setTouched(proj);

    const handleClick = (id) => {
        setClicked(true); 
        setTimeout(() => {
            navigate(id !== 4 ? `/proj/${id}` : "/about-me/");
        }, 200);
    }

    const handleEnd = () => setTouched(null);

    const projs = [
        {"id": 1, "name": "ATLAS", "type": "PROJ", "color": "#5F85DB"},
        {"id": 2, "name": "SUBSTREAM", "type": "PROJ", "color": "#a5d294"},
        {"id": 3, "name": "GALLERY", "type": "PROJ", "color": "#464646"},
        {"id": 4, "name": "ME", "type": "ABOUT", "color": "#eb8242"},
    ]

    return (
        <div className={`flex flex-col items-center justify-center z-10 h-screen transition-opacity duration-300 ${clicked ? "opacity-0" : "opacity-100"}`}>
            <div className={`z-20 flex flex-col items-center justify-center absolute h-[11rem] w-[11rem] rounded-full drop-shadow-wedge`} style={{ backgroundColor: touched ? touched.color : "rgba(207, 83, 0, 0.3)" }}>
                <h1 
                    className={`text-[4rem] font-ralewayBlack font-black absolute`}
                    style={{ color: touched ? "white" : "#e7a55e", mixBlendMode: touched ? "normal" : "overlay" }}
                >
                    JS
                </h1>
                {touched && (
                    <p className='relative bg-white px-2 font-ralewayRegular drop-shadow-wedge rounded-full font-normal inline-block text-[.80rem] top-10' style={{ color: touched ? touched.color : "white"}}>        
                        <span className='mr-1'>{touched?.type}</span>  
                        <span className={`font-black `}>{touched?.name}</span>
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
                        height="180"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`cursor-pointer animate-glow drop-shadow-wedge`}
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
                            d="M 30 80 Q 95 10 160 80 M"
                            stroke={touched?.id === proj.id ? `${proj.color}` : "rgba(207, 83, 0, 0.3)" }
                            strokeWidth="48"
                            fill="transparent"
                            strokeLinecap="round"
                            className='drop-shadow-wedge animate-bounce'
                            onMouseEnter={() => handleInteraction(proj)}
                            onMouseLeave={handleEnd}
                            onTouchStart={() => handleInteraction(proj)}
                            onTouchEnd={handleEnd}
                            onClick={() => handleClick(proj.id)}
                            style={{ 
                                animationPlayState: touched ? "paused" : "running",
                            }}
                        />
                    </svg>
                ))}
            </div>
        </div>
    )
}

export default Tabs