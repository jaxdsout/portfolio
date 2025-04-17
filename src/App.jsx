import { Routes, Route, useLocation } from 'react-router-dom';
import Tabs from './components/Tabs';
import Content from './components/Content'
import About from "./components/About"
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';

function App () {
    const location = useLocation();


    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center' style={{ zIndex: 4 }}> 
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
                            <Tabs /> 
                        </motion.div>
                     } path=''/>
                    <Route element={ 
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Content /> 
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

            <div className='fixed top-0 left-0 object-cover'>
                <Background />
            </div>
        </div>
    )
}

export default App