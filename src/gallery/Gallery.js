import React, { useState } from 'react';
// import SwiperGallery from '../swiper/SwiperGallery'
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
  const spring25small = 'https://ik.imagekit.io/r596hampx/Fall2024/LOOKBOOK_2025_cover.jpg'
  const spring25med = 'https://ik.imagekit.io/r596hampx/Fall2024/LOOKBOOK_2025_cover.jpg'

  const firstColcSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/0794_QyTGXKlVr.JPG'
  const firstColcSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/0794_QyTGXKlVr.JPG'

  const blossomSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/aria25.jpg'
  const blossomSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/aria25.jpg'
  const blossomSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/aria25.jpg'
  const blossomSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/aria25.jpg'

  const blakeSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/billie25.jpg'
  const blakeSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/billie25.jpg'
  const blakeSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/billie25.jpg'
  const blakeSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/billie25.jpg'

  const bellaroseSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/blossom25.jpg'
  const bellaroseSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/blossom25.jpg'
  const bellaroseSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/blossom25.jpg'
  const bellaroseSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/blossom25.jpg'

  const brielleSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/adele25.jpg'
  const brielleSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/adele25.jpg'
  const brielleSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/adele25.jpg'
  const brielleSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/adele25.jpg'

  const belgiqueSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/belgique25.jpg'
  const belgiqueSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/belgique25.jpg'
  const belgiqueSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/belgique25.jpg'
  const belgiqueSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/belgique25.jpg'

  const brooklynSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/bowie25.jpg'
  const brooklynSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/bowie25.jpg'
  const brooklynSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/bowie25.jpg'
  const brooklynSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/bowie25.jpg'

  const sevenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/bradie25.jpg'
  const sevenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/bradie25.jpg'
  const sevenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/bradie25.jpg'
  const sevenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/bradie25.jpg'

  const eightSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/brooklyn25.jpg'
  const eightSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/brooklyn25.jpg'
  const eightSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/brooklyn25.jpg'
  const eightSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/brooklyn25.jpg'

  const nineSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/bailey25.jpg'
  const nineSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/bailey25.jpg'
  const nineSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/bailey25.jpg'
  const nineSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/bailey25.jpg'

  const tenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/bronte25.jpg'
  const tenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/bronte25.jpg'
  const tenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/bronte25.jpg'
  const tenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/bronte25.jpg'

  const elevenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/brenna25.jpg'
  const elevenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/brenna25.jpg'
  const elevenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/brenna25.jpg'
  const elevenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/brenna25.jpg'

  const twelveSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/blake25.jpg'
  const twelveSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/blake25.jpg'
  const twelveSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/blake25.jpg'
  const twelveSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/blake25.jpg'

  const thirteenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/brinkley25.jpg'
  const thirteenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/brinkley25.jpg'
  const thirteenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/brinkley25.jpg'
  const thirteenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/brinkley25.jpg'

  const fourteenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/brielle25.jpg'
  const fourteenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/brielle25.jpg'
  const fourteenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/brielle25.jpg'
  const fourteenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/brielle25.jpg'

  const fifthteenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/antoin25.jpg'
  const fifthteenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/antoin25.jpg'
  const fifthteenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/antoin25.jpg'
  const fifthteenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/antoin25.jpg'

  const sixteenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/anna25.jpg'
  const sixteenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/anna25.jpg'
  const sixteenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/anna25.jpg'
  const sixteenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/anna25.jpg'

  const seventeenSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/Fall2024/bellarose25.jpg'
  const seventeenSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/Fall2024/bellarose25.jpg'
  const seventeenSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/Fall2024/bellarose25.jpg'
  const seventeenSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/Fall2024/bellarose25.jpg'
  
  return (
    <div className='pageBody'>
      <div className='container'>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/belgique25.jpg'
              srcSet={`${belgiqueSizeSmall} 600w, ${belgiqueSizeMed} 800w, ${belgiqueSizeLarge} 1200w,  ${belgiqueSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/aria25.jpg'
              srcSet={`${blossomSizeSmall} 600w, ${blossomSizeMed} 800w, ${blossomSizeLarge} 1200w,  ${blossomSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/billie25.jpg'
              srcSet={`${blakeSizeSmall} 600w, ${blakeSizeMed} 800w, ${blakeSizeLarge} 1200w,  ${blakeSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/blossom25.jpg'
              srcSet={`${bellaroseSizeSmall} 600w, ${bellaroseSizeMed} 800w, ${bellaroseSizeLarge} 1200w,  ${bellaroseSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/bowie25.jpg'
              srcSet={`${brooklynSizeSmall} 600w, ${brooklynSizeMed} 800w, ${brooklynSizeLarge} 1200w,  ${brooklynSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/adele25.jpg'
              srcSet={`${brielleSizeSmall} 600w, ${brielleSizeMed} 800w, ${brielleSizeLarge} 1200w,  ${brielleSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/bradie25.jpg'
              srcSet={`${sevenSizeSmall} 600w, ${sevenSizeMed} 800w, ${sevenSizeLarge} 1200w,  ${sevenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/brooklyn25.jpg'
              srcSet={`${eightSizeSmall} 600w, ${eightSizeMed} 800w, ${eightSizeLarge} 1200w,  ${eightSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/bailey25.jpg'
              srcSet={`${nineSizeSmall} 600w, ${nineSizeMed} 800w, ${nineSizeLarge} 1200w,  ${nineSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/bronte25.jpg'
              srcSet={`${tenSizeSmall} 600w, ${tenSizeMed} 800w, ${tenSizeLarge} 1200w,  ${tenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/brenna25.jpg'
              srcSet={`${elevenSizeSmall} 600w, ${elevenSizeMed} 800w, ${elevenSizeLarge} 1200w,  ${elevenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/blake25.jpg'
              srcSet={`${twelveSizeSmall} 600w, ${twelveSizeMed} 800w, ${twelveSizeLarge} 1200w,  ${twelveSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/brinkley25.jpg'
              srcSet={`${thirteenSizeSmall} 600w, ${thirteenSizeMed} 800w, ${thirteenSizeLarge} 1200w,  ${thirteenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/brielle25.jpg'
              srcSet={`${fourteenSizeSmall} 600w, ${fourteenSizeMed} 800w, ${fourteenSizeLarge} 1200w,  ${fourteenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/antoin25.jpg'
              srcSet={`${fifthteenSizeSmall} 600w, ${fifthteenSizeMed} 800w, ${fifthteenSizeLarge} 1200w,  ${fifthteenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/anna25.jpg'
              srcSet={`${sixteenSizeSmall} 600w, ${sixteenSizeMed} 800w, ${sixteenSizeLarge} 1200w,  ${sixteenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/Fall2024/bellarose25.jpg'
              srcSet={`${seventeenSizeSmall} 600w, ${seventeenSizeMed} 800w, ${seventeenSizeLarge} 1200w,  ${seventeenSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        {/* {<SwiperGallery />} */}

        <div className='row lookbookRow'>
          <div className='collectionBox col-md-4 col-sm-12'>
            <div className='lookbookTitle'>SPRING | SUMMER '25</div>
            <div className='lookbookPDF'>
              <a target='_blank' href='/images/lookbook25.pdf'>
                <img
                  className='lookbookPreview'
                  src='https://ik.imagekit.io/r596hampx/Fall2024/LOOKBOOK_2025_cover.jpg'
                  srcSet={`${spring25small} 600w, ${spring25med} 800w`}
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
