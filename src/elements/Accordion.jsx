import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Resume from "./Resume"

function Accordion() {
  return (
    <div className="accordion accordion-flush " id="accordionFlushExample">

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#flush-collapseOne" 
            aria-expanded="false" aria-controls="flush-collapseOne">
                <h2 className='raleway-regular'> about </h2>
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <About />
                </div>
          </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                className="accordion-button collapsed" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#flush-collapseTwo" 
                aria-expanded="false" aria-controls="flush-collapseTwo">

                    <h2 className='raleway-regular'> projects </h2>
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <Projects />
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

                    <h2 className='raleway-regular'> resume </h2>
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <Resume />
                </div>
            </div>
        </div>

        <div className="accordion-item mb-5">
            <h2 className="accordion-header">
                <button 
                className="accordion-button collapsed" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#flush-collapseFour" 
                aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className='raleway-regular'> contact </h2>
                </button>
             </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <Contact />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Accordion
