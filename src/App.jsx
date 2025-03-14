import Motion from './elements/Motion';
import About from './elements/About';
import Projects from './elements/Projects';
import Contact from './elements/Contact';
import { Routes, Route } from 'react-router-dom';
import Tabs from './elements/Tabs';

function App () {

    return (
        <div className='flex flex-col items-center justify-center w-screen'>
            <div className='flex flex-col items-center justify-center max-w-[1400px]'>
                <Routes>
                    <Route path="/" element={<Tabs />}>
                        <Route path="" element={<Projects />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </div>
            
            <Motion />
        </div>
    )
}

export default App