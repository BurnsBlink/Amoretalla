import React from 'react';
import { longForm } from '../util/utilities';
import BeholdWidget from '@behold/react';
import '../App.css';

const getImageSrcSet = (baseUrl) => ({
  src: `${baseUrl}?tr=w-1200`,
  srcSet: `${baseUrl}?tr=w-600 600w, ${baseUrl}?tr=w-800 800w, ${baseUrl}?tr=w-1200 1200w, ${baseUrl}?tr=w-1600 1600w`,
});

function Main() {
  const reserveImg = getImageSrcSet(
    'https://ik.imagekit.io/r596hampx/howItWorks_YS7GFTUIi.jpeg'
  );

  return (
    <div className="pageBodyMain">
      <div className="heroSection">
        <img
          className="heroImage"
          src={`${process.env.REACT_APP_PROXY_URL}/api/proxy-image?url=${encodeURIComponent(
            'https://drive.google.com/thumbnail?id=1bid-1kyNE95lfpdKlFhsInVKS4Xx1EiH&sz=w1920'
          )}`}
          alt="Modern bridal wedding dress"
        />
      </div>

      <div className="container">
        <div className="row">
          <h1 className="col mainTitleText">DESIGNS FOR THE MODERN BRIDE</h1>
        </div>
        <div className="row">
          <div className="col subtitleText">{longForm.mainPage.description}</div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h4 className="col mainTitleText">FOLLOW US ON INSTAGRAM</h4>
        </div>
        <BeholdWidget feedId="YSmjIYk6j1DlWTymSpRf" />
      </div>

      <div className="container">
        <div className="row">
          <h4 className="col mainTitleText">TESTIMONIALS</h4>
        </div>
        <div className="row">
          <div className="col subtitleText">{longForm.wedCompanyWeddingWear.quote}</div>
        </div>
        <div className="row">
          <div className="col mainFooterText">
            -{longForm.wedCompanyWeddingWear.author}
          </div>
        </div>
      </div>

      <div className="reserveCol">
        <img
          className="reserveImg"
          src={reserveImg.src}
          srcSet={reserveImg.srcSet}
          alt="Reserve Appointment"
          loading="lazy"
        />
        <div className="middleBtn">
          <a
            href="mailto:info@amoretalla.com"
            className="text"
            aria-label="Reserve Appointment via Email"
          >
            Reserve Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;