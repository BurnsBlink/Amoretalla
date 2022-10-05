import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import Events from './events/Events';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="App">
      <div className='global-header'>
        <img className='longNameLogo' src={process.env.PUBLIC_URL + '/images/amoreLongNameBlack.png'} alt="" />
        <div className='sub-links'>
          <NavLink className='sub-link' to="/events">Events</NavLink>
          <NavLink className='sub-link' to="/about">About Us</NavLink>
          <NavLink className='sub-link' to="/contact">Contact Us</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="events" element={<Events />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <div>
      <img className="home-logo" src={process.env.PUBLIC_URL + '/images/amoreBlack.png'} alt="" height="400px" width="400px" />
    </div>
  );
}

function About() {
  return (
    <div className='page-body'>
      <div className='container'>
        <img className='about-us-profile-img "col-md-8">' src={process.env.PUBLIC_URL + '/images/gabeProf.png'} alt="" />
        <h3>MEET THE DESIGNER</h3><br></br>
        <p>
          Gabe Atallah, principal of Amoretalla Couture, began his career working for the
          prestigious Bridal House Priscilla of Boston, the couturier famous for working
          on the wedding gown of Princess Grace of Monaco and designing the gowns of
          three daughters of two U.S. Presidents. A graduate of the Boston School of Design,
          Mr. Atallah’s design aesthetics use fit, form and function to create each legendary gown.
          <br></br><br></br>
          Mr. Atallah designs for the modern bride, seamlessly incorporating timeless
          opulence using hand-sewn Haute Couture techniques. His fabrics, laces,
          pearls and genuine Swarovski crystals, including precious stones, are curated from around the world.
          <br></br><br></br>
          Mr. Atallah has been sketching and designing since the age of eight. His inspiration for fashion
          comes from traveling the world and being immersed in the beauty of nature, art and architecture. Mr. Atallah was born in
          Beirut, Lebanon, once known as Paris of the Middle East, and is the proud father of three children.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="app-footer row">
      <a className="social-links" href='https://www.facebook.com/amoretalla/' target='_blank' rel='noreferrer'>
        <img src={process.env.PUBLIC_URL + '/images/fb.png'} alt="" height="20px" width="20px" />
      </a>
      <a className="social-links" href='https://www.instagram.com/amoretallabridal/' target='_blank' rel='noreferrer'>
        <img src={process.env.PUBLIC_URL + '/images/insta.png'} alt="" height="20px" width="20px" />
      </a>
      <a className="social-links" href='https://www.twitter.com/amoretallabride/' target='_blank' rel='noreferrer'>
        <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="" height="20px" width="20px" />
      </a>
      <div className="subt">Amoretalla LLC</div>
      <div className="subt">Copyright © All Rights Reserved</div>
    </div>
  )
}

export default App;
