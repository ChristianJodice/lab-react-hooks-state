import React from 'react'

const DarkModeToggle = ({darkModeEnabled, handleDarkModeToggle}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={handleDarkModeToggle}>{darkModeEnabled ? 'Light Mode' : 'Dark Mode'}</button>
  )
}

export default DarkModeToggle
