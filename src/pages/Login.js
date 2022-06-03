import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext} from "../Context/authContext"
import "./Login.css"
import axios from "axios"
function Login() {
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const {user,loading,error,dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = async(e) =>{
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
          const res = await axios.post("http://localhost:5000/Users/login", {email: email, password: password})
          dispatch({type:"LOGIN_SUCCESS", payload: res.data})
          navigate("/")
        }catch(err){
          dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
        }

console.log(user)
    }
  return (
    <div className='Login_page'>
        <div className='Login_outline'>
        <div className='Login_outlines'>
            <h1>Login</h1>
            <input type='text' placeholder='Enter email' onChange={(e)=> setEmail(e.target.value)} />
            <input type='text' placeholder='Enter password'  onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleLogin} disabled={loading}>  Login </button>
            { error && "Please check your datails"}
            <span>No account?<Link to="/register">Register</Link> </span>
        </div>
    </div>
    </div>
  )
}

export default Login