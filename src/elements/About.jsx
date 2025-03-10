import { useState } from "react"

const IconDiv = ({ name, type }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="flex flex-col">
            <i 
                className={`text-[4rem] p-2 devicon-${name}-${type}`}
                onPointerOver={() => setFocused(true)} 
                onPointerOut={() => setFocused(false)}
            >
            </i>
            <span className={`${focused ? 'text-white' : 'text-[rgba(0,0,0,0)]'} text-xs`}>
            { name === 'amazonwebservices' ? 'aws' : name === 'tailwindcss' ? 'tailwind' : name }
            </span>
        </div>
    )
}

function About () {

    
    return (

        <div className="mb-12 animator flex flex-col p-7 items-center justify-center">
            <div className="flex flex-wrap flex-grow">
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                        <h1 className="raleway-heavy text-center mb-5 text-[2rem]">bio</h1>
                        <p className="mb-3">
                            Hello! I'm a dedicated junior software developer with years of professional experience in crafting solutions to solve problems. My background is primarily in the real estate and construction domains, but I am bringing the same discipline and creativity to my emerging software career.
                        </p>
                        <p className="mb-3">
                            On a mission to expand my knowledge and horizons, I completed a part-time engineering bootcamp at General Assembly in early 2024 while continuing my current job. During the six-month course, I developed an unexpected affinity for creating databases & APIs and the ever-growing power of data. This ultimately led me to earn a certificate in Data Analytics from Google a few months afterward. Both of these programs, along with additional online courses, have refined my skills and gain a deeper understanding of how data and design control the user experience.
                        </p>
                        <p className="mb-3">
                            I have worked on multiple projects utilizing both backend and frontend technologies by the way of numerous frameworks and languages. My skills are strong in JavaScript, Python, and SQL, and I am honing my abilities in each of them every day. I'm committed to growing as a developer and data enthusiast. My current career goal is to leverage my background in relations and project management to find synergistic roles that still push me outside of my comfort zone.
                        </p>
                        <p className="text-center">Based out of Houston, TX</p>
                        <hr className="mt-3 text-white" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white/5 p-8 mb-6 rounded-lg text-sm text-white border-[0.05rem] border-white/5">
                        <h1 className="raleway-heavy text-center mb-5 text-[2rem]">skills</h1>
                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 text-center mb-8">
                            <IconDiv name='python' type='plain' />
                            <IconDiv name='rust' type='plain' />
                            <IconDiv name='django' type='plain' />
                            <IconDiv name='flask' type='original' />
                            <IconDiv name='pandas' type='plain' />
                            <IconDiv name='streamlit' type='plain' />
                            <IconDiv name='react' type='original' />
                            <IconDiv name='redux' type='original' />
                            <IconDiv name='express' type='original' />
                            <IconDiv name='nodejs' type='plain' />
                            <IconDiv name='css3' type='plain' />
                            <IconDiv name='bootstrap' type='plain' />
                            <IconDiv name='handlebars' type='original' />
                            <IconDiv name='tailwindcss' type='original' />
                            <IconDiv name='mysql' type='original' />
                            <IconDiv name='postgresql' type='plain' />
                            <IconDiv name='sqlite' type='plain' />
                            <IconDiv name='mongodb' type='plain' />
                            <IconDiv name='mongoose' type='original' />
                            <IconDiv name='rstudio' type='plain' />
                            <IconDiv name='matlab' type='plain' />
                            <IconDiv name='jupyter' type='plain' />
                            <IconDiv name='plotly' type='plain' />
                            <IconDiv name='heroku' type='original' />
                            <IconDiv name='devicon' type='plain' />
                            <IconDiv name='postman' type='plain' />
                            <IconDiv name='amazonwebservices' type='plain-wordmark' />
                        </div>
  
                        <hr className="mt-3 text-white" />
                    </div>
                </div>
            </div>           
        </div>
 
    )
}

export default About