import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { products } from './Data';

function Product() {
  const { name } = useParams(); // Changed from { id } to { name }
  const [mainImage, setMainImage] = useState('');
  let product;

  try {
    product = products.find((p) => p.name.toLowerCase() === name.toLowerCase()); // Changed to match name, case-insensitive
    if (!mainImage && product) setMainImage(product.mainImage); // Sets the ID initially
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
      <div className="container">
        <div className="product-page">
          <div className="product-images">
            <img
              src={getImageUrl(mainImage || product.mainImage, 1000)}
              alt={`${product.name} main view`}
              className="product-main-image"
              loading="lazy"
            />
          </div>
          <div className="product-details">
            <h1 className="mainTitleText">{product.name}</h1>
            <p className="mainSubtitleText">{product.description}</p>
            <div className="product-thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={getImageUrl(image, 600)}
                  alt={`${product.name} view ${index + 1}`}
                  className="product-thumbnail"
                  onClick={() => setMainImage(image)}
                  role="button"
                  aria-label={`Select ${product.name} view ${index + 1}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setMainImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;