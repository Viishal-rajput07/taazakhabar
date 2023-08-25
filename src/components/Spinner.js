import React from 'react'
import Loading from './SpinnerLoader.gif'

export const Spinner =()=>{

    return (
      <div className='text-center my-3'>
        <img  src={Loading} alt="Loading..." style={{height: '70px'}} />
      </div>
    )
  }

export default Spinner