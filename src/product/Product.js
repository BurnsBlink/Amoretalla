import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';
import { products } from './Data';

function Product() {
  const { name } = useParams();
  const [mainImage, setMainImage] = useState('');
  let product;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  try {
    product = products.find((p) => p.name.toLowerCase() === name.toLowerCase());
    if (!mainImage && product) setMainImage(product.mainImage);
  } catch (error) {
    console.error('Error finding product:', error);
    return <div className="pageBody">Error loading product</div>;
  }

  if (!product) {
    return <div className="pageBody">Product not found</div>;
  }

  const getImageUrl = (fileId, width) => {
    const googleUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
    return `${process.env.REACT_APP_PROXY_URL}/api/proxy-image?url=${encodeURIComponent(googleUrl)}`;
  };

  return (
    <div className="pageBody">
      <div className="container product-container">
        <div className="product-content">
          <div className="product-images">
            <img
              src={getImageUrl(mainImage || product.mainImage, 600)}
              alt={`${product.name} main view`}
              className="product-main-image"
              loading="lazy"
            />
          </div>
          <div className="product-details">
            <h1 className="productTitleText">{product.name}</h1>
            <p className="productSubtitleText">{product.description}</p>
            <div className="product-thumbnails-grid">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`product-thumbnail-wrapper ${mainImage === image ? 'active' : ''}`}
                >
                  <img
                    src={getImageUrl(image, 300)}
                    alt={`${product.name} view ${index + 1}`}
                    className="product-thumbnail"
                    onClick={() => setMainImage(image)}
                    role="button"
                    aria-label={`Select ${product.name} view ${index + 1}`}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setMainImage(image)}
                  />
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn btnSubmit">
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;