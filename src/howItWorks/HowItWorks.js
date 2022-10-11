import React from "react";
import '../App.css';

const HowItWorks = () => {
  return (
    <div className='pageBodyHowItWorks'>
      <div className='reserve-col'>
          <img className="reserve-img" src={process.env.PUBLIC_URL + '/images/howItWorks.jpg'} alt="" />
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
          <span className='col hIWTitle'>FINAL SKETCH REVIEW</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>Selection of final dress design.<br></br>
            Discussion of fabrication and embellishment details.
          </span>
        </div>

        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>3:</span>
          <span className='col hIWTitle'>FIRST FITTING</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>The first fitting is done in muslin to determine the perfect fit, silhouette, and design lines.<br></br>
            ​Fabric samples and embellishment samples are shown to client for selection.
          </span>
        </div>

        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>4:</span>
          <span className='col hIWTitle'>SECOND FITTING </span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>The second fitting is of your actual garment.<br></br>
            At this fitting we are perfecting the fit of the lining, stay, under layers, and bodice. 
          </span>
        </div>

        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>5:</span>
          <span className='col hIWTitle'>THIRD FITTING</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>At the third fitting your dress fully assembled.<br></br>
            ​At this fitting we are perfecting fit and hemlines.<br></br><br></br>

            <em>Please remember to bring your shoes!</em>
          </span>
        </div>

        <div className='row hIWRow'>
          <span className='col-2 hIWNumbers'>6:</span>
          <span className='col hIWTitle'>FINAL FITTING</span>
        </div>
        <div className='row'>
          <span className='col-2'></span>
          <span className='col hIWbody'>The dress is tried on one last time before the client takes it home.<br></br>
            This is typically two weeks prior to your event.<br></br><br></br>
            <em>If you selected this service, please come in full hair & make-up for studio portraits</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
