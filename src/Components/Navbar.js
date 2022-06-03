import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../Context/authContext'
import "./Navbar.css"
function Navbar() {
    const { user,dispatch,email} =  useContext(AuthContext)
    const navigate = useNavigate()
  return (
    <div className='navbar'>
         <Link to="/">
            <span >
                BOOKING store
            </span>
            </Link>
         {user ? user.email : <div className='buttons'>
                <button onClick={
                 ()=> navigate("/register")
                }>Register</button>
                <button className='navButton' onClick={
                  ()=> navigate("/login")
                }>Login</button>
            </div>}
            <button className='logout' onClick={()=>{
              dispatch({type: "LOGOUT"})
              navigate("/login")
            }}>LOGOUT</button>
    </div>
  )
}

export default Navbar