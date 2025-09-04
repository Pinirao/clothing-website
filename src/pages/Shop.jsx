import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = ({ addToCart, cartItems }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  
  // Sample product data with categories
  const products = [
    { id: 1, title: 'Classic White T-Shirt', price: 24.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'men', description: 'Premium cotton t-shirt with perfect fit for everyday wear.' },
    { id: 2, title: 'Slim Fit Jeans', price: 59.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'men', description: 'Comfortable slim fit jeans with stretch for all-day comfort.' },
    { id: 3, title: 'Summer Floral Dress', price: 45.99, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'women', description: 'Lightweight floral dress perfect for summer occasions.' },
    { id: 4, title: 'Designer Handbag', price: 89.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'bags', description: 'Elegant handbag with ample space for all your essentials.' },
    { id: 5, title: 'Running Shoes', price: 79.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'shoes', description: 'High-performance running shoes with cushion technology.' },
    { id: 6, title: 'Leather Jacket', price: 129.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'men', description: 'Genuine leather jacket with a classic biker style.' },
    { id: 7, title: 'High Heels', price: 64.99, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'shoes', description: 'Elegant high heels for special occasions.' },
    { id: 8, title: 'Crossbody Bag', price: 49.99, image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'bags', description: 'Compact crossbody bag with adjustable strap.' },
    { id: 9, title: 'Casual Blouse', price: 39.99, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'women', description: 'Comfortable and stylish blouse for everyday wear.' },
    { id: 10, title: 'Sports Shorts', price: 34.99, image: 'https://images.unsplash.com/photo-1506629905877-52a5ca6d63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'men', description: 'Breathable sports shorts for your active lifestyle.' },
    { id: 11, title: 'Earrings Set', price: 29.99, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'accessories', description: 'Beautiful set of earrings for any occasion.' },
    { id: 12, title: 'Sunglasses', price: 89.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'accessories', description: 'Stylish sunglasses with UV protection.' },
  ];

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0; // default sort (no sorting)
  });

  // Add to cart function
  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent event from bubbling to the card
    addToCart(product);
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
      <span>${product.title} added to cart!</span>
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

  // Navigate to product detail page
  const viewProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="shop-container">
      <div className="shop-banner">
        <h1 data-aos="fade-down">Shop Our Collection</h1>
        <p data-aos="fade-down" data-aos-delay="100">Discover the latest trends in fashion</p>
      </div>
      
      <div className="shop-controls" data-aos="fade-in" data-aos-delay="200">
        <div className="category-filter">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          <button 
            className={activeCategory === 'men' ? 'active' : ''} 
            onClick={() => setActiveCategory('men')}
          >
            Men
          </button>
          <button 
            className={activeCategory === 'women' ? 'active' : ''} 
            onClick={() => setActiveCategory('women')}
          >
            Women
          </button>
          <button 
            className={activeCategory === 'shoes' ? 'active' : ''} 
            onClick={() => setActiveCategory('shoes')}
          >
            Shoes
          </button>
          <button 
            className={activeCategory === 'bags' ? 'active' : ''} 
            onClick={() => setActiveCategory('bags')}
          >
            Bags
          </button>
          <button 
            className={activeCategory === 'accessories' ? 'active' : ''} 
            onClick={() => setActiveCategory('accessories')}
          >
            Accessories
          </button>
        </div>
        
        <div className="sort-filter">
          <label htmlFor="sort">Sort by:</label>
          <select 
            id="sort" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      <div className="products-grid">
        {sortedProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => viewProductDetails(product.id)}
            data-aos="fade-up"
            data-aos-delay={index % 4 * 100}
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price.toFixed(2)}</div>
              <button
                className="shop-add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {sortedProducts.length === 0 && (
        <div className="no-products" data-aos="fade-in">
          <h3>No products found in this category</h3>
          <p>Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default Shop;