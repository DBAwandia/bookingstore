import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
import axios from 'axios'
import { RegisterContext } from '../Context/registerContext'
function Login() {
    const [ email, setEmail] = useState("")
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    const {user,loading,error,dispatch} = useContext(RegisterContext)
    const navigate = useNavigate()
    const handleRegister = async(e) =>{
        e.preventDefault()
        dispatch({type: "REGISTER_START"})
        const userData = { username, email, password}
        try{
          const res = await axios.post("http://localhost:5000/Users/register", userData)
          dispatch({type:"REGISTER_SUCCESS", payload: res.data})
          navigate("/login")
        }catch(err){
          dispatch({type: "REGISTER_FAILURE", payload: err.response.data})
        }
    }
  return (
    <div className='Login_page'>
        <div className='Login_outline'>
        <div className='Login_outlines'>
            <h1>Register</h1>
            <input type='username' placeholder='Enter username' onChange={(e)=> setUsername(e.target.value)} />
            <input type='text' placeholder='Enter email'  onChange={(e)=> setEmail(e.target.value)} />
            <input type='password' placeholder='Enter password'  onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleRegister} disabled={loading}>  Register </button>
            { error && <span>{error.message}</span>}
            <span>No account?<Link to='/login'>Login</Link> </span>
        </div>
    </div>
    </div>
  )
}

export default Login