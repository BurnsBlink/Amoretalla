import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import Events from './events/Events';
import Contact from './contact/Contact';
import HowItWorks from './howItWorks/HowItWorks'
import Main from './main/Main'
import About from './about/About'

function App() {
  return (
    <div className="App">
      <div className='globalHeader'>
        <NavLink to="/"><img className='longNameLogo' src={process.env.PUBLIC_URL + '/images/amoreLongNameBlack.png'} alt="" /></NavLink>
        <div className='subLinks'>
          <NavLink className='subLink' to="/events">Events</NavLink>
          <NavLink className='subLink' to="/howItWorks">How It Works</NavLink>
          <NavLink className='subLink' to="/about">About Us</NavLink>
          <NavLink className='subLink' to="/contact">Contact Us</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="events" element={<Events />} />
        <Route path="howItWorks" element={<HowItWorks />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="appFooter row">
      <a className="socialLinks" href='https://www.facebook.com/amoretalla/' target='_blank' rel='noreferrer'>
        <img src={process.env.PUBLIC_URL + '/images/fb.png'} alt="" height="20px" width="20px" />
      </a>
      <a className="socialLinks" href='https://www.instagram.com/amoretallabridal/' target='_blank' rel='noreferrer'>
        <img src={process.env.PUBLIC_URL + '/images/insta.png'} alt="" height="20px" width="20px" />
      </a>
      <a className="socialLinks" href='https://www.twitter.com/amoretallabride/' target='_blank' rel='noreferrer'>
        <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="" height="20px" width="20px" />
      </a>
      <div className="subt">Amoretalla LLC</div>
      <div className="subt">Copyright © All Rights Reserved</div>
    </div>
  )
}

export default App;
