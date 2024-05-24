import { Link } from "react-router-dom"


function Projects ({ LiveLink, Repo }) {

    return (
        <div className="row d-flex align-items-end my-2 overflow-x-auto">
        <div className='col'>
          <img src="/images/gallery.png" className='rounded img-fluid' alt='img'></img>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
          <h3 className='raleway-medium text-center title'> the gallery </h3>
            <div>
              <Link to="https://github.com/jaxdsout/gallery-site" target="_blank" rel="noopener noreferrer"> 
              <Repo className='sub-icon'/>
            </Link>
            </div>
            
          </div>
        </div>
        <div className='col'>
          <img src="/images/substream.png" className='rounded img-fluid' alt='img'></img>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <h3 className='raleway-medium text-center title'> substream</h3>
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
          <img src="/images/qwiklok.png" className='rounded img-fluid' alt='img'></img>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <h3 className='raleway-medium text-center title'> qwiklok</h3>
            <div>
               <Link to="https://github.com/jaxdsout/qwiklok" target="_blank" rel="noopener noreferrer"> 
                <Repo className='sub-icon'/>
              </Link>
            </div>
             
          </div>
        </div>
        <div className='col'>
          <img src="/images/simon.png" className='rounded img-fluid' alt='img'></img>
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <h3 className='raleway-medium text-center title'> simon</h3>
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