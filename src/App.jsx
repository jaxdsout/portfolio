import Motion from './Motion';
import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Tabs from './elements/Tabs';
import Project from './elements/Project'
import About from "./elements/About"

function App () {


    return (
        <div className='flex flex-col items-center justify-center w-screen'>
            <Routes>
                <Route index element={ <Tabs /> } path=''/>
                <Route element={ <Project /> } path='/proj/:id' />
                <Route element={ <About /> } path='/about-me' />
            </Routes>
            <Motion />
        </div>
    )
}

export default App