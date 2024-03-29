import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
import Styles from "./Styles/Signup.module.css";
import styles from "../Components/Styles/Button.module.css";
import Button from "../Components/Button";

import Footer from "../Components/Footer";
import Applogo from "../Components/Logo";
const Login = () => {
  const URL = "http://localhost:4000/api/auth/login";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e);
    // let name = e.target.name;
    //  let value = e.target.value;
    // Check if the input looks like an email
    // if (/^\S+@\S+\.\S+$/.test(value)) {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value, // Reset phone number
    });
    // } else {
    // setUser({
    //   ...user,
    //   email: "", // Reset email
    //   phone: value,
    // });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("resposne from server", res_data);
        // storeTokenLS(res_data.token)

        localStorage.setItem("userToken",res_data.token)
        setUser({
          // phone: "",
          email: "",
          password: "",
        });
        navigate("/");
      }
      console.log("logined in with ", response);
      // console.log("Number is ",response);
    } catch (error) {
      console.log("login error ", error);
    }

    console.log("Login data:", user.phone);
    localStorage.setItem("userNumber",user.phone)
  };

  const openSignup = () => {
    navigate("/Signup");
  };
  return (
    <div className={Styles.container}>
      <Applogo />
      <div className={Styles.form}>
        <h2 className={Styles.heading}>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className={Styles.login}>
            <label htmlFor='Enter your email or mobile number'>
              Enter your email or mobile number
            </label>
            <input
              type='text'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor='Password'>Password</label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={user.password}
              onChange={handleChange}
            />
            <Button>Continue</Button>
            <p>
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </p>
          </div>
        </form>
      </div>
      <div className={Styles.centered_text}>
        <div className={Styles.line}></div>
        <div className={Styles.text}>New to Musicart?</div>
        <div className={Styles.line}></div>
      </div>

      <Button className={styles.btn} onClick={openSignup}>
        Create your Musicart account
      </Button>
      <Footer />
    </div>
  );
};

export default Login;
