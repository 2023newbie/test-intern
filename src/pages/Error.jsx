import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <Navbar />

      <p>Maybe you type wrong url. <Link to='/'>Go back</Link></p>
    </div>
  )
}

export default Error