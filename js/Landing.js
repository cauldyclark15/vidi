import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render () {
    return (
      <div className='landing'>
        <h1>vidi</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
}

export default Landing
