import { Link } from "react-router-dom"

import GalleryThumb from "../images/gallery.png"
import SubstreamThumb from "../images/substream.png"
import QwiklokThumb from "../images/qwiklok.png"
import PlotterThumb from "../images/plotter.png"
import SimonThumb from "../images/simon.png"
import repo_icon from "../components/code.svg"
import live_icon from "../components/link.svg"
import django_icon from "../components/django-icon.svg"
import react_icon from "../components/react.svg"

function Projects ({ LiveLink, Repo }) {

    return (
      <div className="container my-2">
        <div className="row">
        <div className="col-12 col-md-6 p-2">
            <div className="thumbnail-container">
              <img 
                src={PlotterThumb} 
                className="rounded img-fluid w-100" 
                alt="img"
              />
              <div className="description p-3 text-center rounded">
              <p>CRM & list-making platform for apartment locators</p>
              <div>
                <i class="prog-icon devicon-django-plain"></i>
                <i class="prog-icon devicon-react-original"></i>
                <i className="prog-icon devicon-redux-original"></i>
                </div>
            </div>
          </div>
            <div className="d-flex justify-content-between mt-3 align-items-baseline">
              <h3 className="raleway-medium text-center title"> plotter </h3>
              <div>
                <Link to="https://github.com/jaxdsout/plotter" target="_blank" rel="noopener noreferrer"> 
                  <img src={repo_icon} alt="repo_icon" className="sub-icon" title="Repository"/>
                </Link>
                <Link to="https://plotter-w3vt.onrender.com/#/home/" target="_blank" rel="noopener noreferrer"> 
                  <img src={live_icon} alt="live_icon" className="sub-icon" title="Deployed"/>
                </Link>
              </div>
            </div>
            <hr className="mt-3"/>
          </div>
          <div className="col-12 col-md-6 p-2">
            <div className="thumbnail-container">
              <img 
                src={GalleryThumb} 
                className="rounded img-fluid w-100" 
                alt="img"
              />
              <div className="description p-3 text-center rounded">
              <p>Bid-based storefront for fictitious art gallery.</p>
              <div>
                <i class="prog-icon devicon-django-plain"></i>
                <i class="prog-icon devicon-react-original"></i>
                <i class="prog-icon devicon-postgresql-plain"></i>
                </div>
            </div>
          </div>
            <div className="d-flex justify-content-between mt-3 align-items-baseline">
              <h3 className="raleway-medium text-center title"> the gallery </h3>
              <div>
                <Link to="https://github.com/jaxdsout/gallery-site" target="_blank" rel="noopener noreferrer"> 
                  <img src={repo_icon} alt="repo_icon" className="sub-icon" title="Repository"/>
                </Link>
                <Link to="https://gallery-site.onrender.com" target="_blank" rel="noopener noreferrer"> 
                  <img src={live_icon} alt="live_icon" className="sub-icon" title="Deployed"/>
                </Link>
              </div>
            </div>
            <hr className="mt-3"/>
          </div>
      <div className="row">
      <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img src={SubstreamThumb} className="rounded img-fluid w-100" alt="img"></img>
            <div className="description p-3 text-center rounded">
            <p>Querier for content streaming locations.</p>
            <div>
              <i class="prog-icon devicon-react-original"></i>
              <i class="prog-icon devicon-axios-plain"></i>
            </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline">
            <h3 className="raleway-medium text-center title"> substream </h3>
            <div>
              <Link to="https://github.com/jaxdsout/substream" target="_blank" rel="noopener noreferrer"> 
                <img src={repo_icon} alt="repo_icon" className="sub-icon" title="Repository"/>
              </Link>
              <Link to="https://substream-xmo6.onrender.com/" target="_blank" rel="noopener noreferrer"> 
                <img src={live_icon} alt="live_icon" className="sub-icon" title="Deployed"/>
              </Link>
            </div>
          </div>
          <hr className="mt-3"/>
        </div>
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img src={SimonThumb} className="rounded img-fluid w-100" alt="img"></img>
            <div className="description p-3 text-center rounded">
            <p>Modern interpretation of classic memory game.</p>
            <div>
              <i class="prog-icon devicon-javascript-plain"></i>
            </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline">
            <h3 className="raleway-medium text-center title"> simon </h3>
            <div>
              <Link to="https://github.com/jaxdsout/simon" target="_blank" rel="noopener noreferrer"> 
                <img src={repo_icon} alt="repo_icon" className="sub-icon" title="Repository"/>
              </Link>
              <Link to="https://jaxdsout.github.io/simon/" target="_blank" rel="noopener noreferrer"> 
                <img src={live_icon} alt="live_icon" className="sub-icon" title="Deployed"/>
              </Link>
            </div>
          </div>
          <hr className="mt-3"/>
        </div>
        </div>
       
        <div className="row">
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img src={QwiklokThumb} className="rounded img-fluid w-100" alt="img"></img>
            <div className="description p-3 text-center rounded">
              <p>Time-logger with admin & employee endpoints.</p>
              <div>
                <i class="prog-icon devicon-mongodb-plain"></i>
                <i class="prog-icon me-2 devicon-express-original"></i>
                <i class="prog-icon devicon-nodejs-plain"></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline">
            <h3 className="raleway-medium text-center title"> qwiklok </h3>
            <div>
              <Link to="https://github.com/jaxdsout/qwiklok" target="_blank" rel="noopener noreferrer"> 
                <img src={repo_icon} alt="repo_icon" className="sub-icon" title="Repository"/>              
              </Link>
              <Link to="https://qwiklok.onrender.com/" target="_blank" rel="noopener noreferrer"> 
                <img src={live_icon} alt="live_icon" className="sub-icon" title="Deployed"/>
              </Link>
            </div>
          </div>
          <hr className="mt-3"/>
        </div>
        </div>
        
      </div>
    </div>
  )

}

export default Projects