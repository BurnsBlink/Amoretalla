import React from "react";
import '../App.css';

const Events = () => {
  return (
    <div className='page-body'>
      <div className='container'>
        <a href='https://www.bridalshowsri.com/' target='_blank' rel='noreferrer'>
          <button className='event-link'>
            <div className="row">
              <div className='col-4 event-date'>
                <h4>OCT <br></br>16th</h4>
              </div>
              <div className="col">
                <span className='event-title'>Rhode Island Bridal & Wedding Expo<br></br></span>
                <span className='event-time'>Sun, 1 – 5 PM<br></br></span>
                <span className='event-location'>Rhode Island Convention Center, 1 Sabin St<br></br></span>
                <span className='event-city'>Providence, RI<br></br></span>
              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Events;
