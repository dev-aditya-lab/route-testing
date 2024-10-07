import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Home</div>
    <Link to={'/about'}>about</Link>
    </>
  )
}

export default Home