import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ 
  cartItemCount = 0, 
  cartItems = [], 
  addToCart, 
  removeFromCart, 
  updateQuantity 
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Remove duplicate items and calculate quantities
  const uniqueCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);
  
  // Calculate cart total from actual cart items
  const cartTotal = uniqueCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Function to add an extra item
  const addExtraItem = (item) => {
    if (addToCart) {
      addToCart(item, 1); // Add one more of this item
    }
  };
  
  // Function to remove an item
  const removeItem = (item) => {
    if (removeFromCart) {
      if (item.quantity > 1) {
        // If more than one, just reduce quantity by 1
        updateQuantity(item.id, item.quantity - 1);
      } else {
        // If only one, remove the item completely
        removeFromCart(item.id);
      }
    }
  };

  return (
    <>
      <header className="clothing-header">
        <div className="header-top">
          <p>Free shipping on orders over $50</p>
        </div>
        
        <div className="header-main">
          <div className="header-container">
            <div className="logo">
              <Link to="/">FASHIONISTA</Link>
            </div>
            
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
            </nav>
            
            <div className="header-actions">
              <Link to="/account" className="account-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </Link>
              
              <button className="cart-btn" onClick={toggleCart}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
              </button>
              
              <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Modern Cart Dropdown */}
      <div className={`cart-dropdown ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart ({cartItemCount})</h3>
          <button className="close-cart" onClick={toggleCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="cart-items">
          {uniqueCartItems.length > 0 ? (
            uniqueCartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image || 'https://via.placeholder.com/60x60'} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="item-quantity-controls">
                  <button 
                    className="quantity-btn minus" 
                    onClick={() => removeItem(item)}
                    aria-label="Remove one item"
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    className="quantity-btn plus" 
                    onClick={() => addExtraItem(item)}
                    aria-label="Add one more item"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Your cart is empty</p>
          )}
        </div>
        
        <div className="cart-footer">
          <div className="cart-total">
            <span>Subtotal:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="cart-actions">
            <Link to="/cart" className="view-cart-btn" onClick={toggleCart}>View Cart</Link>
            <Link to="/checkout" className="checkout-btn" onClick={toggleCart}>Checkout</Link>
          </div>
        </div>
      </div>
      
      {/* Overlay when cart is open */}
      {isCartOpen && <div className="overlay" onClick={toggleCart}></div>}
    </>
  );
};

export default Header;