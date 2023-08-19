import React, { useState } from 'react';
import '../App.css';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

function Gallery() {
  const [open, setOpen] = useState(false)
  const aColcSizeSmall = 'https://ik.imagekit.io/r596hampx/cover24_2Aikc_eC-.png'
  const aColcSizeMed = 'https://ik.imagekit.io/r596hampx/cover24_2Aikc_eC-.png'
  const firstColcSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/0794_QyTGXKlVr.JPG'
  const firstColcSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/0794_QyTGXKlVr.JPG'

  const spreadOneSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/SPREADS-1.jpg'
  const spreadOneSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/SPREADS-1.jpg'
  const spreadOneSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/SPREADS-1.jpg'
  const spreadOneSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/SPREADS-1.jpg'

  const spreadTwoSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/SPREADS-2.jpg'
  const spreadTwoSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/SPREADS-2.jpg'
  const spreadTwoSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/SPREADS-2.jpg'
  const spreadTwoSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/SPREADS-2.jpg'

  const spreadThrSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/SPREADS-3.jpg'
  const spreadThrSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/SPREADS-3.jpg'
  const spreadThrSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/SPREADS-3.jpg'
  const spreadThrSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/SPREADS-3.jpg'

  const spreadFourSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/SPREADS-4.jpg'
  const spreadFourSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/SPREADS-4.jpg'
  const spreadFourSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/SPREADS-4.jpg'
  const spreadFourSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/SPREADS-4.jpg'

  const spreadFivSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/SPREADS-5.jpg'
  const spreadFivSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/SPREADS-5.jpg'
  const spreadFivSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/SPREADS-5.jpg'
  const spreadFivSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/SPREADS-5.jpg'

  const spreadAnnaSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/anna_spread.png'
  const spreadAnnaMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/anna_spread.png'
  const spreadAnnaLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/anna_spread.png'
  const spreadAnnaXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/anna_spread.png'

  const spreadAntoinnetteSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/antoinnette_spread.png'
  const spreadAntoinnetteMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/antoinnette_spread.png'
  const spreadAntoinnetteLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/antoinnette_spread.png'
  const spreadAntoinnetteXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/antoinnette_spread.png'

  const spreadAzizaSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/aziza_spread.png'
  const spreadAzizaMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/aziza_spread.png'
  const spreadAzizaLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/aziza_spread.png'
  const spreadAzizaXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/aziza_spread.png'

  const spreadAlinaSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/alina_spread.png'
  const spreadAlinaMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/alina_spread.png'
  const spreadAlinaLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/alina_spread.png'
  const spreadAlinaXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/alina_spread.png'

  return (
    <div className='pageBody'>
      <div className='container'>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/anna_spread.png'
              srcSet={`${spreadAnnaSmall} 600w, ${spreadAnnaMed} 800w, ${spreadAnnaLarge} 1200w,  ${spreadAnnaXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/antoinnette_spread.png'
              srcSet={`${spreadAntoinnetteSmall} 600w, ${spreadAntoinnetteMed} 800w, ${spreadAntoinnetteLarge} 1200w,  ${spreadAntoinnetteXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/aziza_spread.png'
              srcSet={`${spreadAzizaSmall} 600w, ${spreadAzizaMed} 800w, ${spreadAzizaLarge} 1200w,  ${spreadAzizaXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/alina_spread.png'
              srcSet={`${spreadAlinaSmall} 600w, ${spreadAlinaMed} 800w, ${spreadAlinaLarge} 1200w,  ${spreadAlinaXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/SPREADS-2.jpg'
              srcSet={`${spreadTwoSizeSmall} 600w, ${spreadTwoSizeMed} 800w, ${spreadTwoSizeLarge} 1200w,  ${spreadTwoSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/SPREADS-1.jpg'
              srcSet={`${spreadOneSizeSmall} 600w, ${spreadOneSizeMed} 800w, ${spreadOneSizeLarge} 1200w,  ${spreadOneSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/SPREADS-3.jpg'
              srcSet={`${spreadThrSizeSmall} 600w, ${spreadThrSizeMed} 800w, ${spreadThrSizeLarge} 1200w,  ${spreadThrSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/SPREADS-4.jpg'
              srcSet={`${spreadFourSizeSmall} 600w, ${spreadFourSizeMed} 800w, ${spreadFourSizeLarge} 1200w,  ${spreadFourSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row galleryRow'>
          <div className='notes__inner__image'>
            <img
              className=''
              src='https://ik.imagekit.io/r596hampx/SPREADS-5.jpg'
              srcSet={`${spreadFivSizeSmall} 600w, ${spreadFivSizeMed} 800w, ${spreadFivSizeLarge} 1200w,  ${spreadFivSizeXlarge} 1600w`}
              alt=''
            />
          </div>
        </div>
        <div className='row'>
          <div className='collectionBox col-md-6 col-sm-12'>
            <div className='lookbookTitle'>THE <img className='alogo' src='/images/blacklogo.png' alt='amoretalla logo'></img> COLLECTION 2024</div>
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
          <div className='col-md-6 col-sm-12'>
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
