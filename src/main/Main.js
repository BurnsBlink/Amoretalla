import React from "react";
import '../App.css';
// import { Helmet } from "react-helmet";

function Main() {
  return (
    <div className='pageBodyHowItWorks'>
      <div className='row'>
        <div className='col'>
          {/* <div id="instafeed"></div> */}
        </div>
      </div>
      <div className='reserve-col'>
          <img className="reserve-img" src={process.env.PUBLIC_URL + '/images/reserveBtnImg.jpeg'} alt="" />
          <div className="middle-btn">
            <a href="mailto:g.atallah@amoretalla.com" className="text">Reserve Appointment</a>
          </div>
      </div>

      {/* <Helmet>
        <script type="text/javascript">{`
          var userFeed = new Instafeed({
            get: 'user',
            target: 'instafeed',
            limit: 8,
            resolution: 'low_resolution',
            accessToken: '${IGTOKEN}',
            template: '<a class="igLink" href="{{link}}"><img class="igImg" title="{{caption}}" src="{{image}}" /></a>'
          });
          userFeed.run();`}
        </script>
      </Helmet> */}
    </div>
  );
}

export default Main;
