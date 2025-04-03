import { useNavigate } from "react-router-dom"
import { useState } from "react";

function About () {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleBack = () => {
        setClicked(true); 
        setTimeout(() => {
            navigate('/');;
        }, 200);
    }
    
    return (

        <div className={`transition-opacity duration-300 ${clicked ? "opacity-0" : "opacity-100"} mb-12 flex flex-col p-7 items-center justify-center`}>
        <div className="mb-4">
            <button className='ml-4 mr-4 text-white text-[2rem]' onClick={handleBack} target="_blank" href="" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 hover:text-[#c7713c]">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <div className="w-11/12 sm:w-1/2 p-2 rounded-lg">
            <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                <div className="flex flex-col mt-3 mb-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
                    <h3 className="font-ralewayBlack font-black tracking-wider text-[1.2rem] ml-1"> ABOUT ME </h3>                        
                    <hr className="mt-2 text-white w-full" />
                </div>
                <div className="px-4 auto-scrollbar h-[500px]">
                    <p className="mb-3">
                        Hello! I'm a junior software engineer with years of professional experience crafting solutions to solve problems outside of tech. In every job, my approach has been to be as efficient as possible while still tailoring my solutions to each client. My background is primarily in the real estate and construction domains, but I am bringing the same discipline and creativity to my emerging software career.
                        <br></br>
                        <br></br>
                        On a mission to expand my knowledge and horizons, I completed a part-time engineering bootcamp at General Assembly in early 2024 while continuing my current job as a real-estate agent. During the six-month course, I developed an unexpected affinity for creating databases and APIs, as well as a deep appreciation for the ever-growing power of data. This ultimately led me to earn a certificate in Data Analytics from Google a few months later. Since then, I have strengthened my foundation in both web and systems languages through online courses.
                        <br></br>
                        <br></br>
                        I have worked with multiple tech stacks, giving me extensive exposure to various backend and frontend technologies. My skills are strong in JavaScript, Python, and SQL, and I am continuously honing my abilities in each of them. However, lately, I have been learning C++ and Rust to gain a deeper understanding of the entire spectrum of software development. I am committed to growing as an engineer and data enthusiast, and I truly aspire to make this career change the last one. My current goal is to leverage my background in relationship management and project management to find synergistic roles that challenge me and push me beyond my comfort zone.
                        <br></br>
                        <br></br>
                        <span className="text-center">Based out of Houston, TX</span>
                    </p>
                    <hr className="mt-3 text-white" />
                </div>
            
            </div>
        </div>  
            <div className='bg-white/5 rounded-lg animator flex flex-row p-6 items-center justify-center text-white text-nowrap border-[0.05rem] border-white/5'>
                <a className='mr-4' href={"mailto:jaxon.southern@mac.com"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-send-fill hover:text-[#c7713c]" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                    </svg>
                </a>
                <a className='ml-4 mr-4' href={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-github hover:text-[#c7713c]" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </a>
                <a className='ml-4' href={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-linkedin hover:text-[#c7713c]" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                </a>
            </div>         
        </div>
 
    )
}

export default About