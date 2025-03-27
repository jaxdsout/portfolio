import { useParams } from "react-router-dom"
import ProjectPage from "./ProjectPage";
import GalleryThumb from "../elements/images/gallery.png";
import SubstreamThumb from "../elements/images/substream.png";
import AtlasThumb from "../elements/images/atlas.png";

function Project () {
    const { id } = useParams();
  
    let content = null;
    let thumbnail = null;
    let title = '';
    let links = [];

    switch (id) {
        case '1':
            links = ["https://aptatlas.com/", "https://github.com/jaxdsout/plotter"];
            thumbnail = AtlasThumb;
            break;
        case '2':
            links = ["https://substream-xmo6.onrender.com/", "https://github.com/jaxdsout/substream"];
            thumbnail = SubstreamThumb;
            break;
        case '3':
            links = ["https://gallery-site.onrender.com/", "https://github.com/jaxdsout/gallery-site"];
            thumbnail = GalleryThumb;
            break;
        default:
            links = []; 
            break;
    }

    if (id === '1') {
        title = 'PROJECT: ATLAS';
        content = (
            <p>CRM & list-making platform for apartment locators</p>
        );
    }

    if (id === '2') {
        title = 'PROJECT: SUBSTREAM';
        content = (
            <p className="mb-3">
                {/* Add content for Project: SUBSTREAM */}
            </p>
        );
    }

    if (id === '3') {
        title = 'PROJECT: GALLERY';
        content = (
            <p className="mb-3">
                {/* Add content for Project: GALLERY */}
            </p>
        );
    }

    return (
        <ProjectPage title={title} links={links} thumbnail={thumbnail}>
            {content}
        </ProjectPage>
    );
}

export default Project