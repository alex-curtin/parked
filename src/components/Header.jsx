import React from 'react'

const Header = ({ children }) => {
  return (
    <header>
      <h1>PARKED</h1>
      {children}
    </header>
  )
}

export default Header;