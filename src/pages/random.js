import React from 'react'
import Navbar from '../components/navbar'
import JSONData from '../../public/words.json'

const RandomWord = () => {
    let index = Math.floor(Math.random() * 345);
    const randomWord = JSONData[index].word;

    return(
        <div>
        <Navbar />
        <div className="card-container my-5">
            <div className="row">
                <div className="col s12 m6">
                <div className="card">
                    <div className="card-content center">
                    <span className="card-title">Here you go!</span>
                    <p>Your German Word is: { randomWord }</p>
                    <button className="waves-effect waves-light btn-small indigo darken-4">Another one?</button>
                 </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default RandomWord;