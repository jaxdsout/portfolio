import AtlasThumb from '../assets/images/atlas.png';
import GalleryThumb from '../assets/images/gallery.png';
import SubstreamThumb from '../assets/images/substream.png';

export interface ProjectData {
  colorScheme: string[];
  title: string;
  github: string;
  deploy?: string;
  thumbnail: string;
  accent: string;
  body: string[];
}

export const projects: Record<string, ProjectData> = {
  '1': {
    colorScheme: ['#26282B', '#3a528a', '#4d6cb2', '#5F85DB', '#d3e4ff', '#e5eff8', '#000000'],
    title: 'ATLAS',
    github: 'https://github.com/jaxdsout/plotter',
    deploy: '',
    thumbnail: AtlasThumb,
    accent: '#5F85DB',
    body: [
      "Apartment locators are real estate agents who specialize in leasing within corporate apartment communities and buildings. While the listings they recommend are publicly available online, there's no streamlined way to share them with clients. Some locators rely on outdated systems, while others simply compile links into an email. This challenge led to the creation of Atlas.",
      "At its core, Atlas is a powerful list-making tool. However, it was built with scalability in mind, and new features have been continuously integrated since its initial development. The platform now includes deal (invoice) tracking, monthly earnings tables, a task manager, and a net-effective rent calculator. The latest addition is a commissions database, which helps users track current payout rates for apartment communities in their area.",
      "The web app is built with React and Redux, ensuring a dynamic and efficient user experience with smooth state management. It leverages Django for a custom backend API and uses Tailwind CSS to create a visually distinct and modern interface.",
    ],
  },
  '2': {
    colorScheme: ['#0b0b0b', '#1e1e1e', '#3b383f', '#67835d', '#92c181', '#a5d294', '#000000'],
    title: 'SUBSTREAM',
    github: 'https://github.com/jaxdsout/substream',
    deploy: 'https://substream-xmo6.onrender.com/',
    thumbnail: SubstreamThumb,
    accent: '#a5d294',
    body: [
      "Trying to find where a specific TV show or movie is streaming nowadays is a headache. Most people pay for multiple apps or services on top of free, ad-supported platforms. So searching through each one for Teenage Mutant Ninja Turtles II: The Secret of the Ooze or any content can be a lengthy—and sometimes fruitless—process. The solution? Substream.",
      "This project is a streamlined query tool that allows users to search for a title and instantly see where it's currently available. It provides direct links to the content on each respective streaming service, as well as links to its IMDb and Letterboxd pages.",
      "The web app leverages React and Redux to create a seamless user experience, enabling asynchronous data retrieval and smooth state management. It utilizes the Watchmode API for all media content and descriptions, combining Semantic UI and Tailwind CSS to deliver a distinct and polished interface.",
    ],
  },
  '3': {
    colorScheme: ['#3d3d3d', '#464646', '#747474', '#8b8b8b', '#a9a9a9', '#FFFFFF', '#000000'],
    title: 'THE GALLERY',
    github: 'https://github.com/jaxdsout/gallery-site',
    thumbnail: GalleryThumb,
    accent: '#464646',
    body: [
      "This project serves as both the customer-facing website and inventory system for a fictional art gallery. The backend is a custom API that manages inventory, artist information, event calendars, and bid logs. The gallery operates entirely on a bidding system, similar to eBay, but without a \"Buy Now\" option. As a pro-artist establishment, they aim to ensure that each piece sells for its true value. If an artwork doesn't sell, the gallery owner or artist can decide whether to renew the listing, utilizing the optional \"auto-renew\" feature.",
      "The web app is built with React on the frontend and Django on the backend. All media was sourced from my Midjourney account, while the interface combines Tailwind CSS with select elements from Semantic UI and is serviced by an S3 bucket on AWS.",
    ],
  },
};
