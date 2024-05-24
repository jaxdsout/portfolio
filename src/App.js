import {ReactComponent as LinkedIn} from './components/linkedin.svg'
import {ReactComponent as GitHub} from './components/github.svg'
import {ReactComponent as Email} from './components/email.svg'
import {ReactComponent as Repo} from "./components/code.svg"
import {ReactComponent as LiveLink} from "./components/link.svg"
import {ReactComponent as Resume} from "./components/resume.svg"

import { Routes, Route } from 'react-router-dom';

import Header from './elements/Header'
import Accordion from './elements/Accordion'

import "./App.css"

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={
          <Accordion 
            LinkedIn={LinkedIn}
            LiveLink={LiveLink}
            Repo={Repo}
            Resume={Resume}
            GitHub={GitHub}
            Email={Email}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;
