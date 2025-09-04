import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactPage from './pages/contact'; // Use the correct filename and case
import MyAccount from './pages/MyAccount';
import BlogPage from './pages/BlogPage';
import SingleBlogPage from './pages/SingleBlogPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';
import './styles/responsive.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // Load cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Update cart items and localStorage
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    const updatedCart = prev =>
      // If product exists, update quantity, else add new
      prev.some(item => item.id === product.id)
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...prev, { ...product, quantity }];
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart(cartItems)));
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const updatedCart = prev.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Update item quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prev => {
      const updatedCart = prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Calculate total items in cart
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Clear cart (useful for after checkout)
  const clearCart = () => {
    updateCart([]);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header 
          cartItemCount={getCartItemCount()} 
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/shop" 
              element={
                <Shop 
                  addToCart={addToCart}
                  cartItems={cartItems}
                />
              } 
            />
            <Route 
              path="/product/:id" 
              element={<ProductDetails addToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                  getCartTotal={getCartTotal}
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <Checkout 
                  cartItems={cartItems}
                  getCartTotal={getCartTotal}
                  clearCart={clearCart}
                />
              } 
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;