import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Cheeto from './components/cheeto/Cheeto';
import Project from './components/project/Project';
import Background from './components/waves/Background';

function App(): JSX.Element {
  const location = useLocation();

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={
              <motion.div
                key="tabs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Cheeto />
              </motion.div>
            } path='' />
            <Route element={
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Project />
              </motion.div>
            } path='/proj/:id' />
            <Route element={
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <About />
              </motion.div>
            } path='/about-me' />
          </Routes>
        </AnimatePresence>
      </div>

      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
        <Background />
      </div>
    </>
  );
}

export default App;
