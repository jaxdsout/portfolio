import { Link } from "react-router-dom"
import resume from "../components/resume.svg"
import pdf from "../images/JaxonSouthernResume.pdf";


function About () {

    return (
        <div className="container d-flex flex-column flex-md-row justify-content-between">
            <div className="d-flex flex-column justify-content-center align-items-start p-5">
                <h1 className="raleway-heavy prog">about me</h1>
                <div className="text-start">
                    <p>Hello! I'm a dedicated junior software developer with years of professional experience in crafting solutions to solve problems. My background is primarily in the real estate and construction domains, but I am bringing the same discipline and creativity to my emerging software career.</p>
                    <p>On a mission to expand my knowledge and horizons, I completed a part-time engineering bootcamp at General Assembly in early 2024 while continuing my current job. During the six-month course, I developed an unexpected affinity for creating databases & APIs and the ever-growing power of data. This ultimately led me to earn a certificate in Data Analytics from Google a few months afterward. Both of these programs, along with additional online courses, have refined my skills and gain a deeper understanding of how data and design control the user experience.</p>
                    <p>I have worked on multiple projects utilizing both backend and frontend technologies by the way of numerous frameworks and languages. My skills are strong in JavaScript, Python, and SQL, and I am honing my abilities in each of them every day. I'm committed to growing as a developer and data enthusiast. My current career goal is to leverage my background in relations and project management to find synergistic roles that still push me outside of my comfort zone.</p>
                    <p className=""> Based out of Houston, TX</p>

                </div>
                <Link download={pdf} target="_blank" rel="noopener noreferrer"> 
                    <img src={resume} alt="resume-logo" className="resume" title="Current Resume"/>
                </Link>
            </div>
            <div className=" d-flex flex-column justify-content-start align-items-start p-1">
                <h1 className="raleway-heavy prog">python</h1>
                <div className="mb-4 d-flex">
                    <i class="prog-icon devicon-python-plain" title="Python"></i>
                    <i class="prog-icon devicon-django-plain" title="Django"></i>
                    <i class="prog-icon devicon-flask-original" title="Flask"></i>
                    <i class="prog-icon devicon-pandas-plain" title="Pandas"></i>
                    <i class="prog-icon devicon-streamlit-plain" title="Streamlit"></i>
                </div>
                <h1 className="raleway-heavy prog">javascript</h1>
                <div className="mb-4">
                    <i class="prog-icon devicon-javascript-plain" title="Javascript"></i>
                    <i class="prog-icon devicon-react-original" title="React"></i>
                    <i class="prog-icon devicon-redux-original" title="Redux"></i>
                    <i class="prog-icon devicon-express-original" title="Express"></i>
                    <i class="prog-icon devicon-nodejs-plain" title="Node"></i>
                </div>
                <h1 className="raleway-heavy prog">styling</h1>
                <div className="mb-4">
                    <i class="prog-icon devicon-css3-plain" title="CSS3"></i>
                    <i class="prog-icon devicon-bootstrap-plain" title="Bootstrap"></i>
                    <i class="prog-icon devicon-handlebars-original" title="Handlebars"></i>
                    <i class="prog-icon devicon-tailwindcss-original" title="Tailwind"></i>
                </div>
                <h1 className="raleway-heavy prog">databases</h1>
                <div className="mb-4">
                    <i class="prog-icon devicon-mysql-original" title="MySQL"></i>
                    <i class="prog-icon devicon-postgresql-plain" title="PostgreSQL"></i>
                    <i class="prog-icon devicon-sqlite-plain" title="SQLite"></i>
                    <i class="prog-icon devicon-mongodb-plain" title="MongoDB"></i>
                    <i class="prog-icon devicon-mongoose-original" title="Mongoose"></i>
                </div>
                <h1 className="raleway-heavy prog">analytics</h1>
                <div className="mb-4">
                    <i class="prog-icon devicon-rstudio-plain" title="R Studio"></i>
                    <i class="prog-icon devicon-matlab-plain" title="Matlab"></i>
                    <i class="prog-icon devicon-jupyter-plain" title="Jupyter"></i>
                    <i class="prog-icon devicon-plotly-plain" title="Plotly"></i>
                </div>
                <h1 className="raleway-heavy prog">deployment</h1>
                <div className="mb-4">
                    <i class="prog-icon devicon-heroku-original" title="Heroku"></i>
                    <i class="prog-icon devicon-docker-plain" title="Docker"></i>
                    <i class="prog-icon devicon-postman-plain" title="Postman"></i>

                </div>
            </div>            
        </div>
    )
}

export default About