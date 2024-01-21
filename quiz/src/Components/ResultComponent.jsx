import React, { Component } from 'react'
import './ResultStyle.css'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Result</h1>
        <div className='resultArea'>
            <h3 className='Heading'>You need more practice!</h3>
            <h2>Your Score is 20%</h2>
            <div className='details'>
                <p><b>Total number of questions</b></p><span className='span1'><b>15</b></span>
                <p><b>Number of attempted questions</b></p><span className='span2'><b>9</b></span>
                <p><b>Number of correct answers</b></p><span className='span3'><b>3</b></span>
                <p><b>Number of wrong answers</b></p><span className='span4'><b>6</b></span>
            </div>
        </div>
        <div className="Buttons">
          <button className='playAgain'>Play Again</button>
          <button className='homeButton'>Back to Home</button>
        </div>
      </div>
    )
  }
}
