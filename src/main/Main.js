import React, { useEffect, useState } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player'
import { longForm } from '../util/utilities'

function Main() {
  const [instagramFeed, setInstagramFeed] = useState()
  const reserveImgSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/howItWorks_YS7GFTUIi.jpeg'
  const reserveImgSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/howItWorks_YS7GFTUIi.jpeg'
  const reserveImgSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/howItWorks_YS7GFTUIi.jpeg'
  const reserveImgSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/howItWorks_YS7GFTUIi.jpeg'

  useEffect(() => {
    const IGTOKEN = process.env.REACT_APP_IG_TOKEN
    const data = <Helmet>
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
    setInstagramFeed(data)
  }, []);

  return (
    <div className='pageBodyMain'>
      <div className='row vPlayerRow'>
        <div className='col vPlayerWrapper'>
          <ReactPlayer
            className='react-player'
            url='/videos/walkway1.mp4'
            width='100%'
            height='100%'
            controls={false}
            loop={true}
            playing={true}
            muted={true}
            playsinline={true}
          />
        </div>
        <div className='col vPlayerWrapper'>
          <ReactPlayer
            className='react-player'
            url='/videos/walkway2.mp4'
            width='100.08%'
            height='100%'
            controls={false}
            loop={true}
            playing={true}
            muted={true}
            playsinline={true}
          />
        </div>
        <div className='col vPlayerWrapper'>
          <ReactPlayer
            className='react-player'
            url='/videos/walkway3.mp4'
            width='100%'
            height='100%'
            controls={false}
            loop={true}
            playing={true}
            muted={true}
            playsinline={true}
          />
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <h1 className='col mainTitleText'>DESIGNS FOR THE MODERN BRIDE</h1>
        </div>
        <div className='row'>
          <div className='col mainSubtitleText'>{longForm.mainPage.description}</div>
        </div>
      </div>

      <div className='instafeedContainer'>
        <div className='row'>
          <div className='col'>
            <div id='instafeed'></div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <h4 className='col mainTitleText'>TESTIMONIALS</h4>
        </div>
        <div className='row'>
          <div className='col mainSubtitleText'>{longForm.wedCompanyWeddingWear.quote}</div>
        </div>
        <div className='row'>
          <div className='col mainFooterText'>-{longForm.wedCompanyWeddingWear.author}</div>
        </div>
      </div>

      <div className='reserveCol'>
        <img
          className='reserveImg'
          src='https://ik.imagekit.io/r596hampx/howItWorks_YS7GFTUIi.jpeg'
          srcSet={`${reserveImgSizeSmall} 600w, ${reserveImgSizeMed} 800w, ${reserveImgSizeLarge} 1200w, ${reserveImgSizeXlarge} 1600w `}
          alt=''
        />
        <div className='middleBtn'>
          <a href='mailto:info@amoretalla.com' className='text'>Reserve Appointment</a>
        </div>
      </div>

      {instagramFeed}
    </div>
  );
}

export default Main;
