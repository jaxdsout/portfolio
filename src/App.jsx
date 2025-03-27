import Motion from './components/Motion';
import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs';
import Project from './components/Project'
import About from "./components/About"

function App () {


    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='relative'>
                <Routes>
                    <Route index element={ <Tabs /> } path=''/>
                    <Route element={ <Project /> } path='/proj/:id' />
                    <Route element={ <About /> } path='/about-me' />
                </Routes>
            </div>

            <div className='absolute top-0 left-0 object-cover'>
                <Motion />
            </div>
        </div>
    )
}

export default App