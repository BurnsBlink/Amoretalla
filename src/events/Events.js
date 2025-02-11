import React from "react";
import '../App.css';

const Events = () => {
  return (
    <div className='pageBody'>
      <div className='container'>
        <a href='https://janenesbridal.com/events' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
            <div className="col">
              <span className='eventTitle'>Janene's Bridal Boutique<br></br></span>
              <span className='eventTime'>2/14 - 3/2<br></br></span>
              <span className='eventLocation'>2226S Shore Ctr<br></br></span>
              <span className='eventCity'>Alameda, CA 94501<br></br></span>
              <span className='eventTime'>Trunk Show<br></br></span>
            </div>
          </div>
        </a>
        <hr className='eventBorder'></hr>
        <a href='https://www.nationalbridalmarket.com/' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
            <div className="col">
              <span className='eventTitle'>National Bridal Market Chicago<br></br></span>
              <span className='eventTime'>3/9 - 3/11<br></br></span>
              <span className='eventLocation'>222 Merchandise Mart Plz<br></br></span>
              <span className='eventCity'>Chicago, IL 60654<br></br></span>
              <span className='eventTime'>Booth #4060<br></br></span>
            </div>
          </div>
        </a>
        <hr className='eventBorder'></hr>
        <a href='https://www.virginiasbridal.com/' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
            <div className="col">
              <span className='eventTitle'>Virginia's Bridal<br></br></span>
              <span className='eventTime'>3/22 - 3/30<br></br></span>
              <span className='eventLocation'>55 Church St<br></br></span>
              <span className='eventCity'>White Plains, NY 10601<br></br></span>
              <span className='eventTime'>Trunk Show<br></br></span>
            </div>
          </div>
        </a>
        <hr className='eventBorder'></hr>
        <a href='https://sorellevitacouture.com/' className='eventLink' target='_blank' rel='noreferrer'>
          <div className="row">
            <div className="col">
              <span className='eventTitle'>Sorelle Vita Couture<br></br></span>
              <span className='eventTime'>4/20 - 4/21<br></br></span>
              <span className='eventLocation'>626 N Alafaya Trl<br></br></span>
              <span className='eventCity'>Orlando, FL 32828<br></br></span>
              <span className='eventTime'>Trunk Show<br></br></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Events;
