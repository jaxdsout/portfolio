import { Link } from "react-router-dom";
import GalleryThumb from "../images/gallery.png";
import SubstreamThumb from "../images/substream.png";
import QwiklokThumb from "../images/qwiklok.png";
import PlotterThumb from "../images/plotter.png";
import SimonThumb from "../images/simon.png";
import ValerieThumb from "../images/valerie.png";

function Projects() {
  return (
    <div className="container mt-4 mb-4 animator">
      <div className="row">
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img
              src={PlotterThumb}
              className="rounded img-fluid w-100"
              alt="Atlas"
            />
            <div className="description p-3 text-center rounded text-white">
              <p>CRM & list-making platform for apartment locators</p>
              <div>
                <i className="prog-icon devicon-django-plain"></i>
                <i className="prog-icon devicon-react-original"></i>
                <i className="prog-icon devicon-redux-original"></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline text-box p-3 rounded-3">
            <h3 className="raleway-medium text-center title text-white"> atlas </h3>
            <div>
              <Link to="https://github.com/jaxdsout/plotter" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-code-slash sub-icon" title="Repository"></i>
              </Link>
              <Link to="https://aptatlas.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right sub-icon" title="Deployed"></i>
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-white" />
        </div>

        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img
              src={GalleryThumb}
              className="rounded img-fluid w-100"
              alt="Gallery"
            />
            <div className="description p-3 text-center text-white rounded">
              <p>Bid-based storefront for fictitious art gallery.</p>
              <div>
                <i className="prog-icon devicon-django-plain"></i>
                <i className="prog-icon devicon-react-original"></i>
                <i className="prog-icon devicon-postgresql-plain"></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline text-box p-3 rounded-3">
            <h3 className="raleway-medium text-center title text-white"> the gallery </h3>
            <div>
              <Link to="https://github.com/jaxdsout/gallery-site" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-code-slash sub-icon" title="Repository"></i>
              </Link>
              <Link to="https://gallery-site.onrender.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right sub-icon" title="Deployed"></i>
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-white" />
        </div>
      </div> {/* End of first row */}

      <div className="row">
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img
              src={SubstreamThumb}
              className="rounded img-fluid w-100"
              alt="Substream"
            />
            <div className="description p-3 text-center text-white rounded">
              <p>Querier for content streaming locations.</p>
              <div>
                <i className="prog-icon devicon-react-original"></i>
                <i className="prog-icon devicon-axios-plain"></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline text-box p-3 rounded-3">
            <h3 className="raleway-medium text-center title text-white"> substream </h3>
            <div>
              <Link to="https://github.com/jaxdsout/substream" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-code-slash sub-icon" title="Repository"></i>
              </Link>
              <Link to="https://substream-xmo6.onrender.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right sub-icon" title="Deployed"></i>
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-white" />
        </div>

        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img
              src={ValerieThumb}
              className="rounded img-fluid w-100"
              alt="Valerie"
            />
            <div className="description p-3 text-center text-white rounded">
              <p>Personalized real estate agent website with custom webform</p>
              <div>
                <i className="prog-icon devicon-react-original"></i>
                <i className="prog-icon devicon-django-plain"></i>
                <i className="prog-icon devicon-tailwindcss-original"></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline text-box p-3 rounded-3">
            <h3 className="raleway-medium text-center title text-white"> valerie </h3>
            <div>
              <Link to="https://valeriesouthern.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right sub-icon" title="Deployed"></i>
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-white" />
        </div>
      </div> {/* End of second row */}

      <div className="row">
        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img
              src={SimonThumb}
              className="rounded img-fluid w-100"
              alt="Simon"
            />
            <div className="description p-3 text-center text-white rounded">
              <p>Modern interpretation of classic memory game.</p>
              <div>
                <i className="prog-icon devicon-javascript-plain"></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline text-box p-3 rounded-3">
            <h3 className="raleway-medium text-center title text-white"> simon </h3>
            <div>
              <Link to="https://github.com/jaxdsout/simon" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-code-slash sub-icon" title="Repository"></i>
              </Link>
              <Link to="https://jaxdsout.github.io/simon/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right sub-icon" title="Deployed"></i>
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-white" />
        </div>

        <div className="col-12 col-md-6 p-2">
          <div className="thumbnail-container">
            <img
              src={QwiklokThumb}
              className="rounded img-fluid w-100"
              alt="Qwiklok"
            />
            <div className="description p-3 text-center rounded text-white">
              <p>Time-logger with admin & employee endpoints.</p>
              <div>
                <i className="prog-icon devicon-mongodb-plain"></i>
                <i className="prog-icon me-2 devicon-express-original"></i>
                <i className="prog-icon devicon-nodejs-plain"></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-baseline text-box p-3 rounded-3">
            <h3 className="raleway-medium text-center title text-white"> qwiklok </h3>
            <div>
              <Link to="https://github.com/jaxdsout/qwiklok" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-code-slash sub-icon" title="Repository"></i>
              </Link>
              <Link to="https://qwiklok.onrender.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right sub-icon" title="Deployed"></i>
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-white" />
        </div>
      </div> {/* End of third row */}
    </div>
  );
}

export default Projects;
