import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";

function Project ({ title, children, links, thumbnail, accent }) {

    return (
        <AnimatePresence>
            <motion.div className="h-full flex flex-col items-center justify-center p-8 rounded-lg text-sm text-white" style={{ zIndex: 4 }}>
                <Nav title={title} accent={accent} links={links}/>
                <div className="flex flex-col md:flex-row justify-center px-6 pt-2 items-center">
                    <div className="w-[320px] h-[250px] md:w-[380px] md:h-[380px] overflow-hidden rounded-2xl drop-shadow-sm cursor-pointer active:translate-y-1 my-2 md:mx-2">
                        <img
                            src={thumbnail}
                            className="w-full h-full object-cover hover:opacity-60 active:opacity-60"
                            alt="thumbnail"
                            onDoubleClick={() => window.open(links[0])}
                            onClick={() => window.open(links[0])}
                        />
                    </div>
                    <div className="my-2 md:mx-2 w-[320px] h-[320px] md:w-[380px] md:h-[380px] flex flex-col items-center text-center py-4 px-2 bg-black/40 rounded-xl text-sm">
                        <div className="overflow-y-auto auto-scrollbar pt-2 px-4 text-white">
                            {children}
                        </div>
                        <hr className="mt-3 mb-3 text-white w-full" />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default Project