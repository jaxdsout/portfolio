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
      <div>
        <h2> projects </h2>
        <div>
          <h3> gallery website</h3>
          <img src="" alt='img'></img>
          <Link to="https://github.com/jaxdsout/gallery-site"> <Code /></Link>
        </div>
        <div>
          <h3> substream</h3>
          <img src="" alt='img'></img>
          <Link to="https://github.com/jaxdsout/substream"> <Code /> </Link>
          <Link to="https://jaxdsout.github.io/substream/"> <LiveLink /></Link>
        </div>
        <div>
          <h3> qwiklok</h3>
          <img src="" alt='img'></img>
          <Link to="https://github.com/jaxdsout/qwiklok"> <Code /></Link>
        </div>
        <div>
          <h3> simon</h3>
          <img src="" alt='img'></img>
          <Link to="https://github.com/jaxdsout/simon"> <Code /></Link>
          <Link to="https://jaxdsout.github.io/simon/"> <LiveLink /></Link>

        </div>
      </div>
      <div>
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
  );
}

export default App;
