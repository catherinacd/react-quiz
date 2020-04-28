import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = ['Home', 'About']

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => (
      <li key={index} className={classes.unit}>
        <a className={classes.link} href='/'>
          Link {link}
        </a>
      </li>
    ))
  }

  render() {
    const cls = [classes.drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <>
        {this.props.isOpen && <Backdrop onClick={this.props.onClose} />}
        <nav className={cls.join(' ')}>
          <ul className={classes.list}>{this.renderLinks()}</ul>
        </nav>
      </>
    )
  }
}

export default Drawer
