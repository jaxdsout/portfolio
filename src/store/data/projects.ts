import JodasThumb from '../../assets/images/jodas.png';
import SubstreamThumb from '../../assets/images/substream.png';
import ValerieThumb from '../../assets/images/valerie.png';
import { Project } from '../types';

export const projects: Record<string, Project> = {
  '1': {
    id: 1,
    colorScheme: ['#151515', '#a6a7a8', '#9DAADE', '#cdcadc', '#BFB9DD', '#9DAADE', '#000000'],
    title: 'VALERIE',
    deploy: 'https://www.valeriesouthern.com',
    thumbnail: ValerieThumb,
    accent: '#9DAADE',
    body: [
      "Valerie Southern is a licensed real estate agent operating in the Houston area. Her client-facing website needed to do more than just look professional — it needed to qualify leads and route inquiries efficiently based on what each client actually needed.",
      "The site features a dynamic intake form that branches by transaction type: buying, selling, leasing, or apartment locating. Each path collects the relevant details upfront — budget, timeline, location preferences, property type — and fires a formatted email directly to Valerie with everything she needs to respond meaningfully on the first contact.",
      "Built with Next.js and deployed on Vercel, the project emphasizes a clean mobile-first experience. The form logic is handled client-side with Zustand, and submissions are processed through a serverless API route, keeping the stack simple and the site fast.",
    ],
  },
  '2': {
    id: 2,
    colorScheme: ['#0b0b0b', '#1e1e1e', '#3b383f', '#67835d', '#92c181', '#a5d294', '#000000'],
    title: 'SUBSTREAM',
    github: 'https://github.com/jaxdsout/substream',
    deploy: 'https://substream-phi.vercel.app/',
    thumbnail: SubstreamThumb,
    accent: '#a5d294',
    body: [
      "Trying to find where a specific TV show or movie is streaming nowadays is a headache. Most people pay for multiple apps or services on top of free, ad-supported platforms. So searching through each one for Teenage Mutant Ninja Turtles II: The Secret of the Ooze or any content can be a lengthy—and sometimes fruitless—process. The solution? Substream.",
      "This project is a streamlined query tool that allows users to search for a title and instantly see where it's currently available. It provides direct links to the content on each respective streaming service, as well as links to its IMDb and Letterboxd pages.",
      "The web app leverages React and Redux to create a seamless user experience, enabling asynchronous data retrieval and smooth state management. It utilizes the Watchmode API for all media content and descriptions, combining Semantic UI and Tailwind CSS to deliver a distinct and polished interface.",
    ],
  },
  '3': {
    id: 3,
    colorScheme: ['#1a1a1a', '#242424', '#ffbd59', '#aa3133', '#cc4444', '#802628', '#000000'],
    title: 'JODAS',
    deploy: 'https://jodasburgers.com/',
    thumbnail: JodasThumb,
    accent: '#802628',
    body: [
      "Jodas Burgers is a Houston-based burger spot operating out of downtown at 1000 Main St. Their website needed to represent the full scope of what they offer — from a rotating menu to catering packages — while making it easy for customers to order without picking up the phone.",
      "The site covers the complete menu across categories: smash burgers, chicken burgers, breakfast builds, boneless wings, seafood, sides, and drinks. A dedicated catering section lays out package options for breakfast boxes, lunch boxes, wing packs, and fruit trays. Online ordering is handled through a Toast integration, keeping the transaction flow seamless and off-site maintenance minimal.",
      "Built with React and Vite, the menu data is structured in TypeScript constants, making it straightforward to update items and pricing without touching layout code. The visual identity pulls from the brand's dark backgrounds and bold red-to-amber palette.",
    ],
  },
};
