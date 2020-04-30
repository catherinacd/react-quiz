import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Список', exact: true },
  { to: '/auth', label: 'Авторизация', exact: false },
  { to: '/quiz-creator', label: 'Создать тест', exact: false },
]

export default class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks() {
    return links.map((link, index) => (
      <li key={index} className={classes.unit}>
        <NavLink
          className={classes.link}
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          onClick={this.clickHandler}
        >
          {link.label}
        </NavLink>
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
        {this.props.isOpen && <Backdrop onClick={this.clickHandler} />}
        <nav className={cls.join(' ')}>
          <ul className={classes.list}>{this.renderLinks()}</ul>
        </nav>
      </>
    )
  }
}
