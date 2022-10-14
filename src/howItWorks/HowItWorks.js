import React from "react";
import '../App.css';

const HowItWorks = () => {
  const imageSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/howItWorks_YS7GFTUIi.jpeg'
  const imageSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/howItWorks_YS7GFTUIi.jpeg'
  const imageSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/howItWorks_YS7GFTUIi.jpeg'
  const imageSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/howItWorks_YS7GFTUIi.jpeg'

  return (
    <div className='pageBodyHowItWorks'>
      <div className='imgCol'>
          <img
            className="reserveImg"
            src='https://ik.imagekit.io/r596hampx/howItWorks_YS7GFTUIi.jpeg'
            srcSet={`${imageSizeSmall} 600w, ${imageSizeMed} 800w, ${imageSizeLarge} 1200w, ${imageSizeXlarge} 1600w `}
            alt=""
          />
          <div className="middlePlacement">
            <p className="howItWorksText">HOW IT WORKS</p>
          </div>
      </div>
      <div className='container'>
        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>1:</span>
          <span className='col hIWTitle'>CONSULTATION</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>Conceptual meeting with Gabe Atallah where you establish general direction for the dress.<br></br>
              ​Live sketching by the designer. <br></br><br></br>
              <em>Please bring any inspiration images that may help us understand your vision </em>
          </span>
        </div>
        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>2:</span>
          <span className='col hIWTitle'>FIRST FITTING</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>The first fitting to determine the perfect fit, silhouette, and design lines.
          </span>
        </div>
        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>3:</span>
          <span className='col hIWTitle'>SECOND FITTING </span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>The second fitting is of your garment.<br></br>
            At this fitting we are making sure all ideas & inspiration are incorporated. 
          </span>
        </div>
        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>4:</span>
          <span className='col hIWTitle'>THIRD FITTING</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>At third fitting your dress is almost fully assembled.<br></br>
            ​At this fitting we are perfecting fit and hemlines.
          </span>
        </div>
        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>5:</span>
          <span className='col hIWTitle'>FINAL FITTING</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>The dress is tried on one last time before the client takes it home.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
