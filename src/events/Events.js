import React from "react";
import '../App.css';

const Events = () => {
  return (
    <div className='pageBody'>
      <div className='container'>
        <a href='https://www.bridalshowsri.com/' className='eventLink' target='_blank' rel='noreferrer'>
            <div className="row">
              <div className='col-4 eventDate'>
                <h4>OCT <br></br>16th</h4>
              </div>
              <div className="col">
                <span className='eventTitle'>Rhode Island Bridal & Wedding Expo<br></br></span>
                <span className='eventTime'>Sunday 1 pm – 5 pm<br></br></span>
                <span className='eventLocation'>Rhode Island Convention Center, 1 Sabin St<br></br></span>
                <span className='eventCity'>Providence, RI 02903<br></br></span>
              </div>
            </div>
        </a>
        <hr className='eventBorder'></hr>
        <a href='https://www.tristatebridalshows-nc.com/' className='eventLink' target='_blank' rel='noreferrer'>
            <div className="row">
              <div className='col-4 eventDate'>
                <h4>JAN<br></br>14th & 15th</h4>
              </div>
              <div className="col">
                <span className='eventTitle'>New York Bridal & Wedding Expo<br></br></span>
                <span className='eventTime'>Saturday & Sunday 12 pm - 5 pm<br></br></span>
                <span className='eventLocation'>Nassau Veterans Memorial Coliseum, 1255 Hempstead Tpke<br></br></span>
                <span className='eventCity'>Uniondale, NY 11553<br></br></span>
              </div>
            </div>
        </a>
      </div>
    </div>
  );
};

export default Events;
