import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";

function About () {
    const links = ["mailto:jaxon.southern@mac.com", "http://www.github.com/jaxdsout", "https://www.linkedin.com/in/jaxonsouthern/"]
    
    return (
        <AnimatePresence>
            <motion.div className="h-screen flex flex-col items-center justify-center p-8 rounded-lg text-sm text-white" style={{ zIndex: 4 }}>
                <Nav title={"ABOUT ME"} accent={"#e6a157"} links={links}/>
                <div className="flex flex-col md:flex-row justify-center px-6 pt-2 items-center">
                    <div className="my-2 md:mx-2 w-[380px] h-[480px] flex flex-col items-center text-center py-4 px-2 bg-white/10 rounded-xl text-sm">
                        <div className="overflow-y-auto auto-scrollbar pt-2 px-4 text-white">
                            <p className="mb-3">
                            Hello! I'm a junior software engineer with years of professional experience crafting solutions to solve problems outside of tech. In every job, my approach has been to be as efficient as possible while still tailoring my solutions to each client. My background is primarily in the real estate and construction domains, but I am bringing the same discipline and creativity to my emerging software career.
                            <br></br>
                            <br></br>
                            On a mission to expand my knowledge and horizons, I completed a part-time engineering bootcamp at General Assembly in early 2024 while continuing my current job as a real-estate agent. During the six-month course, I developed an unexpected affinity for creating databases and APIs, as well as a deep appreciation for the ever-growing power of data. This ultimately led me to earn a certificate in Data Analytics from Google a few months later. Since then, I have strengthened my foundation in both web and systems languages through online courses.
                            <br></br>
                            <br></br>
                            I have worked with multiple tech stacks, giving me extensive exposure to various backend and frontend technologies. My skills are strong in JavaScript, Python, and SQL, and I am continuously honing my abilities in each of them. However, lately, I have been learning C++ and Rust to gain a deeper understanding of the entire spectrum of software development. I am committed to growing as an engineer and data enthusiast, and I truly aspire to make this career change the last one. My current goal is to leverage my background in relationship management and project management to find synergistic roles that challenge me and push me beyond my comfort zone.
                            <br></br>
                            <br></br>
                            <span className="text-center">Based out of Houston, TX</span>
                            </p>                            
                        </div>
                        <hr className="mt-3 mb-3 text-white w-full" />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
 
    )
}

export default About