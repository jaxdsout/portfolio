import Nav from './elements/Nav'
import Motion from './elements/Motion';
import About from './elements/About';
import Projects from './elements/Projects';
import Contact from './elements/Contact';
import Resume from './elements/Resume';
import Zen from './elements/Zen'
import { Routes, Route } from 'react-router-dom';
import NotFound from './elements/NotFound';
import Tabs from './elements/Tabs';

function App () {

    return (
        <div className='flex flex-col items-center justify-center'>
            <Nav />
            <Routes>
                <Route path="/" element={<Tabs />}>
                    <Route path="projects" element={<Projects />} />
                    <Route path="zen" element={<Zen />} />
                    <Route path="about" element={<About />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
              
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Motion />
        </div>
    )
}

export default App