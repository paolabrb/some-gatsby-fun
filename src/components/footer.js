import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <footer className="page-footer indigo darken-4">
            <div className="footer-copyright">
                <div className="container text-white">
                    Made with ❤️ by Paolabrb
                    <a href="https://github.com/paolabrb/some-gatsby-fun" className="no-decor right text-white" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer