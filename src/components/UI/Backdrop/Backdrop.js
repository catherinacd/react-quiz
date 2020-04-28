import React from 'react'
import classes from '../Backdrop/Backdrop.module.css'

const Backdrop = ({ onClick }) => (
  <div className={classes.backdrop} onClick={onClick}></div>
)

export default Backdrop
