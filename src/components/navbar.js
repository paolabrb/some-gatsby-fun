import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return(
    <nav>
        <div className="nav-wrapper indigo darken-4">
            <Link to="/" className="no-decor brand-logo center">randomGermanWord</Link>
        </div>
    </nav>
    )
}

export default Navbar;