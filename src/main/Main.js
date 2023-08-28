import React, { useEffect, useState } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player'

function Main() {
  const [instagramFeed, setInstagramFeed] = useState()
  const reserveImgSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/reserveBtnImg_CIcA4xu5V.jpeg'
  const reserveImgSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/reserveBtnImg_CIcA4xu5V.jpeg'
  const reserveImgSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/reserveBtnImg_CIcA4xu5V.jpeg'
  const reserveImgSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/reserveBtnImg_CIcA4xu5V.jpeg'
  const mainImgSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/maindress_H2sXJk6xW.jpg'
  const mainImgSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/maindress_H2sXJk6xW.jpg'
  const mainImgSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/maindress_H2sXJk6xW.jpg'
  const mainImgSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/maindress_H2sXJk6xW.jpg'

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
      <div className='imgCol'>
        <img
          className='mainDressImg'
          src='https://ik.imagekit.io/r596hampx/maindress_H2sXJk6xW.jpg'
          srcSet={`${mainImgSizeSmall} 600w, ${mainImgSizeMed} 800w, ${mainImgSizeLarge} 1200w, ${mainImgSizeXlarge} 1600w `}
          alt=''
        />
      </div>
      <div className='container'>
        <div className='row'>
          <h1 className='col mainTitleText'>
            CUSTOM DESIGNS FOR THE MODERN BRIDE
          </h1>
        </div>
        <div className='row'>
          <div className='col mainSubtitleText'>
            At Amorétalla, we seamlessly incorporate timeless opulence & hand-sewn Haute Couture techniques.  Make your remarkable day more extraordinary with a dress designed just for you.
          </div>
        </div>
      </div>
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
      <div className='container instafeedContainer'>
        <div className='row'>
          <div className='col'>
            <div id='instafeed'></div>
          </div>
        </div>
      </div>
      <div className='reserveCol'>
        <img
          className='reserveImg'
          src='https://ik.imagekit.io/r596hampx/reserveBtnImg_CIcA4xu5V.jpeg'
          srcSet={`${reserveImgSizeSmall} 600w, ${reserveImgSizeMed} 800w, ${reserveImgSizeLarge} 1200w, ${reserveImgSizeXlarge} 1600w `}
          alt=''
        />
        <div className='middleBtn'>
          <a href='mailto:g.atallah@amoretalla.com' className='text'>Reserve Appointment</a>
        </div>
      </div>
      {instagramFeed}
    </div>
  );
}

export default Main;
