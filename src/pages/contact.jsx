import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isCaptchaVerified) {
      alert('Please verify you are not a robot');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        urgency: 'normal'
      });
      recaptchaRef.current.reset();
      setIsCaptchaVerified(false);
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = `Hello, I need assistance with: ${formData.subject || 'general inquiry'}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Our team is always here to help.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>123 Business Avenue, Suite 100<br />New York, NY 10001</p>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Phone Number</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Address</h3>
              <p>info@company.com</p>
              <p>support@company.com</p>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>WhatsApp Support</h3>
              <p>Available 24/7 for urgent inquiries</p>
              <button className="whatsapp-btn" onClick={openWhatsApp}>
                <i className="fab fa-whatsapp"></i> Start Chat
              </button>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="urgency">Urgency</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="captcha-container">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is a test key
                    onChange={handleCaptchaChange}
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={!isCaptchaVerified || isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map-section">
          <h2>Find Us Here</h2>
          <div className="map-container">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304613!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1629990000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;