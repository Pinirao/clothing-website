import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, actionButtonText = "Shop Now", onActionClick }) => {
  const navigate = useNavigate();

  const handleShopNow = (e) => {
    e.stopPropagation();
    if (typeof onActionClick === 'function') {
      onActionClick(product);
    }
    navigate('/shop');
  };

  return (
    <div className="product-card">
      <div 
        className="product-image"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.image} alt={product.title} />
        <button
          className="quick-view-btn"
          onClick={e => {
            e.stopPropagation();
            navigate(`/product/${product.id}`);
          }}
        >
          Quick View
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">${product.price}</div>
        <button
          className="shop-now-btn"
          onClick={handleShopNow}
        >
          {actionButtonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

// Usage example:
// <ProductCard
//   product={product}
//   actionButtonText="Shop Now"
//   onActionClick={addToCart} // Make sure this is the correct function
// />