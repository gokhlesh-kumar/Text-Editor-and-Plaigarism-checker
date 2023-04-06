import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.theme} navbar-${props.theme}`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">{props.About}</NavLink>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.theme === 'dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme === 'dark'?'Switch to Light Mode':'Switch to Dark Mode'}</label>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string
}

Navbar.defaultProps = {
    title: "TextUtils",
    About: "About"
}