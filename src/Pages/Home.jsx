import React, { useEffect,useState } from 'react'
// import { Link } from 'react-router-dom';
// import axios from 'axios';

import Styles from './Styles/Home.module.css'
// import styles from '../Components/Styles/logo.module.css'
// import cart from '../Images/cart.png'
// import Applogo from '../Components/Logo'
import Footer from '../Components/Footer'
import Feedback from '../Components/Feedback'
import Banner from '../Components/Banner'
import Searchbar from '../Components/Searchbar'
import Navbar from '../Components/Navbar'
// import Navbar2 from '../Components/Navbar2'
import Header from '../Components/Header'
// const Home = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const [filteredProducts, setFilteredProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);
//   const [initials, setInitials] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [userName, setUserName] = useState('');


//   const handleOpenModal = () => {
//     if (isLoggedIn) {
//       setShowModal(true);
//     } else {
//       console.log('Please log in to add a card.');
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     const accessToken = localStorage.getItem('data');
//     if (accessToken) {
//       setIsLoggedIn(true);
//       const userName = localStorage.getItem('data');
//       const { user } = JSON.parse(userName);
//       const { name } = user;

//       if (name) {
//         setUserName(name);
//         const initials = name
//           .split(' ')
//           .map((name) => name[0])
//           .join('');
//         setInitials(initials);
//       }
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           // 'http://localhost:8080/api/v1/products/allProduct'
//         );
//         setProducts(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);


//   const addToCartHandler = (product) => {
//     setCount(count + 1);
//   };


//   const logout = () => {
//     localStorage.removeItem('data');
//     window.location.reload();
//   };


//   return (
//     <div className={Styles.container}>
//     <Navbar />
//    <div className={Styles.navlogo}>
//    <Applogo className={styles.c_logo}/>
//    {isLoggedIn && (
//           <div className={Styles.isLog}>
//             <div className={Styles.routes}>
//               <Link to='/'>Home</Link>
//               <Link to='/invoice'>Invoice</Link>
//             </div>
//             <div className={Styles.settings}>
//               <Link to='/cart'>
//                 {' '}
//                 <button className={Styles.cartBtn}>
//                   <img src={cart} alt='cart' />
//                   <span>View Cart</span>
//                   <span>{count}</span>
//                 </button>
//               </Link>
//               <div className={Styles.profile} onClick={handleOpenModal}>
//                 {initials}
//               </div>
//             </div>
//           </div>
//         )}
//         {!isLoggedIn && <Link to='/'>Home</Link>}
//    </div>
//     <div>
//     <Banner />
//     <Searchbar />
    
//     <Feedback />
//     <Footer />
//     </div>
//     {isLoggedIn ? <Feedback /> : ''}
//       <Footer />
//       {showModal ? (
//         <div onClick={handleCloseModal} className={Styles.modal}>
//           <div className={Styles.modalDetails}>{userName}</div>
//           <div className={Styles.modalLine}></div>
//           <div className={Styles.modalDetails}>
//             <button className={Styles.modalDetails} onClick={logout}>
//               Logout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <span></span>
//       )}
// </div>
//   )
// }

// export default Home




function Home() {
const [isLoggedIn,setIsLoggedIn]=useState(false)

useEffect(()=>{
  const accessToken = localStorage.getItem('userToken');
  if (accessToken) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
},[])

  return (
    <div className={Styles.container}>
    <Navbar />
    <Header />
    <Banner />
    <Searchbar />
    {isLoggedIn ? <Feedback />:""}
    <Footer />
    </div>
  )
}

export default Home