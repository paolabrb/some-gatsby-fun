import React from 'react'
import Navbar from '../components/navbar'

const randomWord = () => {
    return(
        <div>
        <Navbar />
        <div className="card-container my-5">
            <div className="row">
                <div className="col s12 m6">
                <div className="card">
                    <div className="card-content center">
                    <span className="card-title">Here you go!</span>
                    <p>Random German Word!</p>
                    <button>Another one?</button>
                 </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default randomWord;