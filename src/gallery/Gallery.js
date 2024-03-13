import React, { useState } from 'react';
import SwiperGallery from '../swiper/SwiperGallery'
import '../App.css';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

function Gallery() {
  const [open, setOpen] = useState(false)
  const aColcSizeSmall = 'https://ik.imagekit.io/r596hampx/cover24_2Aikc_eC-.png'
  const aColcSizeMed = 'https://ik.imagekit.io/r596hampx/cover24_2Aikc_eC-.png'
  const sprSumSizeSmall = 'https://ik.imagekit.io/r596hampx/AMORETALLA_LOOKBOOK_2024_SPREADS_AdDFSTA66.jpg'
  const sprSumSizeMed = 'https://ik.imagekit.io/r596hampx/AMORETALLA_LOOKBOOK_2024_SPREADS_AdDFSTA66.jpg'

  const firstColcSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/0794_QyTGXKlVr.JPG'
  const firstColcSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/0794_QyTGXKlVr.JPG'

  const blossomSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Blossom.jpg'
  const blossomSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Blossom.jpg'
  const blossomSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Blossom.jpg'
  const blossomSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Blossom.jpg'

  const blakeSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Blake.jpg'
  const blakeSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Blake.jpg'
  const blakeSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Blake.jpg'
  const blakeSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Blake.jpg'

  const bellaroseSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Bellarose.jpg'
  const bellaroseSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Bellarose.jpg'
  const bellaroseSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Bellarose.jpg'
  const bellaroseSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Bellarose.jpg'

  const brielleSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Brielle.jpg'
  const brielleSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Brielle.jpg'
  const brielleSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Brielle.jpg'
  const brielleSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Brielle.jpg'

  const belgiqueSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Belgique.jpg'
  const belgiqueSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Belgique.jpg'
  const belgiqueSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Belgique.jpg'
  const belgiqueSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Belgique.jpg'

  const brooklynSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Brooklyn.jpg'
  const brooklynSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Brooklyn.jpg'
  const brooklynSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Brooklyn.jpg'
  const brooklynSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Brooklyn.jpg'

  return (
    <div className='pageBody'>
      <div className='container'>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Belgique.png'
              srcSet={`${belgiqueSizeSmall} 600w, ${belgiqueSizeMed} 800w, ${belgiqueSizeLarge} 1200w,  ${belgiqueSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Blossom_XZ0uU7jLp.jpg'
              srcSet={`${blossomSizeSmall} 600w, ${blossomSizeMed} 800w, ${blossomSizeLarge} 1200w,  ${blossomSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Blake.png'
              srcSet={`${blakeSizeSmall} 600w, ${blakeSizeMed} 800w, ${blakeSizeLarge} 1200w,  ${blakeSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Bellarose.png'
              srcSet={`${bellaroseSizeSmall} 600w, ${bellaroseSizeMed} 800w, ${bellaroseSizeLarge} 1200w,  ${bellaroseSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Brooklyn.jpg'
              srcSet={`${brooklynSizeSmall} 600w, ${brooklynSizeMed} 800w, ${brooklynSizeLarge} 1200w,  ${brooklynSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Brielle.jpg'
              srcSet={`${brielleSizeSmall} 600w, ${brielleSizeMed} 800w, ${brielleSizeLarge} 1200w,  ${brielleSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>

        {<SwiperGallery />}

        <div className='row lookbookRow'>
          <div className='collectionBox col-md-4 col-sm-12'>
            <div className='lookbookTitle'>SPRING | SUMMER '24</div>
            <div className='lookbookPDF'>
              <a target='_blank' href='/images/springSummerLookbook24.pdf'>
                <img
                  className='lookbookPreview'
                  src='https://ik.imagekit.io/r596hampx/AMORETALLA_LOOKBOOK_2024_SPREADS_AdDFSTA66.jpg'
                  srcSet={`${sprSumSizeSmall} 600w, ${sprSumSizeMed} 800w`}
                  alt=''
                />
              </a>
            </div>
          </div>
          <div className='collectionBox col-md-4 col-sm-12'>
            <div className='lookbookTitle'>THE <img className='alogo' src='/images/blacklogo.png' alt='amoretalla logo'></img> COLLECTION '24</div>
            <div className='lookbookPDF'>
              <a target='_blank' href='/images/lookbook24.pdf'>
                <img
                  className='lookbookPreview'
                  src='https://ik.imagekit.io/r596hampx/cover24_2Aikc_eC-.png'
                  srcSet={`${aColcSizeSmall} 600w, ${aColcSizeMed} 800w`}
                  alt=''
                />
              </a>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='lookbookTitle'>THE CUSTOM COLLECTION</div>
            <div className='lookbookPDF'>
              <button className='galleryBtn' onClick={() => setOpen(true)} target='_blank'>
                <img
                  className='lookbookPreview'
                  src='https://ik.imagekit.io/r596hampx/0794_QyTGXKlVr.JPG'
                  srcSet={`${firstColcSizeSmall} 600w, ${firstColcSizeMed} 800w`}
                  alt=''
                />
              </button>

              <Lightbox
                plugins={[Counter]}
                counter={{ style: { top: 'unset', bottom: 0 } }}
                open={open}
                close={() => setOpen(false)}
                slides={[
                  { src: 'https://ik.imagekit.io/r596hampx/0794_QyTGXKlVr.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/0800_cU_TYs0H4.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/0817_wakcjmV8is.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/0515_05dheBEW8.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/0530_AQWmgDPQW.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/0827_2_JZ1outd.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/0861_fSrEg651U.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/1339_MUkc-wSs3.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/1644_WZhhY4ZsS.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/1647_CBWHIoRMY.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/1658_mmL4bvOZF.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/1805_zEYJMi-Se.JPG' },
                  { src: 'https://ik.imagekit.io/r596hampx/1815_veHhc4oMd.JPG' }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
