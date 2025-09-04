import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Sample product data with multiple images for demonstration
  const products = [
    { 
      id: 1, 
      title: 'Classic White T-Shirt', 
      price: 24.99, 
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1503341338985-b047bb81aa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'men', 
      description: 'Premium cotton t-shirt with perfect fit for everyday wear.', 
      details: '100% premium cotton, machine washable, available in all sizes.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Gray']
    },
    { 
      id: 2, 
      title: 'Slim Fit Jeans', 
      price: 59.99, 
      images: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'men', 
      description: 'Comfortable slim fit jeans with stretch for all-day comfort.', 
      details: '98% cotton, 2% elastane, stretch denim, five-pocket style.',
      sizes: ['30', '32', '34', '36'],
      colors: ['Blue', 'Dark Blue', 'Black']
    },
    { 
      id: 3, 
      title: 'Women\'s Summer Dress', 
      price: 49.99, 
      images: [
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'women', 
      description: 'Light and flowy summer dress with floral pattern.', 
      details: '100% rayon, machine wash cold, line dry.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Floral', 'Blue', 'Pink']
    },
    { 
      id: 4, 
      title: 'Leather Jacket', 
      price: 129.99, 
      images: [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'men', 
      description: 'Genuine leather jacket with classic biker style.', 
      details: '100% genuine leather, front zipper closure, multiple pockets.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown', 'Cognac']
    },
    { 
      id: 5, 
      title: 'Running Shoes', 
      price: 89.99, 
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'footwear', 
      description: 'Lightweight running shoes with excellent cushioning.', 
      details: 'Breathable mesh upper, cushioned insole, rubber outsole.',
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Black', 'White', 'Blue', 'Red']
    },
    { 
      id: 6, 
      title: 'Winter Parka', 
      price: 149.99, 
      images: [
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1539533018447-63fcce2674e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'women', 
      description: 'Warm winter parka with faux fur trim hood.', 
      details: 'Water-resistant shell, insulated lining, multiple pockets.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Green', 'Red']
    },
    { 
      id: 7, 
      title: 'Casual Blazer', 
      price: 79.99, 
      images: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'men', 
      description: 'Versatile blazer perfect for business casual occasions.', 
      details: 'Poly-wool blend, notch lapel, two-button closure.',
      sizes: ['38', '40', '42', '44', '46'],
      colors: ['Navy', 'Black', 'Gray', 'Charcoal']
    },
    { 
      id: 8, 
      title: 'Yoga Pants', 
      price: 39.99, 
      images: [
        'https://images.unsplash.com/photo-1506629905877-52a5ca6d63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1590071089561-2085de0d5544?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'women', 
      description: 'High-waisted yoga pants with comfortable stretch.', 
      details: '88% nylon, 12% spandex, high-waisted design, squat-proof.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Navy', 'Burgundy']
    },
    { 
      id: 9, 
      title: 'Denim Shirt', 
      price: 45.99, 
      images: [
        'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'men', 
      description: 'Classic denim shirt for casual everyday wear.', 
      details: '100% cotton, button-front closure, chest pocket.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Light Blue', 'Medium Blue', 'Dark Blue']
    },
    { 
      id: 10, 
      title: 'Knit Sweater', 
      price: 65.99, 
      images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'women', 
      description: 'Cozy knit sweater perfect for chilly days.', 
      details: '100% acrylic, ribbed cuffs and hem, relaxed fit.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Cream', 'Gray', 'Burgundy', 'Forest Green']
    },
    { 
      id: 11, 
      title: 'Sports Shorts', 
      price: 34.99, 
      images: [
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ], 
      category: 'men', 
      description: 'Breathable sports shorts with moisture-wicking technology.', 
      details: 'Polyester blend, elastic waistband with drawstring, side pockets.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Navy', 'Royal Blue']
    }
  ];

  // For products that don't have multiple images yet, convert image to images array
  const enhancedProducts = products.map(product => {
    if (!product.images) {
      return {
        ...product,
        images: [product.image]
      };
    }
    return product;
  });

  const product = enhancedProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    // Add the product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
      <span>${quantity} ${product.title} added to cart!</span>
    `;
    document.body.appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="modern-product-detail">
      <div className="breadcrumb">
        <span onClick={() => navigate('/')}>Home</span>
        <span className="divider">/</span>
        <span onClick={() => navigate('/shop')}>Shop</span>
        <span className="divider">/</span>
        <span className="current">{product.title}</span>
      </div>
      
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="main-image">
            <img 
              src={product.images[selectedImage]} 
              alt={product.title} 
            />
          </div>
          <div className="thumbnail-container">
            {product.images.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.title} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-price">${product.price.toFixed(2)}</div>
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < 4 ? 'star filled' : 'star'}>★</span>
              ))}
            </div>
            <span className="review-count">(42 reviews)</span>
          </div>
          
          <p className="product-description">{product.description}</p>
          
          {product.sizes && (
            <div className="product-option">
              <h3>Size</h3>
              <div className="size-options">
                {product.sizes.map(size => (
                  <div key={size} className="size-option">{size}</div>
                ))}
              </div>
            </div>
          )}
          
          {product.colors && (
            <div className="product-option">
              <h3>Color</h3>
              <div className="color-options">
                {product.colors.map(color => (
                  <div 
                    key={color} 
                    className="color-option"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  ></div>
                ))}
              </div>
            </div>
          )}
          
          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >-</button>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={handleQuantityChange}
              />
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >+</button>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <span className="cart-icon">🛒</span>
              Add to Cart
            </button>
            <button className="wishlist-btn">
              <span className="heart-icon">❤️</span>
              Add to Wishlist
            </button>
          </div>
          
          <div className="product-details">
            <h3>Product Details</h3>
            <p>{product.details}</p>
          </div>
          
          <div className="shipping-info">
            <h3>Shipping & Returns</h3>
            <p>Free standard shipping on orders over $50. Returns accepted within 30 days.</p>
          </div>
        </div>
      </div>
      
      <div className="product-tabs">
        <div className="tab active">Description</div>
        <div className="tab">Reviews (42)</div>
        <div className="tab">Shipping</div>
      </div>
      
      <div className="tab-content">
        <h2>About This Product</h2>
        <p>{product.details}</p>
        <ul>
          <li>Premium quality materials</li>
          <li>Designed for comfort and style</li>
          <li>Easy care instructions</li>
          <li>Perfect for everyday wear</li>
        </ul>
      </div>
      
      <div className="related-products-section">
        <h2>You Might Also Like</h2>
        <div className="related-products-grid">
          {enhancedProducts
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div 
                key={relatedProduct.id} 
                className="related-product-card"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="related-product-image">
                  <img src={relatedProduct.images[0]} alt={relatedProduct.title} />
                  <div className="quick-view">Quick View</div>
                </div>
                <div className="related-product-info">
                  <h4>{relatedProduct.title}</h4>
                  <div className="product-price">${relatedProduct.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;