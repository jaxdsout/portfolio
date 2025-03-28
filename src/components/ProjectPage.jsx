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
                <i className="bi bi-arrow-left-circle-fill transition ease-out hover:text-[#c3c3c3]" title="Back"></i>
            </button>
        </div>
        <div className="w-11/12 sm:w-1/2 p-4 min-w-[350px] md:min-w-[500px]">
            <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
                    <div className="flex flex-row items-start justify-between w-full">            
                        <h3 className="font-ralewayBlack font-black tracking-wider text-[1.2rem] ml-1"> {title} </h3>
                        <div>
                            <a href={links[0]} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-file-code-fill text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#c3c3c3] hover:drop-shadow-lg" title="Repository"></i>
                            </a>
                            <a href={links[1]} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-arrow-up-right-square-fill text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#c3c3c3] hover:drop-shadow-lg" title="Deployed"></i>
                            </a>
                        </div>
                    </div>
                    <hr className="mt-2 text-white w-full" />
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
                <div className="flex flex-col items-center">
                    {children}
                </div>
            <hr className="mt-3 text-white" />
            </div>
        </div>
    </div>
    )
}

export default ProjectPage