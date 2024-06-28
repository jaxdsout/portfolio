import { Link } from "react-router-dom"

import GalleryThumb from "../images/gallery.png"
import SubstreamThumb from "../images/substream.png"
import QwiklokThumb from "../images/qwiklok.png"
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
            <img src={GalleryThumb} className="rounded img-fluid thumbies" alt="img"></img>
            <div className="description p-3 text-center rounded">
            <p>Bid-based storefront for fictitious art gallery.</p>
            </div>
          </div>
            <div className="d-flex justify-content-between mt-3 align-items-baseline">
              <h3 className="raleway-medium text-center title"> the gallery </h3>
              <div>
                <Link to="https://github.com/jaxdsout/gallery-site" target="_blank" rel="noopener noreferrer"> 
                  <img src={repo_icon} alt="repo_icon" className="sub-icon"/>
                </Link>
                <Link to="https://jaxdsout.github.io/gallery-site/#/" target="_blank" rel="noopener noreferrer"> 
                  <img src={live_icon} alt="live_icon" className="sub-icon"/>
                </Link>
              </div>
            </div>
          </div>
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img src={SubstreamThumb} className="rounded img-fluid thumbies" alt="img"></img>
            <div className="description p-3 text-center rounded">
            <p>Querier for content streaming locations.</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline">
            <h3 className="raleway-medium text-center title"> substream </h3>
            <div>
              <Link to="https://github.com/jaxdsout/substream" target="_blank" rel="noopener noreferrer"> 
                <img src={repo_icon} alt="repo_icon" className="sub-icon"/>
              </Link>
              <Link to="https://jaxdsout.github.io/substream/#/" target="_blank" rel="noopener noreferrer"> 
                <img src={live_icon} alt="live_icon" className="sub-icon"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img src={QwiklokThumb} className="rounded img-fluid thumbies" alt="img"></img>
            <div className="description p-3 text-center rounded">
            <p>Time-logger with admin & employee endpoints.</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline">
            <h3 className="raleway-medium text-center title"> qwiklok </h3>
            <div>
              <Link to="https://github.com/jaxdsout/qwiklok" target="_blank" rel="noopener noreferrer"> 
                <img src={repo_icon} alt="repo_icon" className="sub-icon"/>              
              </Link>
              <Link to="https://qwiklok-c30005c6179d.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                <img src={live_icon} alt="live_icon" className="sub-icon"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img src={SimonThumb} className="rounded img-fluid thumbies" alt="img"></img>
            <div className="description p-3 text-center rounded">
            <p>Modern interpretation of classic memory game. </p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline">
            <h3 className="raleway-medium text-center title"> simon </h3>
            <div>
              <Link to="https://github.com/jaxdsout/simon" target="_blank" rel="noopener noreferrer"> 
                <img src={repo_icon} alt="repo_icon" className="sub-icon"/>
              </Link>
              <Link to="https://jaxdsout.github.io/simon/" target="_blank" rel="noopener noreferrer"> 
                <img src={live_icon} alt="live_icon" className="sub-icon"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}

export default Projects