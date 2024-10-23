import { Link } from "react-router-dom"

function Header () {

    return (
        <div className='container text-container text-center head'>
            <Link to="/zen/"><h1 className='text-white raleway-heavy portfolio'>portfolio</h1></Link>
            <p className='text-white jersey-25-charted-regular author'>jaxon southern</p>
        </div>
    )
}

export default Header