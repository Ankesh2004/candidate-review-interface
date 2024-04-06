import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='text-p'>
        <p className='text-secondary-text'>Pages <span className='text-primary-text font-bold'>/ Assignment</span></p>
        <h2 className='text-primary-text font-bold text-h2'>{data.title}</h2>
    </div>
  )
}

export default Navbar