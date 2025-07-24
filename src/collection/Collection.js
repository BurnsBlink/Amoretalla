import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import '../App.css';
import { products } from '../product/Data';

function Collection() {
  const { collection: urlCollection } = useParams();
  const location = useLocation();
  const [selectedCollection, setSelectedCollection] = useState('springSummer25');

  const collections = useMemo(() => [
    'springSummer25',
    'springSummer24',
    // 'custom',
  ], []);

  useEffect(() => {
    if (urlCollection && collections.includes(urlCollection)) {
      setSelectedCollection(urlCollection);
    }
  }, [urlCollection, location.pathname, collections]);

  const collectionTitles = {
    springSummer25: 'SPRING | SUMMER \'25',
    springSummer24: 'SPRING | SUMMER \'24',
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
            <Link
              to={`/collections/${collection}`}
              className={`custom-link ${selectedCollection === collection ? 'active' : ''}`}
            >
              {renderCollectionTitle(collection)}
            </Link>
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
                  to={`/product/${product.name}`}
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
    </div>
  );
}

export default Collection;