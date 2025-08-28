import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav>
            <h2>Dynamic Routing</h2>
            <ul>
                <NavLink to={"/"}>home</NavLink>
                <NavLink to={"/users"}>users</NavLink>
            </ul>
        </nav>
    </>
  )
}

export default NavBar