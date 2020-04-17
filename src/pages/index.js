import React from "react"
import Navbar from '../components/navbar'

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
                        <button>Random German Word!</button>
                     </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default indexPage;
