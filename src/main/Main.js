import React from "react";
import '../App.css';
import { Helmet } from "react-helmet";

function Main() {
  const IGTOKEN = process.env.REACT_APP_IG_TOKEN
  const imageSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/reserveBtnImg_CIcA4xu5V.jpeg'
  const imageSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/reserveBtnImg_CIcA4xu5V.jpeg'
  const imageSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/reserveBtnImg_CIcA4xu5V.jpeg'
  const imageSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/reserveBtnImg_CIcA4xu5V.jpeg'

  return (
    <div className='pageBody'>
      <div className='container'>
        <div className='col'>
          <div id="instafeed"></div>
        </div>
      </div>
      <div className='reserve-col'>
          <img
            className="reserve-img"
            src='https://ik.imagekit.io/r596hampx/reserveBtnImg_CIcA4xu5V.jpeg'
            srcSet={`${imageSizeSmall} 600w, ${imageSizeMed} 800w, ${imageSizeLarge} 1200w, ${imageSizeXlarge} 1600w `}
            alt=""
          />
          <div className="middle-btn">
            <a href="mailto:g.atallah@amoretalla.com" className="text">Reserve Appointment</a>
          </div>
      </div>

      <Helmet>
        <script type="text/javascript">{`
          var userFeed = new Instafeed({
            get: 'user',
            target: 'instafeed',
            limit: 4,
            resolution: 'low_resolution',
            accessToken: '${IGTOKEN}',
            template: '<a class="igLink" href="{{link}}"><img class="igImg" title="{{caption}}" src="{{image}}" /></a>'
          });
          userFeed.run();`}
        </script>
      </Helmet>
    </div>
  );
}

export default Main;
