import {ReactComponent as LinkedIn} from './components/linkedin.svg'
import {ReactComponent as GitHub} from './components/github.svg'
import {ReactComponent as Email} from './components/email.svg'
import {ReactComponent as Code} from "./components/code.svg"
import {ReactComponent as LiveLink} from "./components/link.svg"
 
import { Link } from 'react-router-dom';
import "./App.css"



function App() {
  return (
    <div className='container Pheader'>
      <div className='container text-container text-center'>
         <h1> portfolio </h1>
         <p>JAXON SOUTHERN</p>
      </div>
     


      <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <h2> projects </h2>
            </button>
          </h2>
            <div id="flush-collapseOne" class="accordion-collapse show" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              <div className="row d-flex align-items-end">
            <div className='col'>
            <h3> the gallery </h3>
            <img src="/images/gallery.png" className='img-thumbnail float-start' alt='img'></img>
            <Link to="https://github.com/jaxdsout/gallery-site" target="_blank" rel="noopener noreferrer"> <Code /></Link>
            </div>
            <div className='col'>
              <h3> substream</h3>
              <img src="/images/substream.png" className='img-thumbnail' alt='img'></img>
              <Link to="https://github.com/jaxdsout/substream" target="_blank" rel="noopener noreferrer"> <Code /> </Link>
              <Link to="https://jaxdsout.github.io/substream/" target="_blank" rel="noopener noreferrer"> <LiveLink /></Link>
            </div>
            <div className='col'>
              <h3> qwiklok</h3>
              <img src="/images/qwiklok.png" className='img-thumbnail' alt='img'></img>
              <Link to="https://github.com/jaxdsout/qwiklok" target="_blank" rel="noopener noreferrer"> <Code /></Link>
            </div>
            <div className='col'>
              <h3> simon</h3>
              <img src="/images/simon.png" className='img-thumbnail float-end' alt='img'></img>
              <Link to="https://github.com/jaxdsout/simon" target="_blank" rel="noopener noreferrer"> <Code /></Link>
              <Link to="https://jaxdsout.github.io/simon/" target="_blank" rel="noopener noreferrer"> <LiveLink /></Link>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2> about </h2>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <p> a little blurb about me and my story. </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <h2> contact </h2>
            </button>
          </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div className='container'>
            <Link className='' to={"mailto:jaxon.southern@mac.com"}>
              <Email />
              </Link>
            <Link className='' to={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </Link>
            <Link className='' to={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
              <LinkedIn />
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
