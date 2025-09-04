import React, { useState } from 'react';
import './MyAccount.css';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phone: '+1 234 567 8901',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    
    if (formType === 'userData') {
      setUserData(prevData => ({
        ...prevData,
        [name]: value
      }));
    } else if (formType === 'loginData') {
      setLoginData(prevData => ({
        ...prevData,
        [name]: value
      }));
    } else if (formType === 'registerData') {
      setRegisterData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      // Reset login form
      setLoginData({ email: '', password: '' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simple validation
    if (registerData.name && registerData.email && registerData.password && registerData.password === registerData.confirmPassword) {
      setIsLoggedIn(true);
      setIsLoginForm(true);
      // Update user data with registered info
      setUserData({
        name: registerData.name,
        email: registerData.email,
        phone: '',
        password: registerData.password
      });
      // Reset register form
      setRegisterData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('profile');
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
  };

  const orders = [
    { id: '#1001', status: 'Delivered', date: '2023-05-15', total: '$125.99' },
    { id: '#1002', status: 'In Transit', date: '2023-06-22', total: '$89.50' },
    { id: '#1003', status: 'Cancelled', date: '2023-07-05', total: '$210.75' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="account-container">
        <div className="auth-container">
          <div className="auth-header">
            <h1>{isLoginForm ? 'Login' : 'Create Account'}</h1>
            <p>{isLoginForm ? 'Sign in to your account' : 'Create a new account to get started'}</p>
          </div>
          
          <div className="auth-tabs">
            <button
              className={isLoginForm ? 'auth-tab active' : 'auth-tab'}
              onClick={() => setIsLoginForm(true)}
            >
              Login
            </button>
            <button
              className={!isLoginForm ? 'auth-tab active' : 'auth-tab'}
              onClick={() => setIsLoginForm(false)}
            >
              Register
            </button>
          </div>
          
          {isLoginForm ? (
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e, 'loginData')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, 'loginData')}
                  required
                />
              </div>
              <button type="submit" className="auth-submit-btn">Login</button>
              <div className="auth-footer">
                <p>Don't have an account? <span onClick={() => setIsLoginForm(false)}>Sign up</span></p>
              </div>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="register-name">Full Name</label>
                <input
                  type="text"
                  id="register-name"
                  name="name"
                  value={registerData.name}
                  onChange={(e) => handleInputChange(e, 'registerData')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email Address</label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  value={registerData.email}
                  onChange={(e) => handleInputChange(e, 'registerData')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  value={registerData.password}
                  onChange={(e) => handleInputChange(e, 'registerData')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="register-confirm-password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={(e) => handleInputChange(e, 'registerData')}
                  required
                />
              </div>
              <button type="submit" className="auth-submit-btn">Create Account</button>
              <div className="auth-footer">
                <p>Already have an account? <span onClick={() => setIsLoginForm(true)}>Sign in</span></p>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="account-container">
      <div className="account-header">
        <div className="header-content">
          <h1>My Account</h1>
          <p>Manage your account settings and view your orders</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      
      <div className="account-layout">
        <div className="account-sidebar">
          <div className="user-card">
            <div className="user-avatar">
              {userData.name.charAt(0)}
            </div>
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
          </div>
          
          <div className="sidebar-menu">
            <button
              className={activeTab === 'profile' ? 'menu-item active' : 'menu-item'}
              onClick={() => setActiveTab('profile')}
            >
              <span className="icon">👤</span>
              <span>Profile</span>
            </button>
            <button
              className={activeTab === 'orders' ? 'menu-item active' : 'menu-item'}
              onClick={() => setActiveTab('orders')}
            >
              <span className="icon">📦</span>
              <span>Orders</span>
            </button>
            <button
              className={activeTab === 'settings' ? 'menu-item active' : 'menu-item'}
              onClick={() => setActiveTab('settings')}
            >
              <span className="icon">⚙️</span>
              <span>Settings</span>
            </button>
          </div>
        </div>
        
        <div className="account-content">
          {activeTab === 'profile' && (
            <div className="tab-content">
              <div className="content-header">
                <h2>Profile Information</h2>
                {!isEditing ? (
                  <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
                ) : (
                  <button className="save-btn" onClick={handleSave}>Save Changes</button>
                )}
              </div>
              
              {!isEditing ? (
                <div className="profile-info">
                  <div className="info-item">
                    <label>Full Name</label>
                    <p>{userData.name}</p>
                  </div>
                  <div className="info-item">
                    <label>Email Address</label>
                    <p>{userData.email}</p>
                  </div>
                  <div className="info-item">
                    <label>Phone Number</label>
                    <p>{userData.phone}</p>
                  </div>
                </div>
              ) : (
                <div className="profile-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userData.name}
                      onChange={(e) => handleInputChange(e, 'userData')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={(e) => handleInputChange(e, 'userData')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={userData.phone}
                      onChange={(e) => handleInputChange(e, 'userData')}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div className="tab-content">
              <h2>Order History</h2>
              <div className="orders-list">
                {orders.map((order, index) => (
                  <div key={index} className="order-card">
                    <div className="order-header">
                      <h3>{order.id}</h3>
                      <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="order-details">
                      <div className="detail">
                        <span className="label">Date:</span>
                        <span>{order.date}</span>
                      </div>
                      <div className="detail">
                        <span className="label">Total:</span>
                        <span className="total">{order.total}</span>
                      </div>
                    </div>
                    <button className="view-order-btn">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="tab-content">
              <h2>Account Settings</h2>
              <div className="settings-options">
                <div className="setting-item">
                  <h3>Password</h3>
                  <p>Change your password regularly to keep your account secure</p>
                  <button className="change-password-btn">Change Password</button>
                </div>
                <div className="setting-item">
                  <h3>Notifications</h3>
                  <p>Manage how you receive notifications</p>
                  <button className="notification-settings-btn">Notification Settings</button>
                </div>
                <div className="setting-item">
                  <h3>Privacy</h3>
                  <p>Manage your privacy settings</p>
                  <button className="privacy-settings-btn">Privacy Settings</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;