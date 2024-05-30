import { Link } from "react-router-dom"

import GalleryThumb from "../images/gallery.png"
import SubstreamThumb from "../images/substream.png"
import QwiklokThumb from "../images/qwiklok.png"
import SimonThumb from "../images/simon.png"


function Projects ({ LiveLink, Repo }) {

    return (
        <div className="row d-flex align-items-end my-2 overflow-x-auto">
        <div className='col'>
          <div className="thumbnail-container">
            <img src={GalleryThumb} className='rounded img-fluid' alt='img'></img>
            <div className="description p-3 text-center rounded">
              <p>a React & Django app built with a local art gallery in mind</p>
            </div>
          </div>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <h3 className='raleway-medium text-center title'> the gallery </h3>
            <div>
              <Link to="https://github.com/jaxdsout/gallery-site" target="_blank" rel="noopener noreferrer"> 
              <Repo className='sub-icon'/>
              </Link>
              <Link to="https://jaxdsout.github.io/gallery-site/" target="_blank" rel="noopener noreferrer"> 
                <LiveLink className='sub-icon'/>
              </Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="thumbnail-container">
            <img src={SubstreamThumb} className='rounded img-fluid' alt='img'></img>
            <div className="description p-3 text-center rounded">
              <p>seamless React searcher for finding what platforms your movies & shows are on</p>
            </div>
          </div>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <h3 className='raleway-medium text-center title'> substream </h3>
            <div>
              <Link to="https://github.com/jaxdsout/substream" target="_blank" rel="noopener noreferrer"> 
                <Repo className='sub-icon'/>
              </Link>
              <Link to="https://jaxdsout.github.io/substream/" target="_blank" rel="noopener noreferrer"> 
                <LiveLink className='sub-icon'/>
              </Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="thumbnail-container">
            <img src={QwiklokThumb} className='rounded img-fluid' alt='img'></img>
            <div className="description p-3 text-center rounded">
              <p>time logging software utilizing EJS with admin & employee functionality</p>
            </div>
          </div>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <h3 className='raleway-medium text-center title'> qwiklok </h3>
            <div>
              <Link to="https://github.com/jaxdsout/qwiklok" target="_blank" rel="noopener noreferrer"> 
                <Repo className='sub-icon'/>
              </Link>
              <Link to="https://qwiklok-c30005c6179d.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                <LiveLink className='sub-icon'/>
              </Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="thumbnail-container">
            <img src={SimonThumb} className='rounded img-fluid' alt='img'></img>
            <div className="description p-3 text-center rounded">
              <p>a modern yet nostaglic take on the classic memory game. includes memes.</p>
            </div>
          </div>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <h3 className='raleway-medium text-center title'> simon </h3>
            <div>
              <Link to="https://github.com/jaxdsout/simon" target="_blank" rel="noopener noreferrer"> 
                <Repo className='sub-icon'/>
              </Link>
              <Link to="https://jaxdsout.github.io/simon/" target="_blank" rel="noopener noreferrer"> 
                <LiveLink className='sub-icon'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Projects