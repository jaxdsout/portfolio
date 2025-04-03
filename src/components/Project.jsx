import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Project ({ title, children, links, thumbnail, accent }) {
    const [hovered, setHovered] = useState(null);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleBack = () => {
        setClicked(true); 
        setTimeout(() => {
            navigate('/');;
        }, 200);
    }

    return (
        <div className={`flex flex-col p-7 items-center justify-center transition-opacity duration-300 ${clicked ? "opacity-0" : "opacity-100"}`}>
            <div>
                <button 
                    className='ml-4 mr-4 transition ease-out' 
                    style={{ color: hovered === "back" ? accent : "white" }} 
                    onClick={handleBack} 
                    onMouseEnter={() => setHovered('back')} 
                    onMouseLeave={() => setHovered(null)}
                    target="_blank" 
                    href="" 
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="w-11/12 md:w-1/2 p-1 min-w-[350px] md:min-w-[500px]">
                <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                    <div className="flex flex-row items-center justify-between w-full mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
                        <h3 className="font-ralewayBlack font-black tracking-wider text-[1.2rem] ml-1"> {title} </h3>
                        <div className="flex flex-row items-start">
                            <a 
                                href={links[1]} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: hovered === "repo" ? accent : "white" }} 
                                onMouseEnter={() => setHovered('repo')} 
                                onMouseLeave={() => setHovered(null)} 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 -mt-1 mr-1">
                                    <path 
                                        fillRule="evenodd" clipRule="evenodd" 
                                        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" 
                                        
                                    />
                                </svg>
                            </a>
                            <a 
                                href={links[0]} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: hovered === "link" ? accent : "white" }} 
                                onMouseEnter={() => setHovered('link')} 
                                onMouseLeave={() => setHovered(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <img
                            src={thumbnail}
                            className=" block w-full rounded-2xl drop-shadow-sm transition-opacity duration-300 cursor-pointer mt-2 active:translate-y-1"
                            alt="thumbnail"
                            onDoubleClick={() => window.open(links[0])}
                            onClick={() => window.open(links[0])}
                        />
                    </div>
                    <div className="flex flex-col items-center text-center py-3 px-6 mt-3 bg-black/40 rounded-xl text-sm h-[350px] auto-scrollbar">
                            {children}
                            <hr className="mt-3 mb-3 text-white w-full" />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project