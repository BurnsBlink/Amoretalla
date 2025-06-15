// src/components/Product.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { products } from './Data';

function Product() {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState('');
  let product;

  try {
    product = products.find((p) => p.id === parseInt(id));
    if (!mainImage && product) setMainImage(product.mainImage);
  } catch (error) {
    console.error('Error finding product:', error);
    return <div className="pageBody">Error loading product</div>;
  }

  if (!product) {
    return <div className="pageBody">Product not found</div>;
  }

  return (
    <div className="pageBody">
      <div className="container">
        <div className="product-page">
          <div className="product-images">
            <img
              src={mainImage}
              alt={`${product.name} main view`}
              className="product-main-image"
              loading="lazy"
            />
            <div className="product-thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
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
          <div className="product-details">
            <h1 className="mainTitleText">{product.name}</h1>
            <p className="mainSubtitleText">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;