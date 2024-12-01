import Header from './elements/Header'
import Nav from './elements/Nav'
import Motion from './elements/Motion';
import About from './elements/About';
import Projects from './elements/Projects';
import Contact from './elements/Contact';
import Resume from './elements/Resume';
import Zen from './elements/Zen'
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './elements/NotFound';

function App () {

    return (
        <>
            <Header />
            <Nav />
            <Routes>
                <Route index element={<Navigate to="/projects/" />} />
                <Route path="/zen/" element={<Zen />} />
                <Route path="/about/" element={<About />} />
                <Route path="/projects/" element={<Projects />} />
                <Route path="/resume/" element={<Resume />} />
                <Route path="/contact/" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Motion />
        </>
    )
}

export default App