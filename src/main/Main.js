import React, { useEffect } from 'react';
import '../App.css';
// import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
// import { Link } from 'react-router-dom';
import { longForm } from '../util/utilities';

// Utility for image srcSet
const getImageSrcSet = (baseUrl) => ({
  src: `${baseUrl}?tr=w-1200`,
  srcSet: `${baseUrl}?tr=w-600 600w, ${baseUrl}?tr=w-800 800w, ${baseUrl}?tr=w-1200 1200w, ${baseUrl}?tr=w-1600 1600w`,
});

function Main() {
  const reserveImg = getImageSrcSet('https://ik.imagekit.io/r596hampx/howItWorks_YS7GFTUIi.jpeg');

  useEffect(() => {
    // Commented out Instafeed due to client-side token exposure
    // Recommend server-side fetching for security
    /*
    const IGTOKEN = process.env.REACT_APP_IG_TOKEN;
    return <Helmet>
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
    </Helmet>;
    */
  }, []);

  return (
    <div className="pageBodyMain">
      <div className="row vPlayerRow">
        {['walkway1.mp4', 'walkway2.mp4', 'walkway3.mp4'].map((video, index) => (
          <div key={video} className="col vPlayerWrapper">
            <ReactPlayer
              className="react-player"
              url={`/videos/${video}`}
              width={index === 1 ? '100.08%' : '100%'}
              height="100%"
              controls={false}
              loop={true}
              playing={true}
              muted={true}
              playsinline={true}
              aria-label={`Promotional video ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          <h1 className="col mainTitleText">DESIGNS FOR THE MODERN BRIDE</h1>
        </div>
        <div className="row">
          <div className="col subtitleText">{longForm.mainPage.description}</div>
        </div>
        {/* <div className="row">
          <Link to="/collection" className="view-collection-btn">
            View Collection
          </Link>
        </div> */}
      </div>
      {/* Instagram feed disabled for security */}
      <div className="container">
        <div className="row">
          <h4 className="col mainTitleText">TESTIMONIALS</h4>
        </div>
        <div className="row">
          <div className="col subtitleText">{longForm.wedCompanyWeddingWear.quote}</div>
        </div>
        <div className="row">
          <div className="col mainFooterText">-{longForm.wedCompanyWeddingWear.author}</div>
        </div>
      </div>
      <div className="reserveCol">
        <img
          className="reserveImg"
          src={reserveImg.src}
          srcSet={reserveImg.srcSet}
          alt="Reserve Appointment"
          loading="lazy"
        />
        <div className="middleBtn">
          <a href="mailto:info@amoretalla.com" className="text" aria-label="Reserve Appointment via Email">
            Reserve Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;