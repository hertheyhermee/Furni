import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import axiosClient from "../../axios/axiosClient";
import { useStateContext } from "../../Context/context";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const { user, setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      password_confirmation: passwordConfirmation
    }

    axiosClient.post('/signup', payload)
    .then(({data}) => {
      setUser(data.user);
      setToken(data.token);
      console.log(data);
    }).catch(({error}) => {
      console.log(error);
    })
  };

  return (
    <div className="signup">
      {" "}
      <p className='text-white'>Already have an account? <Link to="/login" style={{color: '#ffc107'}} className='fw-bold text-decoration-none'>Login</Link></p>

      <form action="" onSubmit={onSubmit}>
        <input
        className='border-none rounded p-2 mb-3 outline-none'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
        className='border-none rounded p-2 mb-3 outline-none'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
        className='border-none rounded p-2 mb-3 outline-none'
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <br />
        <input
        className='border-none rounded p-2 mb-3 outline-none'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input
        className='border-none rounded p-2 mb-3 outline-none'
          type="password"
          placeholder="Confirm password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />{" "}
        <br />
        <input
        className='border-none rounded p-2 mb-3 outline-none signin' type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
