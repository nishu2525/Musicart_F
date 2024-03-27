import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Styles from "./Styles/Signup.module.css";
import Applogo from '../Components/Logo';
import Button from "../Components/Button";
import Footer from "../Components/Footer";
const Signup = () => {
    const navigate = useNavigate();
  const URL = "http://localhost:4000/api/auth/register"

  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  })

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
     let value = e.target.value;

    setUser({
      ...user,
      [name]:value
    })
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(user);
    try {
        const response =await fetch (URL,{
        method :"POST",
        headers:{
        "Content-Type": "application/json"
        },
      body:JSON.stringify(user)
        });
        if(response.ok){
      const res_data= await response.json();
      console.log("resposne from server", res_data);
    //   console.log(res_data.token)
      setUser({
        username: "",
        phone: "",
        email: "",
        password: "",
      })
      navigate('/')
        }
    console.log(response);

    } catch (error) {
      console.log("Resgister",error);
    }
  }
  const openlogin=()=>{
    navigate('/login'); 
   }
  return (
    <div className={Styles.container}>
      <Applogo />
      <div className={Styles.form}>
        <p className={Styles.heading}>Create Account</p>
        <form onSubmit={handleSubmit}>
          <div className={Styles.login}>
            <label htmlFor='Your name'>Your name</label>
            <input
              type='text'
              name='username'
              value={user.username}
              onChange={handleInput}
              id="username"
              required
              autoComplete="off"
            />

            <label htmlFor='Mobile number'>Mobile number</label>
            <input
              type='number'
              name='phone'
              value={user.phone}
              onChange={handleInput}
              id="phone"
              required
              autoComplete="off"
            />

            <label htmlFor='Email Id'>Email Id</label>
            <input
              type='email'
              name='email'
              value={user.email}
              onChange={handleInput}
              id="email"
              required
              autoComplete="off"
            />

            <label htmlFor='Password'>Password</label>
            <input
              type='password'
              name='password'
              value={user.password}
              onChange={handleInput}
              id="password"
              required
              autoComplete="off"
            />
            <p style={{ fontWeight: 600 }}>
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Musicart.
              Message and data rates may apply.
            </p>
            <Button >Continue</Button>
            <p>
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </p>
          </div>
        </form>

      </div>
      <p className={Styles.already} >
        Already have an account? <span onClick={openlogin}>Sign in</span>
      </p>
      <Footer/>
    </div>
  )
}

export default Signup
