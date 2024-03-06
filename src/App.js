import React, { useState } from 'react'
import { NavLink, Route, Routes } from "react-router-dom"
import Hamburger from 'hamburger-react'
import './App.css';
import About from './about/About'
import ContactForm from './contact/ContactForm'
import Events from './events/Events'
import Gallery from './gallery/Gallery'
import HowItWorks from './howItWorks/HowItWorks'
import Main from './main/Main'

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div className="App">
      <nav className="navBar">
        <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
          <div className='mobileSubLinks'>
            <NavLink className='mobileSubLink' onClick={() => closeMenu()} to="/">Home</NavLink>
            <NavLink className='mobileSubLink' onClick={() => closeMenu()} to="/gallery">Gallery</NavLink>
            {/* <NavLink className='mobileSubLink' onClick={() => closeMenu()} to="/events">Events</NavLink> */}
            <NavLink className='mobileSubLink' onClick={() => closeMenu()} to="/howItWorks">How It Works</NavLink>
            <NavLink className='mobileSubLink' onClick={() => closeMenu()} to="/about">About Us</NavLink>
            <NavLink className='mobileSubLink' onClick={() => closeMenu()} to="/contact">Contact Us</NavLink>
          </div>
        </ul>
      </nav>
      <div className='globalHeader'>
        <div className='col'>
          <button className={`${!navbarOpen ? "hamburgerMenu" : "hamburgerMenuOpen"}`} onClick={handleToggle}>
            <Hamburger onClick={handleToggle} toggled={navbarOpen} toggle={setNavbarOpen} />
          </button>
          <NavLink to="/"><img className='longNameLogo' src='https://ik.imagekit.io/r596hampx/amoreLongNameBlack_QsCaHQlI4.png' alt="" /></NavLink>
        </div>
        <div className='subLinks'>
          <NavLink className='subLink' to="/gallery">Gallery</NavLink>
          <NavLink className='subLink' to="/events">Events</NavLink>
          {/* <NavLink className='subLink' to="/howItWorks">How It Works</NavLink> */}
          <NavLink className='subLink' to="/about">About Us</NavLink>
          <NavLink className='subLink' to="/contact">Contact Us</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="events" element={<Events />} />
        <Route path="howItWorks" element={<HowItWorks />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="appFooter row">
      <a className="socialLinks" href='https://www.facebook.com/amoretalla/' target='_blank' rel='noreferrer'>
        <img src='https://ik.imagekit.io/r596hampx/tr:w-100/fb_OiuqGW6o8.png' alt="" height="20px" width="20px" />
      </a>
      <a className="socialLinks" href='https://www.instagram.com/amoretallabridal/' target='_blank' rel='noreferrer'>
        <img src='https://ik.imagekit.io/r596hampx/tr:w-100/insta_upynJ6i0W.png' alt="" height="20px" width="20px" />
      </a>
      <a className="socialLinks" href='https://www.twitter.com/amoretallabride/' target='_blank' rel='noreferrer'>
        <img src='https://ik.imagekit.io/r596hampx/tr:w-100/twitter_i2c0N4DFq.png' alt="" height="20px" width="20px" />
      </a>
      <div className="subt">Amorétalla LLC</div>
      <div className="subt">Copyright © All Rights Reserved</div>
    </div>
  )
}

export default App;
