import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { products } from '../product/Data';

function Collection() {
  const [selectedCollection, setSelectedCollection] = useState('springSummer25');

  const collections = [
    'springSummer25',
    'amoreCollection',
    'custom',
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
                    src={product.mainImage}
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
    </div>
  );
}

export default Collection;