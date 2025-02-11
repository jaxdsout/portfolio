
function Contact () {

    return (
      <div className='bg-white/5 rounded-lg mb-12 animator flex flex-row p-5 items-center justify-center text-[3rem] text-white text-nowrap border-[0.05rem] border-white/5'>
        <a className='mr-4' href={"mailto:jaxon.southern@mac.com"}>
          <i className="bi bi-send-fill transition ease-out hover:text-[#eb8242]" title="Email"></i>
        </a>
        <a className='ml-4 mr-4' href={"http://www.github.com/jaxdsout"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github transition ease-out hover:text-[#eb8242]" title="GitHub"></i>
        </a>
        <a className='ml-4 mr-4' href={"https://www.linkedin.com/in/jaxonsouthern/"} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin transition ease-out hover:text-[#eb8242]" title="LinkedIn"></i>
        </a>
        <a href={"https://misc-jax-0123.s3.us-east-2.amazonaws.com/JaxonSouthernResume.pdf"} target="_blank" rel="noopener noreferrer"> 
                <i className="bi bi-file-earmark-person-fill transition ease-out ml-4 hover:text-[#eb8242]" title="Current Resume"></i>
        </a>
      </div>
    )
}

export default Contact