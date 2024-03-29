import React, { useEffect, useState } from 'react'
import Applogo from './Logo'
import Button from './Button'
import cart from '../Images/cart.png'
import Styles from './Styles/Navbarlogo.module.css'
import styles from './Styles/logo.module.css'
import style from './Styles/Button.module.css'
function Header() {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [isOpen, setIsOpen] =useState(false)

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
        <div className={Styles.right}>
        <div className={Styles.btN}>
        <Button className={style.cart_btn} >
            <img src={cart} alt="cart" style={{height:"1.2rem", marginRight:"-0.5rem"}}/>
        <p>View Cart</p>
        <p>0</p>
      </Button>
        </div>
        <div className={Styles.user}>
        <span onClick={togglebtn} className={Styles.user_id}>NU</span>
            {isOpen && (
        <div className={Styles.user_logged}>
          <span>Nishad Umap</span>
          <span>Logout</span>
        </div>)}
        </div>
        </div>
    </div>
  )
}

export default Header