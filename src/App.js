import React, { useState } from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'; // Added Navigate for redirection
import Hamburger from 'hamburger-react';
import './App.css';
import About from './about/About';
import ContactForm from './contact/ContactForm';
import Events from './events/Events';
import Gallery from './gallery/Gallery';
import Collection from './collection/Collection';
import HowItWorks from './howItWorks/HowItWorks';
import Main from './main/Main';
import Product from './product/Product';
import Footer from './footer/Footer';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => setNavbarOpen(!navbarOpen);
  const closeMenu = () => setNavbarOpen(false);

  return (
    <div className="App">
      <nav className="navBar">
        <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          <div className="mobileSubLinks">
            <NavLink className="mobileSubLink" onClick={closeMenu} to="/" aria-label="Home">
              Home
            </NavLink>
            <NavLink className="mobileSubLink" onClick={closeMenu} to="/collections" aria-label="Collections">
              Collections
            </NavLink>
            <NavLink className="mobileSubLink" onClick={closeMenu} to="/gallery" aria-label="Gallery">
              Gallery
            </NavLink>
            <NavLink className="mobileSubLink" onClick={closeMenu} to="/events" aria-label="Events">
              Events
            </NavLink>
            <NavLink className="mobileSubLink" onClick={closeMenu} to="/howItWorks" aria-label="How It Works">
              How It Works
            </NavLink>
            <NavLink className="mobileSubLink" onClick={closeMenu} to="/about" aria-label="About Us">
              About Us
            </NavLink>
            <NavLink className="mobileSubLink" onClick={closeMenu} to="/contact" aria-label="Contact Us">
              Contact Us
            </NavLink>
          </div>
        </ul>
      </nav>
      <div className="globalHeader">
        <button
          className={`hamburgerMenu ${navbarOpen ? 'hamburgerMenuOpen' : ''}`}
          onClick={handleToggle}
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
        >
          <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} />
        </button>
        <NavLink to="/">
          <img
            className="longNameLogo"
            src="https://ik.imagekit.io/r596hampx/amoreLongNameBlack_QsCaHQlI4.png"
            alt="Amorétalla logo"
          />
        </NavLink>
        <div className="subLinks">
          <NavLink className="subLink" to="/collections" aria-label="Collections">
            Collections
          </NavLink>
          {/* <NavLink className="subLink" to="/gallery" aria-label="Gallery">
            Gallery
          </NavLink> */}
          <NavLink className="subLink" to="/events" aria-label="Events">
            Events
          </NavLink>
          {/* <NavLink className="subLink" to="/howItWorks" aria-label="How It Works">
            How It Works
          </NavLink> */}
          <NavLink className="subLink" to="/about" aria-label="About Us">
            About Us
          </NavLink>
          <NavLink className="subLink" to="/contact" aria-label="Contact Us">
            Contact Us
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collections" element={<Navigate to="/collections/springSummer25" />} /> {/* Default to first collection */}
        <Route path="/collections/:collection" element={<Collection />} /> {/* Dynamic route */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/howItWorks" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/product/:name" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;