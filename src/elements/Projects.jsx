import GalleryThumb from "../images/gallery.png";
import SubstreamThumb from "../images/substream.png";
import QwiklokThumb from "../images/qwiklok.png";
import AtlasThumb from "../images/atlas.png";
import SimonThumb from "../images/simon.png";
import ValerieThumb from "../images/valerie.png";

function Projects() {
  
  return (
    <div className="mb-12 animator flex flex-col p-7 items-center justify-center">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <div className="relative group inline-block mt-2">
            <img
              src={AtlasThumb}
              className=" block w-full rounded-2xl drop-shadow-sm transition-opacity duration-300 group-hover:opacity-20"
              alt="Atlas"
            />
            <div 
              className="cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 text-white text-center rounded-2xl"
              onDoubleClick={() => window.open('https://aptatlas.com/')}
              onClick={() => window.open('https://aptatlas.com/')}
            >
              <p className="select-none">CRM & list-making platform for apartment locators</p>
              <div className="text-[4rem] text-white">
                <i className="devicon-django-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-redux-original"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
            <div className="flex flex-row items-start justify-between w-full">            
              <h3 className="raleway-medium text-[1.2rem] ml-1"> atlas </h3>
              <div>
                <a href="https://github.com/jaxdsout/plotter" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-code-slash text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Repository"></i>
                </a>
                <a href="https://aptatlas.com/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Deployed"></i>
                </a>
              </div>
            </div>
            <hr className="mt-2 text-white w-full" />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-2">
          <div className="relative group inline-block mt-2">
            <img
              src={GalleryThumb}
              className="block w-full rounded-2xl shadow-sm transition-opacity duration-300 group-hover:opacity-20"
              alt="Gallery"
            />
            <div 
              className="cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 text-white text-center rounded-2xl"
              onDoubleClick={() => window.open('https://gallery-site.onrender.com')}
              onClick={() => window.open('https://gallery-site.onrender.com')}
            >
              <p className="select-none">Bid-based storefront for fictitious art gallery.</p>
              <div className="text-[4rem] text-white">
                <i className="devicon-django-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-postgresql-plain"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
            <div className="flex flex-row items-start justify-between w-full">
              <h3 className="raleway-medium text-[1.2rem] ml-1"> the gallery </h3>
              <div>
                <a href="https://github.com/jaxdsout/gallery-site" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-code-slash text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Repository"></i>
                </a>
                <a href="https://gallery-site.onrender.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Deployed"></i>
                </a>
              </div>
            </div>
            <hr className="mt-2 text-white w-full" />
          </div>

        </div>
      </div> 
      
      {/* End of first row */}

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <div className="relative group inline-block mt-2">
            <img
              src={SubstreamThumb}
              className="block w-full rounded-2xl shadow-sm transition-opacity duration-300 group-hover:opacity-20"
              alt="Substream"
            />
            <div 
              className="cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 text-white text-center rounded-2xl"
              onDoubleClick={() => window.open('https://substream-xmo6.onrender.com/')}
              onClick={() => window.open('https://substream-xmo6.onrender.com/')}
            >
              <p className="select-none">Querier for content streaming locations.</p>
              <div className="text-[4rem] text-white">
                <i className="devicon-react-original"></i>
                <i className="devicon-axios-plain"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
            <div className="flex flex-row items-start justify-between w-full">            
              <h3 className="raleway-medium text-center text-[1.2rem] ml-1"> substream </h3>
              <div>
                <a href="https://github.com/jaxdsout/substream" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-code-slash text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Repository"></i>
                </a>
                <a href="https://substream-xmo6.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Deployed"></i>
                </a>
              </div>
            </div>
            <hr className="mt-2 text-white w-full" />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-2">
          <div className="relative group inline-block mt-2">
            <img
              src={ValerieThumb}
              className="block w-full rounded-2xl shadow-sm transition-opacity duration-300 group-hover:opacity-20"
              alt="Valerie"
            />
            <div 
              className="cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 text-white text-center rounded-2xl"
              onDoubleClick={() => window.open('https://valeriesouthern.com/')}
              onClick={() => window.open('https://valeriesouthern.com/')}
            >
              <p className="select-none">Personalized real estate agent website with custom webform</p>
              <div className="text-[4rem] text-white">
                <i className="devicon-react-original"></i>
                <i className="devicon-django-plain"></i>
                <i className="devicon-tailwindcss-original"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
            <div className="flex flex-row items-start justify-between w-full">  
              <h3 className="raleway-medium text-center text-[1.2rem] ml-1"> valerie </h3>
              <div>
                <a href="https://valeriesouthern.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Deployed"></i>
                </a>
              </div>
            </div>
            <hr className="mt-2 text-white w-full" />
          </div>
        </div>
      </div> 
      
      {/* End of second row */}

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <div className="relative group inline-block mt-2">
            <img
              src={SimonThumb}
              className="block w-full rounded-2xl shadow-sm transition-opacity duration-300 group-hover:opacity-20"
              alt="Simon"
            />
            <div 
              className="cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 text-white text-center rounded-2xl"
              onDoubleClick={() => window.open('https://jaxdsout.github.io/simon/')}
              onClick={() => window.open('https://jaxdsout.github.io/simon/')}
            >
              <p className="user-select-none">Modern interpretation of classic memory game.</p>
              <div className="text-[4rem] text-white">
                <i className="devicon-javascript-plain"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
            <div className="flex flex-row items-start justify-between w-full">             
              <h3 className="raleway-medium text-center text-[1.2rem] ml-1"> simon </h3>
              <div>
                <a href="https://github.com/jaxdsout/simon" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-code-slash text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Repository"></i>
                </a>
                <a href="https://jaxdsout.github.io/simon/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Deployed"></i>
                </a>
              </div>
            </div>
            <hr className="mt-2 text-white w-full" />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-2">
          <div className="relative group inline-block mt-2">
            <img
              src={QwiklokThumb}
              className="block w-full rounded-2xl shadow-sm transition-opacity duration-300 group-hover:opacity-20"
              alt="Qwiklok"
            />
            <div 
              className="cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 text-white text-center rounded-2xl"
              onDoubleClick={() => window.open('https://qwiklok.onrender.com/')}
              onClick={() => window.open('https://qwiklok.onrender.com/')}
            >
              <p className="user-select-none">Time-logger with admin & employee endpoints.</p>
              <div className="text-[4rem] text-white">
                <i className="devicon-mongodb-plain"></i>
                <i className="me-2 devicon-express-original"></i>
                <i className="devicon-nodejs-plain"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 items-start p-3 rounded-lg bg-white/5 text-white border-[0.05rem] border-white/5">
            <div className="flex flex-row items-start justify-between w-full">             
              <h3 className="raleway-medium text-center text-[1.2rem] ml-1"> qwiklok </h3>
              <div>
                <a href="https://github.com/jaxdsout/qwiklok" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-code-slash text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Repository"></i>
                </a>
                <a href="https://qwiklok.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right text-[1.2rem] text-nowrap ml-2 mr-2 hover:text-[#eb8242] hover:drop-shadow-lg" title="Deployed"></i>
                </a>
              </div>
            </div>
            <hr className="mt-2 text-white w-full" />
          </div>
        </div>
      </div> 
      {/* End of third row */}
    </div>
  );
}

export default Projects;
