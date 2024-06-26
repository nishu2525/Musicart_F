import React, { useEffect, useState } from 'react'
import Applogo from './Logo'
import Button from './Button'
import cart from '../Images/cart.png'
import Styles from './Styles/Navbarlogo.module.css'
import styles from './Styles/logo.module.css'
import style from './Styles/Button.module.css'
function Navbar2() {
 const [isOpen, setIsOpen] =useState(false)
 const [isLoggedIn,setIsLoggedIn]=useState(false)

 useEffect(()=>{
  const accessToken = localStorage.getItem('userToken');
  if (accessToken) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
 },[])

  const togglebtn=()=>{
      setIsOpen(!isOpen)
  }
  return (
    <div className={Styles.container}>
        <div className={Styles.left}>
        <Applogo className={styles.c_logo}/>
         <p className={Styles.left_p}>Home</p>
        {isLoggedIn ?  <p className={Styles.left_p}>Invoice</p>:""}
        </div>
     {isLoggedIn ? (   <div className={Styles.right}>
        <Button className={style.cart_btn} >
            <img src={cart} alt="cart" style={{height:"1.2rem", marginRight:"-0.5rem"}}/>
        <p>View Cart</p>
        <p>0</p>
      </Button>
            <div onClick={togglebtn} className={Styles.user_id}>NU</div>
            {isOpen && (
        <div className={Styles.user_logged}>
          <p>Nishad Umap</p>
          <p>Logout</p>
        </div>)}
        </div>):""}
         
    </div>
  )
}

export default Navbar2