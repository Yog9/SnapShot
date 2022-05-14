import React from 'react'
import Form from './Form'
import Navigation from './Navigation'

const Header = ({navigate, handleSubmit}) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form navigate={navigate} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  )
}

export default Header
