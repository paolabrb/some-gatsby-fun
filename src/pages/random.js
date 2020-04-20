import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import JSONData from '../../public/words.json'

class RandomWord extends React.Component {
    constructor(props) {
        super(props);
        let index = Math.floor(Math.random() * 345);
        let firstWord = JSONData[index].word;
        this.state = { randomWord: firstWord };
        this.changeWord = this.changeWord.bind(this);
    }

    changeWord = event => {
        let index = Math.floor(Math.random() * 345);
        let newWord = JSONData[index].word;
        this.setState({
            randomWord: newWord
        })
    }

    render() {
                
        return(
            <div>
            <Navbar />
            <div className="card-container my-5">
                <div className="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content center">
                        <span className="card-title">Your random german word:</span>
                        <p id="random">{ this.state.randomWord }</p>
                        <div id="actions">
                            <button onClick={this.changeWord} className="waves-effect waves-light btn-small indigo darken-4">Another one?</button>
                            <a href="#" className="no-decor waves-effect waves-light btn-small yellow accent-4">Duden this?</a>
                        </div>
                     </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    }    
}




export default RandomWord;