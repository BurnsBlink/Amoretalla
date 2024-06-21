import React from "react";
import '../App.css';

const Events = () => {
  return (
    <div className='pageBody'>
      <div className='container'>
        <a href='https://onefinedaybridalmarket.com/' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
          <div className="col">
              <span className='eventTitle'>One Fine Day Bridal Market - NY<br></br></span>
              <span className='eventTime'>10/8-10/9: 9 am - 5 pm || 10/10: 9 am - 4 pm<br></br></span>
              <span className='eventLocation'>Canoe Studios<br></br></span>
              <span className='eventLocation'>601 W 25th St<br></br></span>
              <span className='eventCity'>New York, NY 10001<br></br></span>
            </div>
            <div className='col-4 eventDate'>
              <span className='eventTitle'>BOOTH A8</span><br />
              <span className='eventTime'>OCT 8th-10th</span>
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
