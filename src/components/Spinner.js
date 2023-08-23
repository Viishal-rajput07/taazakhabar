import React, { Component } from 'react'
import Loading from './SpinnerLoader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img  src={Loading} alt="Loading..." style={{height: '70px'}} />
      </div>
    )
  }
}

export default Spinner