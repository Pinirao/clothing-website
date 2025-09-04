import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiHeart, 
  FiShield, 
  FiTruck,
  FiAward,
  FiUsers,
  FiChevronDown
} from 'react-icons/fi';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [expandedValue, setExpandedValue] = useState(null);

  // Values data
  const values = [
    {
      icon: <FiHeart size={32} />,
      title: 'Sustainability',
      description: 'We prioritize eco-friendly materials and ethical manufacturing processes.',
      extendedInfo: 'Our sustainability efforts include using organic cotton, recycled polyester, and implementing water-saving techniques in our production process.'
    },
    {
      icon: <FiAward size={32} />,
      title: 'Quality',
      description: 'Every garment is crafted with attention to detail and built to last.',
      extendedInfo: 'We conduct rigorous quality checks at every stage of production to ensure our products meet the highest standards of craftsmanship.'
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Community',
      description: 'We support local artists and give back to our community.',
      extendedInfo: 'Through our Community Artisan Program, we collaborate with local craftspeople and donate 5% of profits to fashion education initiatives.'
    },
    {
      icon: <FiShield size={32} />,
      title: 'Ethics',
      description: 'Fair wages and safe working conditions at all our partner factories.',
      extendedInfo: 'All our manufacturing partners are certified by the Fair Wear Foundation, and we publish annual transparency reports on our website.'
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Sustainability Officer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'David Kim',
      role: 'Production Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="fashionista-about">
      {/* Hero Section with Parallax Effect */}
      <section className="about-hero">
        <div className="hero-background" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')` }}>
          <div className="overlay"></div>
        </div>
        
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1>Our Story</h1>
            <p>Discover the journey of Fashionista and our passion for sustainable fashion</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Explore Our Collection <FiArrowRight />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* Story Section with Interactive Tabs */}
      <section className="story-section">
        <div className="container">
          <div className="story-tabs">
            <button 
              className={activeTab === 'story' ? 'active' : ''}
              onClick={() => setActiveTab('story')}
            >
              Our Story
            </button>
            <button 
              className={activeTab === 'mission' ? 'active' : ''}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={activeTab === 'sustainability' ? 'active' : ''}
              onClick={() => setActiveTab('sustainability')}
            >
              Sustainability
            </button>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="tab-content"
          >
            {activeTab === 'story' && (
              <div className="content">
                <div className="text-content">
                  <h2>From a Small Boutique to a Lifestyle Brand</h2>
                  <p>Fashionista began in 2010 as a small boutique in Seattle, founded by fashion enthusiasts who believed in quality over quantity. What started as a curated selection of timeless pieces has grown into a complete lifestyle brand known for its commitment to sustainable practices and inclusive sizing.</p>
                  <p>Today, we continue to honor our roots by supporting local artisans and maintaining the personal touch that defined our early days, while expanding our reach to bring conscious fashion to a global audience.</p>
                </div>
                <div className="image-content">
                  <img src="https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Our boutique" />
                </div>
              </div>
            )}
            {activeTab === 'mission' && (
              <div className="content">
                <div className="text-content">
                  <h2>Our Mission: Redefining Fashion Responsibly</h2>
                  <p>Our mission is to create clothing that respects both people and planet. We're committed to transparent supply chains, fair labor practices, and reducing our environmental footprint at every stage of production.</p>
                  <p>We believe that looking good shouldn't come at the expense of our values, which is why we're constantly innovating to make sustainable fashion more accessible and desirable.</p>
                </div>
                <div className="image-content">
                  <img src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Our mission" />
                </div>
              </div>
            )}
            {activeTab === 'sustainability' && (
              <div className="content">
                <div className="text-content">
                  <h2>Our Commitment to the Planet</h2>
                  <p>We've implemented numerous initiatives to minimize our environmental impact, including using organic and recycled materials, reducing water consumption in production, and implementing a circular fashion program.</p>
                  <p>By 2025, we aim to become a carbon-neutral company and source 100% of our materials from sustainable sources.</p>
                </div>
                <div className="image-content">
                  <img src="https://images.unsplash.com/photo-1495756659560-4b7c6a8f84f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Sustainability" />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Values Section with Expandable Cards */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we create</p>
          </motion.div>

          <motion.div 
            className="values-grid"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className={`value-card ${expandedValue === index ? 'expanded' : ''}`}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
              >
                <div className="value-content">
                  <motion.div 
                    className="value-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3>{value.title}</h3>
                  <p className="short-description">{value.description}</p>
                  {expandedValue === index && (
                    <motion.p 
                      className="extended-info"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {value.extendedInfo}
                    </motion.p>
                  )}
                </div>
                <div className="expand-indicator">
                  <FiChevronDown />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Meet Our Team</h2>
            <p>The passionate people behind Fashionista</p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="overlay">
                    <div className="social-links">
                      <a href="#"><FiUsers /></a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            <motion.div 
              className="stat-item"
              variants={fadeIn}
            >
              <h3>12+</h3>
              <p>Years in Business</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              variants={fadeIn}
            >
              <h3>500+</h3>
              <p>Products Designed</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              variants={fadeIn}
            >
              <h3>45</h3>
              <p>Countries Served</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              variants={fadeIn}
            >
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Sustainable Fashion Journey</h2>
            <p>Discover our collections and make a positive impact with your style choices</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Shop Now <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;