import { useParams } from "react-router-dom"
import { useState } from "react";
import Project from "./Project";
import GalleryThumb from "../elements/images/gallery.png";
import SubstreamThumb from "../elements/images/substream.png";
import AtlasThumb from "../elements/images/atlas.png";


function Content () {
    const { id } = useParams();
    const [copied, setCopied] = useState(false);

    let content = null;
    let thumbnail = null;
    let title = '';
    let links = [];
    let accent = '';

    const copyClipboard = (type) => {
        let copyText = null;
        if (type === 'USERNAME') { copyText = process.env.REACT_APP_SANDBOX_USER } else { copyText = process.env.REACT_APP_SANDBOX_PASSWORD };
        navigator.clipboard.writeText(copyText);
        setCopied(true);

        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }

    switch (id) {
        case '1':
            title = 'ATLAS';
            links = ["https://aptatlas.com/", "https://github.com/jaxdsout/plotter"];
            thumbnail = AtlasThumb;
            accent = '#5F85DB';
            content = (
                <p className="pb-4 relative">
                    Apartment locators are real estate agents who specialize in leasing within corporate apartment communities and buildings. While the listings they recommend are publicly available online, there’s no streamlined way to share them with clients. Some locators rely on outdated systems, while others simply compile links into an email. This challenge led to the creation of <b>Atlas.</b>
                    <br></br>
                    <br></br>
                    At its core, Atlas is a powerful list-making tool. However, it was built with scalability in mind, and new features have been continuously integrated since its initial development. The platform now includes deal (invoice) tracking, monthly earnings tables, a task manager, and a net-effective rent calculator. The latest addition is a commissions database, which helps users track current payout rates for apartment communities in their area.
                    <br></br>
                    <br></br>
                    The web app is built with React and Redux, ensuring a dynamic and efficient user experience with smooth state management. It leverages Django for a custom backend API and uses Tailwind CSS to create a visually distinct and modern interface.
                    <br></br>
                    <br></br>
                    To login and access sandbox account, use the following credentials (click & they will be copied to your clipboard):
                    <br></br>
                    <br></br>
                    {copied ? <i className="text-xs absolute bottom-20 left-28 text-red-300 text-nowrap transition-opacity duration-300">COPIED TO CLIPBOARD</i> : " "}
                    <b onClick={() => copyClipboard('USERNAME')} className="mb-2">USERNAME</b>
                    <br></br>
                    <br></br>
                    <b onClick={() => copyClipboard('PASSWORD')}>PASSWORD</b>
                </p>
            );
            break;
        case '2':
            title = 'SUBSTREAM';
            links = ["https://substream-xmo6.onrender.com/", "https://github.com/jaxdsout/substream"];
            thumbnail = SubstreamThumb;
            accent = '#a5d294';
            content = (
                <p className="pb-4">
                    Trying to find where a specific TV show or movie is streaming nowadays is a headache. Most people pay for multiple apps or services on top of free, ad-supported platforms. So searching through each one for <i>Teenage Mutant Ninja Turtles II: The Secret of the Ooze</i> or any content can be a lengthy—and sometimes fruitless—process. The solution? <b>Substream.</b>
                    <br></br>
                    <br></br>
                    This project is a streamlined query tool that allows users to search for a title and instantly see where it’s currently available. It provides direct links to the content on each respective streaming service, as well as links to its IMDb and Letterboxd pages.
                    <br></br>
                    <br></br>
                    The web app leverages React and Redux to create a seamless user experience, enabling asynchronous data retrieval and smooth state management. It utilizes the Watchmode API for all media content and descriptions, combining Semantic UI and Tailwind CSS to deliver a distinct and polished interface.
                </p>
            );
            break;
        case '3':
            title = 'GALLERY';
            links = ["https://gallery-site.onrender.com/", "https://github.com/jaxdsout/gallery-site"];
            thumbnail = GalleryThumb;
            accent = '#464646';
            content = (
                <p className="pb-4">
                    This project serves as both the customer-facing website and inventory system for a fictional art gallery. The backend is a custom API that manages inventory, artist information, event calendars, and bid logs. The gallery operates entirely on a bidding system, similar to eBay, but without a “Buy Now” option. As a pro-artist establishment, they aim to ensure that each piece sells for its true value. If an artwork doesn’t sell, the gallery owner or artist can decide whether to renew the listing, utilizing the optional "auto-renew" feature.
                    <br></br>
                    <br></br>
                    The web app is built with React on the frontend and Django on the backend. All media was sourced from my Midjourney account, while the interface combines Tailwind CSS with select elements from Semantic UI and is serviced by an S3 bucket on AWS. The interface is a result of Tailwind and some elements of Semantic UI.
                </p>
            );
            break;
        default:
            links = []; 
            break;
    }

    return (
        <Project 
            title={title} 
            links={links} 
            thumbnail={thumbnail}
            accent={accent}
        >
            {content}
        </Project>
    );
}

export default Content