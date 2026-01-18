import React from 'react'
import styles from '../styles/DarkMode.module.css' 

const DarkModeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div 
      className={styles.container} 
      onClick={toggleTheme} 
      style={{cursor: 'pointer'}}
      role="button" 
      aria-label="Toggle Dark Mode"
    >
      <label className={styles.switch} onClick={(e) => e.stopPropagation()}>
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} tabIndex={-1} />
        <span className={styles.slider}></span>
      </label>
       <span className={styles.label}>
        {/* ROBUST LOGIC: Ensures the target mode is always mentioned  */}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </div>
  )
}

export default DarkModeToggle
