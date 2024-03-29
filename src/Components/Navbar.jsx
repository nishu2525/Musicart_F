import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from './Styles/Navbar.module.css'
import phone_logo from '../Images/phonecall.png'
function Navbar() {
const [isLoggedIn,setIsLoggedIn]=useState(false)

const [number, setNumber]=useState("")

// const testUserLogin =()=>{
//   setIsLoggedIn(true)
//   const userContactNumber = '9898988989'; 
//     setNumber(userContactNumber);
    
// }

// useEffect(()=>{
//   const userIsLoggedIn = true;
//   setIsLoggedIn(userIsLoggedIn);
//   if (userIsLoggedIn) {
//     const userContactNumber = '9307992632'; 
//     setNumber(userContactNumber);
//   } else {
//     setNumber('912121131313'); // Set default contact number if user is not logged in
//   }
// },[])
// const userContactNumber = 
useEffect(() => {
  const accessToken = localStorage.getItem('userToken');
  const conatctNum = localStorage.getItem('userNumber');
  console.log(accessToken)
  if (accessToken) {
    setIsLoggedIn(true);
    setNumber(conatctNum);
  } else {
    setIsLoggedIn(false);
  }
}, []);

  const navigate = useNavigate();

  const loginClick = () => {
    navigate('/login'); 
  };
  const SignupClick = () => {
    navigate('/Signup'); 
  };
  return (
    <div className={Styles.container}>
          {isLoggedIn ? <p className={Styles.phone}><img src={phone_logo} alt="" />{number}</p> : ""}
        <p>Get 50% off on selected items  | &nbsp; &nbsp; Shop Now</p>
        <p> {isLoggedIn ? <span style={{visibility:"hidden"}}>Hii</span> :<span onClick={loginClick}>Login</span> | <span onClick={SignupClick}>Signup</span>}</p>
    </div>
  )
}

export default Navbar