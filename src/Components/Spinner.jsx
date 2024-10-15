import React from 'react'
import roll from './roll.gif'

const Spinner = () => {
  return (
    <div className='flex justify-center'>
      <img className='h-10' src={roll} alt='loading'/>
    </div>
  )
}

export default Spinner
