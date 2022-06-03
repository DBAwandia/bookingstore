import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Featured from '../Components/Featured'
import PropertyList from '../Components/PropertyList'

import './Home.css'
import FeaturedProperties from '../Components/FeaturedProperties'
import MailList from '../Components/MailList'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div >
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          < PropertyList/>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home