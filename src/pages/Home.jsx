import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = ({ addToCart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);

  const featuredProducts = [
    { id: 1, title: 'Stylish T-Shirt', price: 19.99, image: 'https://i.pinimg.com/originals/d0/47/8c/d0478c4022e4f9ed140de34475947037.jpg' },
    { id: 2, title: 'Classic Jeans', price: 39.99, image: 'https://media1.popsugar-assets.com/files/thumbor/fLMNfI62Wj_tkpy_DeLfp6v3Bog=/fit-in/1584x2060/filters:format_auto():upscale()/2021/09/23/856/n/1922564/446131d2e595b20e_netimgJyVdVj.jpg' },
    { id: 3, title: 'Elegant Dress', price: 49.99, image: 'https://img.freepik.com/premium-photo/young-woman-elegant-dress-posing_183986-108.jpg?w=2000' },
    { id: 4, title: 'Designer Jacket', price: 89.99, image: 'https://img.freepik.com/premium-photo/photo-jacket-suit-design_804007-49694.jpg?w=2000' },
  ];

  const newArrivals = [
    { id: 5, title: 'Summer Blouse', price: 29.99, image: 'https://i5.walmartimages.com/seo/Uvplove-Summer-Blouses-for-Women-Elegant-Casual-V-Neck-Chiffon-Blouses-Tops-Shirts_97f05fd6-6e12-4ce6-9dd9-dc75562db06f.a44361e9492c889fe20f2867a9cba355.jpeg' },
    { id: 6, title: 'Casual Shorts', price: 24.99, image: 'https://i.pinimg.com/originals/4c/86/03/4c86037e0948424072c7a5726fe02cdc.jpg' },
    { id: 7, title: 'Formal Shirt', price: 44.99, image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/428289539/BE/OO/UY/109591399/formal-shirt-jpg-1000x1000.jpg' },
    { id: 8, title: 'Designer Skirt', price: 39.99, image: 'https://5.imimg.com/data5/UM/ZW/IU/SELLER-29380848/ladies-bandhani-skirt-1000x1000.jpeg' },
  ];

  const bestSellers = [
    { id: 9, title: 'Leather Handbag', price: 79.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
    { id: 10, title: 'Sunglasses', price: 34.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
    { id: 11, title: 'Running Shoes', price: 89.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
    { id: 12, title: 'Winter Scarf', price: 24.99, image: 'https://images.unsplash.com/photo-1602817538386-7a6c500a9b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
  ];

  const categories = [
    { id: 1, name: 'Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Women', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Accessories', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
  ];

  const testimonials = [
    { id: 1, name: 'Sarah J.', text: 'The quality of clothes is exceptional. I always get compliments when I wear pieces from this store!', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
    { id: 2, name: 'Michael T.', text: 'Fast shipping and perfect fit. This is now my go-to store for all my fashion needs.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 3, name: 'Emma L.', text: 'Their seasonal collections are always on point. I love the unique designs and attention to detail.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  ];

  const heroSlides = [
    { id: 1, title: 'Summer Collection', subtitle: 'Discover the latest trends for the sunny season', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80', cta: 'Shop Now', color: '#FF7D29' },
    { id: 2, title: 'New Arrivals', subtitle: 'Fresh styles just landed in our store', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80', cta: 'Explore', color: '#6A0DAD' },
    { id: 3, title: 'Special Discounts', subtitle: 'Up to 40% off on selected items', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80', cta: 'Get Deals', color: '#E94560' },
  ];

  const posters = [
    { id: 1, title: 'Seasonal Sale', subtitle: 'Up to 50% off winter collection', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80', cta: 'Shop Now', theme: 'dark' },
    { id: 2, title: 'New Accessories', subtitle: 'Complete your look with our new accessories', image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80', cta: 'Discover', theme: 'light' },
  ];

  const brands = [
    { id: 1, name: 'Brand 1', logo: 'https://fabrikbrands.com/wp-content/uploads/Clothing-brand-logos-11.png' },
    { id: 2, name: 'Brand 2', logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/801c75165402919.64070b1c19a36.jpg' },
    { id: 3, name: 'Brand 3', logo: 'https://static.vecteezy.com/system/resources/previews/046/277/731/non_2x/cloth-brand-minimalist-logo-concept-vector.jpg' },
    { id: 4, name: 'Brand 4', logo: 'https://static.vecteezy.com/system/resources/previews/023/160/394/non_2x/clothing-logo-design-women-boutique-logo-vector.jpg' },
    { id: 5, name: 'Brand 5', logo: 'https://designshifu.com/wp-content/uploads/2022/12/DS_Blog_Image_Best_Clothing_Brand_Logos_of_all_Time_5-1024x536.jpg' },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="home">
      {/* Advanced Hero Section */}
      <section 
        className="hero" 
        ref={heroRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                '--accent-color': slide.color
              }}
            >
              <div className="hero-content">
                <div className="hero-text">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <Link 
                    to="/shop"
                    className="hero-cta"
                    style={{ backgroundColor: slide.color }}
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="hero-nav hero-nav-prev" onClick={prevSlide}>
          <span>&#8249;</span>
        </button>
        <button className="hero-nav hero-nav-next" onClick={nextSlide}>
          <span>&#8250;</span>
        </button>
        
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        <div className="hero-scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Brand Strip Section */}
      <section className="brand-strip">
        <div className="container">
          <div className="brand-grid">
            {brands.map(brand => (
              <div key={brand.id} className="brand-item">
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Discover our most popular items</p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard 
                  product={product} 
                  actionButtonText={
                    <Link to="/shop" className="shop-now-btn">Shop Now</Link>
                  }
                  onActionClick={null}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Section 1 */}
      <section className="poster-section">
        <div 
          className="poster-banner first-poster"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${posters[0].image})` }}
        >
          <div className="poster-content">
            <h2 className="poster-title">{posters[0].title}</h2>
            <p className="poster-subtitle">{posters[0].subtitle}</p>
            <Link to="/shop" className="poster-cta">{posters[0].cta}</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Find your perfect style</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="category-card"
              >
                <div 
                  className="category-image"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="category-overlay">
                    <h3 className="category-name">{category.name}</h3>
                    <Link to="/shop" className="category-cta">Explore</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="section new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-subtitle">Fresh styles just for you</p>
          </div>
          <div className="product-grid">
            {newArrivals.map((product) => (
              <div key={product.id}>
                <ProductCard 
                  product={product} 
                  actionButtonText={
                    <Link to="/shop" className="shop-now-btn">Shop Now</Link>
                  }
                  onActionClick={null}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Section 2 */}
      <section className="poster-section">
        <div 
          className="poster-banner second-poster"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${posters[1].image})` }}
        >
          <div className="poster-content">
            <h2 className="poster-title">{posters[1].title}</h2>
            <p className="poster-subtitle">{posters[1].subtitle}</p>
            <Link to="/shop" className="poster-cta">{posters[1].cta}</Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section best-sellers">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best Sellers</h2>
            <p className="section-subtitle">Our most loved products</p>
          </div>
          <div className="product-grid">
            {bestSellers.map((product) => (
              <div key={product.id}>
                <ProductCard 
                  product={product} 
                  actionButtonText={
                    <Link to="/shop" className="shop-now-btn">Shop Now</Link>
                  }
                  onActionClick={null}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Hear from our happy shoppers</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <div className="testimonial-quote">"</div>
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-text">Get the latest updates on new products and upcoming sales</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;