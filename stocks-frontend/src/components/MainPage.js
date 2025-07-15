import React, { useState } from 'react';
import Modal from './Modal';
import SignInModal from './SignInModal';
import './MainPage.css';

const MainPage = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <div className="main-page">
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="main-logo-icon">
              <div className="main-logo-shape"></div>
            </div>
            <span className="logo-text">StockFlow</span>
          </div>
          
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div className="header-actions">
            <button className="login-button" onClick={openSignInModal}>
              Login
            </button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Master Your Stock Portfolio</h1>
            <p>
              Advanced trading platform with real-time analytics, portfolio management, 
              and intelligent insights to maximize your investment potential.
            </p>
            <div className="hero-buttons">
              <button className="cta-button" onClick={openSignInModal}>
                Get Started
              </button>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="preview-title">Portfolio Dashboard</div>
              </div>
              <div className="preview-content">
                <div className="chart-container">
                  <div className="chart-line chart-line-1"></div>
                  <div className="chart-line chart-line-2"></div>
                  <div className="chart-bars">
                    <div className="chart-bar" style={{height: '30%'}}></div>
                    <div className="chart-bar" style={{height: '60%'}}></div>
                    <div className="chart-bar" style={{height: '40%'}}></div>
                    <div className="chart-bar" style={{height: '80%'}}></div>
                    <div className="chart-bar" style={{height: '55%'}}></div>
                  </div>
                  <div className="stats-cards">
                    <div className="stat-card">
                      <div className="stat-value">$124,530</div>
                      <div className="stat-label">Total Value</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">+15.2%</div>
                      <div className="stat-label">Today's Gain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-content">
          <h2>Why Choose StockFlow?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Real-time Analytics</h3>
              <p>Get live market data and advanced charting tools to make informed decisions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Portfolio Management</h3>
              <p>Track your investments, analyze performance, and optimize your portfolio.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Trading</h3>
              <p>Bank-level security with encrypted transactions and two-factor authentication.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Insights</h3>
              <p>Machine learning algorithms provide personalized investment recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="main-logo-icon">
                <div className="main-logo-shape"></div>
              </div>
              <span className="logo-text">StockFlow</span>
            </div>
            <p>The future of stock trading is here.</p>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#api">API</a>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#docs">Documentation</a>
            <a href="#status">Status</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 StockFlow. All rights reserved.</p>
        </div>
      </footer>

      {/* Sign In Modal */}
      <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal}>
        <SignInModal onClose={closeSignInModal} />
      </Modal>
    </div>
  );
};

export default MainPage;