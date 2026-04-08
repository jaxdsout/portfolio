import { AnimatePresence, motion } from 'framer-motion';
import { about } from '../../constants/about';
import Nav from '../nav/Nav';
import './About.css';

function About(): JSX.Element {
  return (
    <AnimatePresence>
      <motion.div className="about-wrapper" style={{ zIndex: 4 }}>
        <Nav title="ABOUT ME" accent="#eb8242" links={about.links} />
        <div className="about-layout">
          <div className="about-panel">
            <div className="about-scroll-area">
              {about.body.map((paragraph, i) => (
                <p key={i} className="about-body">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default About;
