import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Home</div>
    <a as={Link} to="/about">about</a>
    </>
  )
}

export default Home