import {ReactComponent as LinkedIn} from './components/linkedin.svg'
import {ReactComponent as GitHub} from './components/github.svg'
import {ReactComponent as Email} from './components/email.svg'
import {ReactComponent as Code} from "./components/code.svg"
import {ReactComponent as LiveLink} from "./components/link.svg"
 
import { Link } from 'react-router-dom';




function App() {
  return (
    <div>
      <h1> portfolio </h1>
      <div className='container text-container'>
        <h2> projects </h2>
        <div className="row">
          <div className='col'>
          <h3> gallery website</h3>
          <img src="" alt='img'></img>
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
            <img src="/images/simon.png" className='img-thumbnail' alt='img'></img>
            <Link to="https://github.com/jaxdsout/simon" target="_blank" rel="noopener noreferrer"> <Code /></Link>
            <Link to="https://jaxdsout.github.io/simon/" target="_blank" rel="noopener noreferrer"> <LiveLink /></Link>
          </div>
        </div>
      </div>

      <div className='container text-container'>
        <div className='row'>
          <div className='col'>
          <h2> contact </h2>
            <Link to={"mailto:jaxon.southern@mac.com"}>
            <Email />
          </Link>
          <Link to={"http://www.github.com/jaxdsout"}>
            <GitHub />
          </Link>
          <Link to={"https://www.linkedin.com/in/jaxonsouthern/"}>
            <LinkedIn />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
