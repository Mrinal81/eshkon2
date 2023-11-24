import React from 'react'

const Skeleton = () => {
  return (
    <div className='animate'>
      <div className='rounded'></div>
      <div className='rounded'></div>
      <div className='half'>
        <p className='rounded'></p>
        <p className='rounded'></p>
        <p className='rounded'></p>
        <p className='rounded'></p>
      </div>
    </div>
  )
}

export default Skeleton