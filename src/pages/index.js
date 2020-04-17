import React from "react"
import Navbar from '../components/navbar'
import { Link } from 'gatsby'


const indexPage = () => {
    return(
        <div>
            <Navbar />
            <div className="container my-5">
                <div className="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content center">
                        <span className="card-title">Bored today?</span>
                        <Link to="/random" className="waves-effect waves-light btn-small indigo darken-4">Random German Word!</Link>
                     </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default indexPage;
