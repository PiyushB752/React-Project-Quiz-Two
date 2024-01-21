import React, { Component } from 'react'
import './QuizStyle.css'
import quizQuestion from '../resources/quizQuestion.json'

export default class QuizComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1,
      ques: quizQuestion
    }
  }
  previousB = () =>{
    this.setState(()=>({
      index : Math.max(this.state.index - 1,1)
    }))
  }
  nextB = () =>{
    this.setState((event)=>({
      index : Math.min(this.state.index + 1,15)
    }))
  }
  quitB = () =>{
    window.confirm("Are you sure you want to quit?")
  }
  render() {
    const presentQuestion = this.state.ques[this.state.index - 1]
    return (
      <div>
        <div className="playArea">
            <h1 className='head'>Question</h1>
            <h4>{this.state.index} of 15</h4>
            <h3 className='question'>{presentQuestion.question}</h3>
            <div className='options'>
                <button className="option">{presentQuestion.optionA}</button>
                <button className="option">{presentQuestion.optionB}</button>
                <button className="option">{presentQuestion.optionC}</button>
                <button className="option">{presentQuestion.optionD}</button>
            </div>
            <div className='buttons'>
                <button className='previous' onClick={this.previousB}>Previous</button>
                <button className='next' onClick={this.nextB}>Next</button>
                <button className='quit' onClick={this.quitB}>Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
