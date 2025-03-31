import { useNavigate } from "react-router-dom"

function About () {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }
    
    return (

        <div className="animate-fade-in mb-12 flex flex-col p-7 items-center justify-center">
            <div className="mb-4">
                <button className='ml-4 mr-4 text-white text-[2rem]' onClick={handleBack} target="_blank" href="" rel="noopener noreferrer">
                    <i className="bi bi-arrow-left-circle-fill transition ease-out hover:text-[#c7713c]" title="Back"></i>
                </button>
            </div>
            <div className="w-11/12 sm:w-1/2 p-2">
                <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                    <div className="flex flex-col mt-3 mb-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
                        <div className="flex flex-row items-start justify-between w-full">            
                            <h3 className="font-ralewayBlack font-black tracking-wider text-[1.2rem] ml-1"> ABOUT ME </h3>                        
                        </div>
                        <hr className="mt-2 text-white w-full" />
                    </div>
                    <div className="px-6">
                        <p className="mb-3">
                            Hello! I'm a junior software engineer with years of professional experience crafting solutions to solve problems outside of tech. In every job, my approach has been to be as efficient as possible while still tailoring my solutions to each client. My background is primarily in the real estate and construction domains, but I am bringing the same discipline and creativity to my emerging software career.
                        </p>
                        <p className="mb-3">
                            On a mission to expand my knowledge and horizons, I completed a part-time engineering bootcamp at General Assembly in early 2024 while continuing my current job as a real-estate agent. During the six-month course, I developed an unexpected affinity for creating databases and APIs, as well as a deep appreciation for the ever-growing power of data. This ultimately led me to earn a certificate in Data Analytics from Google a few months later. Since then, I have strengthened my foundation in both web and systems languages through online courses.
                        </p>
                        <p className="mb-5">
                            I have worked with multiple tech stacks, giving me extensive exposure to various backend and frontend technologies. My skills are strong in JavaScript, Python, and SQL, and I am continuously honing my abilities in each of them. However, lately, I have been learning C++ and Rust to gain a deeper understanding of the entire spectrum of software development. I am committed to growing as an engineer and data enthusiast, and I truly aspire to make this career change the last one. My current goal is to leverage my background in relationship management and project management to find synergistic roles that challenge me and push me beyond my comfort zone.
                        </p>
                        <p className="text-center">Based out of Houston, TX</p>

                    </div>
                    <hr className="mt-3 text-white" />
                </div>
            </div>  
            <div className='bg-white/5 rounded-lg mb-12 animator flex flex-row p-5 items-center justify-center text-[3rem] text-white text-nowrap border-[0.05rem] border-white/5'>
                <a className='mr-4' href={"mailto:jaxon.southern@mac.com"}>
                    <i className="bi bi-send-fill transition ease-out hover:text-[#c7713c]" title="Email"></i>
                </a>
                <a className='ml-4 mr-4' href={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github transition ease-out hover:text-[#c7713c]" title="GitHub"></i>
                </a>
                <a className='ml-4 mr-4' href={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin transition ease-out hover:text-[#c7713c]" title="LinkedIn"></i>
                </a>
            </div>         
        </div>
 
    )
}

export default About