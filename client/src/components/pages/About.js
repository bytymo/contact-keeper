import React from 'react'
import { useHistory } from 'react-router'

const About = () => {
  const history = useHistory()

  const backButton = () => {
    history.push('/')
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={backButton}>
        {' '}
        <i className='fas fa-chevron-left'></i> Go Back
      </button>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a full stack React app for keeping contacts.
      </p>
      <p className='bg-dark p'>
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  )
}

export default About
