import React from 'react'
import classes from './Button.module.css'

const Button = ({ onClick, disabled, type, children }) => {
  const cls = [classes.button, classes[type]]
  return (
    <button className={cls.join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
