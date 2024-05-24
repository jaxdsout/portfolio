
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"

function Accordion({ Repo, LiveLink, Resume, Email, LinkedIn, GitHub }) {
  return (
    <div className="accordion accordion-flush " id="accordionFlushExample">
        
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                className="accordion-button collapsed" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#flush-collapseOne" 
                aria-expanded="false" aria-controls="flush-collapseOne">

                    <h2 className='raleway-regular'> projects </h2>
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <Projects 
                        LiveLink={LiveLink}
                        Repo={Repo}
                    />
                </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#flush-collapseTwo" 
            aria-expanded="false" aria-controls="flush-collapseTwo">
                <h2 className='raleway-regular'> about </h2>
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <About
                        Resume={Resume}
                    />
                </div>
          </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                className="accordion-button collapsed" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#flush-collapseThree" 
                aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className='raleway-regular'> contact </h2>
                </button>
             </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <Contact 
                        GitHub={GitHub}
                        LinkedIn={LinkedIn}
                        Email={Email}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Accordion
