import {ReactComponent as LinkedIn} from './components/linkedin.svg'
import {ReactComponent as GitHub} from './components/github.svg'
import {ReactComponent as Email} from './components/email.svg'
import {ReactComponent as Repo} from "./components/code.svg"
import {ReactComponent as LiveLink} from "./components/link.svg"
import {ReactComponent as Resume} from "./components/resume.svg"

 
import { Link } from 'react-router-dom';
import "./App.css"


function App() {

  const ShowDescription = (event) => {
    event.preventDefault();
    
  }

  return (
    <div className='container'>

      <div className='container text-container text-center'>
         <h1 className='text-white raleway-heavy header'> portfolio </h1>
         <p className='text-white jersey-25-charted-regular author'>jaxon southern</p>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <h2 className='raleway-regular'> projects </h2>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div className="row d-flex align-items-end my-2 overflow-x-auto">
                <div className='col'>
                  <img onClick={ShowDescription} src="/images/gallery.png" className='rounded img-fluid' alt='img'></img>
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
            </div>
          </div>
          
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 className='raleway-regular'> about </h2>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div>
              <p> a little blurb about me and my story. </p>

              </div>
              <div>
              <Link to="/images/JaxonSouthernResume.pdf" target="_blank" rel="noopener noreferrer"> 
              <Resume className='icon'/>
                    </Link>
                <p>Resume</p>

              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <h2 className='raleway-regular'> contact </h2>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div className='container text-center'>
                <Link className='' to={"mailto:jaxon.southern@mac.com"}>
                  <Email className='icon'/>
                </Link>

                <Link className='' to={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
                  <GitHub className='icon'/>
                </Link>

                <Link className='' to={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
                  <LinkedIn className='icon'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
