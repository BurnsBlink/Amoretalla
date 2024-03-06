import React from "react";
import '../App.css';

const Events = () => {
  return (
    <div className='pageBody'>
      <div className='container'>
        <a href='https://www.nationalbridalmarket.com/' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
          <div className="col">
              <span className='eventTitle'>National Bridal Market - Chicago<br></br></span>
              <span className='eventTime'>3/17-3/18: 9 am - 6 pm || 3/19: 9 am - 3 pm<br></br></span>
              <span className='eventLocation'>222 Merchandise Mart Plaza<br></br></span>
              <span className='eventLocation'>7th Floor Market Suites<br></br></span>
              <span className='eventCity'>Chicago, IL 60654<br></br></span>
            </div>
            <div className='col-4 eventDate'>
              <span className='eventTitle'>BOOTH #2081</span><br />
              <span className='eventTime'>MAR 17-19th</span>
            </div>
          </div>
        </a>
        {/* <hr className='eventBorder'></hr>
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
        </a> */}
      </div>
    </div>
  );
};

export default Events;
