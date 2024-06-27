import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"
import axiosClient from '../../axios/axiosClient';
import { useStateContext } from '../../Context/context';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setToken } = useStateContext();
  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: email,
      password: password
    }

    axiosClient.post('/login', payload)
    .then(({data}) => {
      setToken(data.token)  
      navigate('/')
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <>
       <div className="mx-auto login" style={{
       }}>
              <p className='text-white'>Dont have an account? <Link to="/signup" style={{color: '#ffc107'}} className='fw-bold text-decoration-none'>Signup</Link></p>
              <form onSubmit={onSubmit}>
                <input className='border-none rounded p-2 mb-3 outline-none' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input className='border-none rounded p-2 mb-3 outline-none' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <input className='border-none rounded p-2 mb-3 outline-none signin' type="submit" value="Login" />
              </form>
            </div>
      
    </>
  )
}

export default Login