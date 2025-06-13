import React from "react";
import '../App.css';

const Events = () => {
  return (
    <div className='pageBody'>
      <div className='container'>
        <a href='https://www.nationalbridalmarket.com/' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
            <div className="col">
              <span className='eventTitle'>Nation Bridal Market<br></br></span>
              <span className='eventTime'>8/17 - 8/19<br></br></span>
              <span className='eventLocation'>222 Merchandise Mart Plaza<br></br></span>
              <span className='eventCity'>Chicago, IL 60654<br></br></span>
              <span className='eventTime'>Booth #1094<br></br></span>
            </div>
          </div>
        </a>
        <hr className='eventBorder'></hr>
        <a href='https://www.nationalbridalmarket.com/' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
            <div className="col">
              <span className='eventTitle'>New York Bridal Fashion Week<br></br></span>
              <span className='eventTime'>10/14 - 10/16<br></br></span>
              <span className='eventLocation'>417 5th Ave<br></br></span>
              <span className='eventCity'>Manhattan, NY 10016<br></br></span>
              <span className='eventTime'>Showroom 5B<br></br></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Events;
