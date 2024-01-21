import React, { Component } from 'react'
import './HomeStyle.css'

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <h1 className='Head'>Quiz App</h1>
        <button className='button'>Play</button>
      </div>
    )
  }
}
