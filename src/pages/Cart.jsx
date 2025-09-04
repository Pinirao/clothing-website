import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart }) => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Sample cart items if none provided (for demonstration)
  const sampleItems = [
    { id: 1, title: 'Classic White T-Shirt', price: 24.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', quantity: 2, size: 'M', color: 'White' },
    { id: 3, title: 'Summer Floral Dress', price: 45.99, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', quantity: 1, size: 'S', color: 'Multi' },
    { id: 12, title: 'Sunglasses', price: 89.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', quantity: 1, size: 'One Size', color: 'Black' }
  ];

  // Use provided cart items or sample items for demonstration
  const items = cartItems && cartItems.length > 0 ? cartItems : sampleItems;
  
  const subtotal = getCartTotal ? getCartTotal() : items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount for demo
  const total = subtotal + shipping + tax - discount;

  const handleQuantityChange = (id, newQuantity) => {
    if (updateQuantity) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id) => {
    if (removeFromCart) {
      removeFromCart(id);
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'fashion10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "FASHION10" for 10% off.');
    }
  };

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  const continueShopping = () => {
    navigate('/shop');
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <p>{items.length} {items.length === 1 ? 'item' : 'items'}</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <button className="continue-shopping-btn" onClick={continueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-items-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                    <button 
                      className="remove-item"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <div className="item-attributes">
                      <span>Size: {item.size || 'M'}</span>
                      <span>Color: {item.color || 'Default'}</span>
                    </div>
                  </div>
                </div>

                <div className="item-price">${item.price.toFixed(2)}</div>

                <div className="item-quantity">
                  <button 
                    onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}

            <div className="cart-actions">
              <button className="continue-shopping" onClick={continueShopping}>
                ← Continue Shopping
              </button>
              <button className="clear-cart" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-line">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-line">
                <span>Shipping</span>
                <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
              </div>

              <div className="summary-line">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              {promoApplied && (
                <div className="summary-line discount">
                  <span>Discount (10%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="promo-code">
                <input
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={promoApplied}
                />
                <button 
                  onClick={applyPromoCode}
                  disabled={promoApplied}
                >
                  {promoApplied ? 'Applied' : 'Apply'}
                </button>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn" onClick={proceedToCheckout}>
                Proceed to Checkout
              </button>

              <div className="payment-methods">
                <p>We accept:</p>
                <div className="payment-icons">
                  <span>💳</span>
                  <span>📱</span>
                  <span>🏦</span>
                </div>
              </div>
            </div>

            <div className="security-notice">
              <div className="lock-icon">🔒</div>
              <p>Your personal data is securely encrypted and protected</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;