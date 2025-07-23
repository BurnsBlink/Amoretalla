import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { products } from '../product/Data';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

function Collection() {
  const [selectedCollection, setSelectedCollection] = useState('springSummer25');

  const collections = [
    'springSummer25',
    // 'amoreCollection',
    // 'custom',
  ];

  const collectionTitles = {
    springSummer25: 'SPRING | SUMMER \'25',
    amoreCollection: (
      <>
        THE <img className="alogo" src="/images/blacklogo.png" alt="Amorétalla logo" /> COLLECTION '24
      </>
    ),
    custom: 'THE CUSTOM COLLECTION',
  };

  const renderCollectionTitle = (collection) => collectionTitles[collection] || collection;

  const filteredProducts = useMemo(
    () => products.filter((product) => product.collection === selectedCollection),
    [selectedCollection]
  );

  const getImageUrl = (fileId, width = 600) => {
    const googleUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
    return `${process.env.REACT_APP_PROXY_URL}/api/proxy-image?url=${encodeURIComponent(googleUrl)}`;
  };

  const spring25small = 'https://ik.imagekit.io/r596hampx/Fall2024/LOOKBOOK_2025_cover.jpg'
  const spring25med = 'https://ik.imagekit.io/r596hampx/Fall2024/LOOKBOOK_2025_cover.jpg'
  const aColcSizeSmall = 'https://ik.imagekit.io/r596hampx/cover24_2Aikc_eC-.png'
  const aColcSizeMed = 'https://ik.imagekit.io/r596hampx/cover24_2Aikc_eC-.png'
  const [open, setOpen] = useState(false)
  const firstColcSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/0794_QyTGXKlVr.JPG'
  const firstColcSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/0794_QyTGXKlVr.JPG'

  return (
    <div className="pageBody">
      <div className="container collection-container">
        <nav className="collection-menu" role="navigation" aria-label="Collection menu">
          <h3 className="menu-title">Collections</h3>
          <ul className="menu-list">
            {collections.map((collection) => (
              <li
                key={collection}
                className={`menu-item ${selectedCollection === collection ? 'active' : ''}`}
                onClick={() => setSelectedCollection(collection)}
                role="button"
                tabIndex={0}
                aria-current={selectedCollection === collection ? 'page' : undefined}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedCollection(collection)}
              >
                {renderCollectionTitle(collection)}
              </li>
            ))}
          </ul>
        </nav>
        <div className="collection-content">
          <h3 className="mainTitleText">{renderCollectionTitle(selectedCollection)}</h3>
          <div className="collection-grid">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="collection-item"
                  aria-label={`View ${product.name}`}
                >
                  <img
                    src={getImageUrl(product.mainImage)}
                    alt={`${product.name} dress`}
                    className="collection-image"
                    loading="lazy"
                  />
                  <h3 className="mainSubtitleText">{product.name}</h3>
                </Link>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
      <hr style={{ width: '80%' }} />
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
  );
}

export default Collection;