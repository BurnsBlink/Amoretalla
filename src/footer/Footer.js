import React from 'react';
import '../App.css';

function Footer() {
  return (
    <div className="appFooter row">
      <a
        className="socialLinks"
        href="https://www.facebook.com/amoretalla/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit our Facebook page"
      >
        <img
          src="https://ik.imagekit.io/r596hampx/tr:w-100/fb_OiuqGW6o8.png"
          alt="Facebook icon"
          height="20px"
          width="20px"
        />
      </a>
      <a
        className="socialLinks"
        href="https://www.instagram.com/amoretallabridal/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit our Instagram page"
      >
        <img
          src="https://ik.imagekit.io/r596hampx/tr:w-100/insta_upynJ6i0W.png"
          alt="Instagram icon"
          height="20px"
          width="20px"
        />
      </a>
      <a
        className="socialLinks"
        href="https://www.twitter.com/amoretallabride/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit our Twitter page"
      >
        <img
          src="https://ik.imagekit.io/r596hampx/tr:w-100/twitter_i2c0N4DFq.png"
          alt="Twitter icon"
          height="20px"
          width="20px"
        />
      </a>
      <div className="subt">Amorétalla LLC</div>
      <div className="subt">Copyright © All Rights Reserved</div>
    </div>
  );
}

export default Footer;