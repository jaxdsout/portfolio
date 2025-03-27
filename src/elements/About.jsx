import { useNavigate } from "react-router-dom"

function About () {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }
    
    return (

        <div className="mb-12 animator flex flex-col p-7 items-center justify-center">
            <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10" onClick={handleBack}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </div>
            <div className="w-11/12 sm:w-1/2 p-2">
                <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                    <h1 className="raleway-heavy text-center mb-5 text-[2rem]">about me</h1>
                    <p className="mb-3">
                        Hello! I'm a dedicated junior software developer with years of professional experience in crafting solutions to solve problems. My background is primarily in the real estate and construction domains, but I am bringing the same discipline and creativity to my emerging software career.
                    </p>
                    <p className="mb-3">
                        On a mission to expand my knowledge and horizons, I completed a part-time engineering bootcamp at General Assembly in early 2024 while continuing my current job. During the six-month course, I developed an unexpected affinity for creating databases & APIs and the ever-growing power of data. This ultimately led me to earn a certificate in Data Analytics from Google a few months afterward. Both of these programs, along with additional online courses, have refined my skills and gain a deeper understanding of how data and design control the user experience.
                    </p>
                    <p className="mb-3">
                        I have worked on multiple projects utilizing both backend and frontend technologies by the way of numerous frameworks and languages. My skills are strong in JavaScript, Python, and SQL, and I am honing my abilities in each of them every day. I'm committed to growing as a developer and data enthusiast. My current career goal is to leverage my background in relations and project management to find synergistic roles that still push me outside of my comfort zone.
                    </p>
                    <p className="text-center">Based out of Houston, TX</p>
                    <hr className="mt-3 text-white" />
                </div>
            </div>  

                <div className='bg-white/5 rounded-lg mb-12 animator flex flex-row p-5 items-center justify-center text-[3rem] text-white text-nowrap border-[0.05rem] border-white/5'>
        <a className='mr-4' href={"mailto:jaxon.southern@mac.com"}>
          <i className="bi bi-send-fill transition ease-out hover:text-[#eb8242]" title="Email"></i>
        </a>
        <a className='ml-4 mr-4' href={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github transition ease-out hover:text-[#eb8242]" title="GitHub"></i>
        </a>
        <a className='ml-4 mr-4' href={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin transition ease-out hover:text-[#eb8242]" title="LinkedIn"></i>
        </a>
        {/* <a href={"https://misc-jax-0123.s3.us-east-2.amazonaws.com/JaxonSouthernResume.pdf"} target="_blank" rel="noopener noreferrer"> 
                <i className="bi bi-file-earmark-person-fill transition ease-out ml-4 hover:text-[#eb8242]" title="Current Resume"></i>
        </a> */}
      </div>         
        </div>
 
    )
}

export default About