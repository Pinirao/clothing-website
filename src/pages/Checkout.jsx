import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, getCartTotal, clearCart }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    sameAsShipping: false
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckout = () => {
    // Process checkout logic here
    alert('Order placed successfully!');
    clearCart();
  };

  const nextStep = () => {
    if (activeStep < 3) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="checkout-steps">
          <div className={`step ${activeStep >= 1 ? 'active' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Shipping</span>
          </div>
          <div className={`step ${activeStep >= 2 ? 'active' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Payment</span>
          </div>
          <div className={`step ${activeStep >= 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Review</span>
          </div>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-form-section">
          {activeStep === 1 && (
            <div className="form-step">
              <h2>Shipping Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="address">Shipping Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="10001"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <button className="btn-next" onClick={nextStep}>Continue to Payment</button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="form-step">
              <h2>Payment Details</h2>
              <div className="payment-methods">
                <div className="payment-method active">
                  <span className="payment-icon">💳</span>
                  <span>Credit Card</span>
                </div>
                <div className="payment-method">
                  <span className="payment-icon">📱</span>
                  <span>PayPal</span>
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="3"
                  />
                </div>
              </div>
              
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  name="sameAsShipping"
                  checked={formData.sameAsShipping}
                  onChange={handleInputChange}
                />
                <label htmlFor="sameAsShipping">Billing address same as shipping</label>
              </div>
              
              <div className="form-actions">
                <button className="btn-back" onClick={prevStep}>Back</button>
                <button className="btn-next" onClick={nextStep}>Continue to Review</button>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="form-step">
              <h2>Order Review</h2>
              
              <div className="shipping-review">
                <h3>Shipping Information</h3>
                <p>{formData.firstName} {formData.lastName}</p>
                <p>{formData.address}</p>
                <p>{formData.city}, {formData.postalCode}</p>
                <p>{formData.country}</p>
                <p>{formData.email}</p>
              </div>
              
              <div className="payment-review">
                <h3>Payment Method</h3>
                <p>Credit Card ending in {formData.cardNumber.slice(-4)}</p>
                <p>Name: {formData.cardName}</p>
                <p>Expires: {formData.expiryDate}</p>
              </div>
              
              <div className="form-actions">
                <button className="btn-back" onClick={prevStep}>Back</button>
                <button className="btn-complete" onClick={handleCheckout}>Complete Purchase</button>
              </div>
            </div>
          )}
        </div>

        <div className="order-summary-section">
          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="order-items">
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>Size: M</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
              <div className="total-line">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="total-line">
                <span>Shipping</span>
                <span>$5.99</span>
              </div>
              <div className="total-line">
                <span>Tax</span>
                <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              <div className="total-line grand-total">
                <span>Total</span>
                <span>${(getCartTotal() + 5.99 + (getCartTotal() * 0.08)).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="promo-code">
              <input type="text" placeholder="Promo code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;