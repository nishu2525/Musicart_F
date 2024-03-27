import React from 'react'

import Footer from '../Components/Footer'
import Styles from './Styles/Home.module.css'
import Feedback from '../Components/Feedback'
import Banner from '../Components/Banner'
import Searchbar from '../Components/Searchbar'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
const Home = () => {
  return (
    <div className={Styles.container}>
    <Navbar />
   <Navbar2/>
    <Banner />
    <Searchbar />
    <Feedback />
    <Footer />
</div>
  )
}

export default Home