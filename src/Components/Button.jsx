import React from 'react'
import styles from './Styles/Button.module.css'

function Button(props) {
  const { children, onClick, className } = props;

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type='submit'>
      {children}
    </button>
  )
}

export default Button