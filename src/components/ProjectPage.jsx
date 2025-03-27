import { useNavigate } from "react-router-dom";

function ProjectPage ({ title, children, links, thumbnail }) {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className="mb-12 animator flex flex-col p-7 items-center justify-center">
        <div className="mb-4">
            <button className='ml-4 mr-4 text-white text-[2rem]' onClick={handleBack} target="_blank" href="" rel="noopener noreferrer">
                <i className="bi bi-arrow-left-circle-fill transition ease-out hover:text-[#eb8242]" title="Back"></i>
            </button>
        </div>
        <div className="w-11/12 sm:w-1/2 p-2 min-w-[500px]">
            <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
                <div className="flex flex-row items-start justify-between w-full">            
                    <h3 className="raleway-medium text-[1.2rem] ml-1"> {title} </h3>
                    <div>
                        <a href={links[0]} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-code-slash text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Repository"></i>
                        </a>
                        <a href={links[1]} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-box-arrow-up-right text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Deployed"></i>
                        </a>
                    </div>
                </div>
                <hr className="mt-2 text-white w-full" />
            </div>
            <div className="w-full md:w-1/2 p-2 flex flex-col items-center">
                <div className="relative group inline-block mt-2 active:translate-y-1">
                    <img
                    src={thumbnail}
                    className=" block w-full rounded-2xl drop-shadow-sm transition-opacity duration-300 group-hover:opacity-20"
                    alt="Atlas"
                    />
                    <div 
                    className="cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 text-white text-center rounded-2xl"
                    onDoubleClick={() => window.open(links[0])}
                    onClick={() => window.open(links[0])}
                    >
                    <p className="select-none">{children}</p>
                
                    </div>
                </div>
            
            </div>
            <hr className="mt-3 text-white" />
            </div>
        </div>
    </div>
    )
}

export default ProjectPage