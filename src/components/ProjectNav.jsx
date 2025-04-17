import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ProjectNav ({ title, accent, links }) {
    const [hovered, setHovered] = useState(null);
    const navigate = useNavigate();

    const handleBack = () => {
        setTimeout(() => {
            navigate('/');;
        }, 200);
    }

    return (
        <div className="flex flex-row items-center justify-between p-2 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5 w-11/12">
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
            <h3 className="font-ralewayBlack font-black tracking-wider text-[1.2rem] ml-1"> 
                {title} 
            </h3>
            <div className="flex flex-row items-center">
            <a 
                href={links[1]} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: hovered === "repo" ? accent : "white" }}
                className="px-2" 
                onMouseEnter={() => setHovered('repo')} 
                onMouseLeave={() => setHovered(null)} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
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
                className="px-2"
                onMouseEnter={() => setHovered('link')} 
                onMouseLeave={() => setHovered(null)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clip-rule="evenodd" />
                </svg>
            </a>
            </div>
        </div>
    )
}