import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return(
    <nav>
        <div className="nav-wrapper indigo darken-4">
            <Link to="/" className="brand-logo center">Das Leben ist kein Ponyhof</Link>
        </div>
    </nav>
    )
}

export default Navbar;