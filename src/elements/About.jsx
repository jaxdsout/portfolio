function About () {

    return (
        <div className="container d-flex flex-column">
            <div className="row w-100 justify-content-center align-items-center">
                <div className="col-12 p-1">
                    <div className="d-flex flex-row justify-content-between mt-4">
                        <h1 className="raleway-heavy mb-3">bio</h1>
                    </div>
                    <p>Hello! I'm a dedicated junior software developer with years of professional experience in crafting solutions to solve problems. My background is primarily in the real estate and construction domains, but I am bringing the same discipline and creativity to my emerging software career.
                    </p>
                    <p>On a mission to expand my knowledge and horizons, I completed a part-time engineering bootcamp at General Assembly in early 2024 while continuing my current job. During the six-month course, I developed an unexpected affinity for creating databases & APIs and the ever-growing power of data. This ultimately led me to earn a certificate in Data Analytics from Google a few months afterward. Both of these programs, along with additional online courses, have refined my skills and gain a deeper understanding of how data and design control the user experience.</p>
                    <p>I have worked on multiple projects utilizing both backend and frontend technologies by the way of numerous frameworks and languages. My skills are strong in JavaScript, Python, and SQL, and I am honing my abilities in each of them every day. I'm committed to growing as a developer and data enthusiast. My current career goal is to leverage my background in relations and project management to find synergistic roles that still push me outside of my comfort zone.</p>
                    <p className="pb-3">Based out of Houston, TX</p>
                    <hr/>
                </div>
                <div className="col-12 p-1 justify-content-center align-items-center">
                    <div className="text-start mb-3">
                        <h1 className="raleway-heavy mt-2">skills</h1>
                    </div>
                    <div className="row w-100 justify-content-center align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="raleway-heavy prog">python</h1>
                            <div className="d-flex mb-4 flex-wrap">
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-python-plain" title="Python"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-django-plain" title="Django"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-flask-original" title="Flask"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-pandas-plain" title="Pandas"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-streamlit-plain" title="Streamlit"></i>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="raleway-heavy prog">javascript</h1>
                            <div className="d-flex mb-4 flex-wrap">
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-javascript-plain" title="Javascript"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-react-original" title="React"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-redux-original" title="Redux"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-express-original" title="Express"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-nodejs-plain" title="Node"></i>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="raleway-heavy prog">styling</h1>
                            <div className="d-flex mb-4">
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-css3-plain" title="CSS3"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-bootstrap-plain" title="Bootstrap"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-handlebars-original" title="Handlebars"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-tailwindcss-original" title="Tailwind"></i>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="raleway-heavy prog">databases</h1>
                            <div className="d-flex mb-4 flex-wrap">
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-mysql-original" title="MySQL"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-postgresql-plain" title="PostgreSQL"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-sqlite-plain" title="SQLite"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-mongodb-plain" title="MongoDB"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-mongoose-original" title="Mongoose"></i>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="raleway-heavy prog">analytics</h1>
                            <div className="d-flex mb-4">
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-rstudio-plain" title="R Studio"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-matlab-plain" title="Matlab"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-jupyter-plain" title="Jupyter"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-plotly-plain" title="Plotly"></i>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="raleway-heavy prog">deployment</h1>
                            <div className="d-flex mb-4">
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-heroku-original" title="Heroku"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-docker-plain" title="Docker"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-postman-plain" title="Postman"></i>
                                <i className="prog-icon pe-2 pb-2 flex-shrink-1 devicon-amazonwebservices-plain-wordmark" title="AWS"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <hr/>      
        </div>
    )
}

export default About