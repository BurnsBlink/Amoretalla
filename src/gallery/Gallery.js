import React, { useState } from 'react';
import '../App.css';
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

function Gallery() {
  const [open, setOpen] = useState(false)
  const aColcSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/pdfPreview_tHA-u94SK.png'
  const aColcSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/pdfPreview_tHA-u94SK.png'
  const firstColcSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/0794_QyTGXKlVr.JPG'
  const firstColcSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/0794_QyTGXKlVr.JPG'

  return (
    <div className='pageBody'>
      <div className='container'>
        <div className='row'>
          <div className='collectionBox col-md-6 col-sm-12'>
            <div className='lookbookTitle'>THE A COLLECTION '23</div>
            <div className='lookbookPDF'>
              <a target="_blank" href="/images/lookbook23.pdf">
                <img
                  className="lookbookPreview"
                  src='https://ik.imagekit.io/r596hampx/pdfPreview_tHA-u94SK.png'
                  srcSet={`${aColcSizeSmall} 600w, ${aColcSizeMed} 800w`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='lookbookTitle'>THE FIRST COLLECTION</div>
            <div className='lookbookPDF'>
              <button className='galleryBtn' onClick={() => setOpen(true)} target="_blank">
                <img
                  className="lookbookPreview"
                  src='https://ik.imagekit.io/r596hampx/0794_QyTGXKlVr.JPG'
                  srcSet={`${firstColcSizeSmall} 600w, ${firstColcSizeMed} 800w`}
                  alt=""
                />
              </button>

              <Lightbox
                plugins={[Counter]}
                counter={{ style: { top: "unset", bottom: 0 } }}
                open={open}
                close={() => setOpen(false)}
                slides={[
                  { src: "https://ik.imagekit.io/r596hampx/0794_QyTGXKlVr.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0800_cU_TYs0H4.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0812_tCj8j8nvDX.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0808_hheXdK-Ty.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0817_wakcjmV8is.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0517_i3oEg810W.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0515_05dheBEW8.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0530_AQWmgDPQW.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/0827_2_JZ1outd.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/1647_CBWHIoRMY.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/1648_EUq61K6as.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/1665_j1e41GHjt.JPG" },
                  { src: "https://ik.imagekit.io/r596hampx/1668_JJrqyOU3_.JPG" }
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
