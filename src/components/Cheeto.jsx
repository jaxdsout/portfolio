import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';


function Cheeto() {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);
    const [clicked, setClicked] = useState(null);
    const touched = useRef(null);

    const handleHover = (proj) => {
        touched.current = proj;
        setHovered(proj);
    }

    const handleTouch = (proj) => {
        if (touched.current?.id === proj.id) {
            handleClick(proj.id)
        } else {
            touched.current = proj;
            setHovered(proj)
        }
    }

    const handleClick = (proj) => {
        if (touched.current?.id === proj.id) {
            const id = proj.id;
            setClicked(id);
            setTimeout(() => {
                navigate(id !== 4 ? `/proj/${id}` : "/about-me/");
            }, 200)
        }
    }

    const handleEnd = () => {
        touched.current = null;
        setHovered(null);
    }

    const projs = [
        { "id": 1, "name": "ATLAS", "type": "PROJ", "color": "#5F85DB" },
        { "id": 2, "name": "SUBSTREAM", "type": "PROJ", "color": "#a5d294" },
        // {"id": 3, "name": "THEGALLERY", "type": "PROJ", "color": "#464646"},
        { "id": 4, "name": "ABOUT ME", "type": "ABOUT", "color": "#eb8242" },
    ]

    return (
        <div className={`fixed top-0 left-0 flex flex-col items-center justify-center z-10 h-screen w-screen transition-opacity duration-300 ${clicked ? "opacity-0" : "opacity-100"}`}>
            <h1
                className={`flex flex-col items-center justify-center z-20 text-[4rem] font-ralewayBlack font-black absolute h-[11rem] w-[11rem] rounded-full hover:drop-shadow-wedge`}
                style={{ color: hovered ? "white" : "#e7a55e", mixBlendMode: hovered ? "normal" : "lighten", backgroundColor: hovered ? hovered.color : "rgba(207, 83, 0, 0.3)", transform: clicked && "translateY(-3px)" }}
            >
                JS
            </h1>

            <div
                className={`grid grid-cols-2 relative z-20 animate-spin-slow`}
                style={{ animationPlayState: hovered ? "paused" : "running" }}
            >
                {projs.map((proj, index, ref) => {
                    const rotation =
                        index === 1 ? 45 :
                            index === 2 ? 225 :
                                // index === 3 ? 135 : 
                                315;

                    const pathId = `curve-${proj.id}`;

                    return (
                        <div key={proj.id} className="relative w-[190px] h-[180px] flex items-center justify-center">
                            <svg
                                width="190"
                                height="160"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer animate-glow drop-shadow-wedge"
                                onMouseEnter={() => handleHover(proj)}
                                onMouseLeave={handleEnd}
                                onTouchStart={() => handleTouch(proj)}
                                onTouchEnd={handleEnd}
                                onClick={() => handleClick(proj)}
                                style={{
                                    animationPlayState: hovered ? "paused" : "running",
                                    transform: `rotate(${rotation}deg) ${clicked === proj.id ? "translateY(-3px)" : ""}`,
                                }}
                            >
                                <path
                                    d="M 30 80 Q 95 10 160 80 M"
                                    id={pathId}
                                    stroke={hovered?.id === proj.id ? proj.color : "rgba(207, 83, 0, 0.3)"}
                                    strokeWidth="48"
                                    fill="transparent"
                                    strokeLinecap="round"
                                    className="drop-shadow-wedge animate-bounce"
                                    style={{ animationPlayState: hovered ? "paused" : "running" }}
                                />
                                {!hovered ? (
                                    <text
                                        fill={`${hovered ? "white" : "#e7a55e"}`}
                                        fontSize="18"
                                        textAnchor="middle"
                                        className='animate-slow-fade opacity-100'
                                        style={{
                                            letterSpacing: "0.2em", fontWeight: "700",
                                            mixBlendMode: hovered ? "normal" : "lighten",
                                        }}
                                    >
                                        <textPath
                                            href={`#${pathId}`}
                                            startOffset="50%"
                                            alignmentBaseline="middle"
                                        >
                                            {proj.name}
                                        </textPath>
                                    </text>
                                ) : (
                                    <text
                                        fill="white"
                                        fontSize="18"
                                        textAnchor="middle"
                                        className=''
                                        style={{
                                            opacity: hovered?.id === proj.id ? "100%" : '0%',
                                            letterSpacing: "0.2em", fontWeight: "700",
                                        }}
                                    >
                                        <textPath
                                            href={`#${pathId}`}
                                            startOffset="50%"
                                            alignmentBaseline="middle"
                                        >
                                            {hovered.name}
                                        </textPath>
                                    </text>
                                )}

                            </svg>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cheeto