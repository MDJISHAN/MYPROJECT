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
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">StockFlex</span>
          </div>
          
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div className="header-buttons">
            <button className="login-btn" onClick={openSignInModal}>Login</button>
            <button className="get-started-btn" onClick={openSignInModal}>Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Watch. Analyze. Trade.</h1>
          <p className="hero-subtitle">Real-time market insights at your fingertips</p>
          
          <div className="hero-phones">
            <div className="phone phone-1">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header">
                    <div className="phone-time">9:41</div>
                    <div className="phone-status">
                      <div className="signal"></div>
                      <div className="wifi"></div>
                      <div className="battery"></div>
                    </div>
                  </div>
                  <div className="phone-app">
                    <div className="app-chart">
                      <div className="chart-line"></div>
                      <div className="chart-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="phone phone-2">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header">
                    <div className="phone-time">9:41</div>
                    <div className="phone-status">
                      <div className="signal"></div>
                      <div className="wifi"></div>
                      <div className="battery"></div>
                    </div>
                  </div>
                  <div className="phone-app">
                    <div className="app-portfolio">
                      <div className="portfolio-item">
                        <div className="portfolio-icon"></div>
                        <div className="portfolio-details">
                          <div className="portfolio-name">AAPL</div>
                          <div className="portfolio-price">$180.50</div>
                        </div>
                      </div>
                      <div className="portfolio-item">
                        <div className="portfolio-icon"></div>
                        <div className="portfolio-details">
                          <div className="portfolio-name">GOOGL</div>
                          <div className="portfolio-price">$2,780.30</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="phone phone-3">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header">
                    <div className="phone-time">9:41</div>
                    <div className="phone-status">
                      <div className="signal"></div>
                      <div className="wifi"></div>
                      <div className="battery"></div>
                    </div>
                  </div>
                  <div className="phone-app">
                    <div className="app-news">
                      <div className="news-item">
                        <div className="news-title">Market Update</div>
                        <div className="news-content">Stock prices surge...</div>
                      </div>
                      <div className="news-item">
                        <div className="news-title">Tech Stocks</div>
                        <div className="news-content">Apple reaches new high...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Rotation Section */}
      <section className="sector-rotation">
        <div className="container">
          <h2>Sector Rotation</h2>
          <p>Stay ahead of market trends with our advanced sector rotation analysis</p>
          
          <div className="sector-grid">
            <div className="sector-item">
              <div className="sector-icon technology"></div>
              <div className="sector-info">
                <h3>Technology</h3>
                <p className="sector-change">+2.45%</p>
              </div>
            </div>
            <div className="sector-item">
              <div className="sector-icon healthcare"></div>
              <div className="sector-info">
                <h3>Healthcare</h3>
                <p className="sector-change">-1.20%</p>
              </div>
            </div>
            <div className="sector-item">
              <div className="sector-icon finance"></div>
              <div className="sector-info">
                <h3>Finance</h3>
                <p className="sector-change">+0.80%</p>
              </div>
            </div>
            <div className="sector-item">
              <div className="sector-icon energy"></div>
              <div className="sector-info">
                <h3>Energy</h3>
                <p className="sector-change">+3.15%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="introducing">
        <div className="container">
          <div className="introducing-content">
            <div className="introducing-phone">
              <div className="phone phone-intro">
                <div className="phone-screen">
                  <div className="phone-content">
                    <div className="phone-header">
                      <div className="phone-time">9:41</div>
                      <div className="phone-status">
                        <div className="signal"></div>
                        <div className="wifi"></div>
                        <div className="battery"></div>
                      </div>
                    </div>
                    <div className="phone-app">
                      <div className="app-dashboard">
                        <div className="dashboard-card">
                          <div className="card-title">Portfolio Value</div>
                          <div className="card-value">$124,530</div>
                        </div>
                        <div className="dashboard-chart">
                          <div className="chart-line-intro"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="introducing-text">
              <h2>Introducing</h2>
              <h3>Advanced Trading Platform</h3>
              <p>Experience the future of trading with our cutting-edge platform designed for both beginners and professionals.</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <div className="feature-text">Real-time Analytics</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-text">Secure Trading</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <div className="feature-text">Mobile First</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <div className="feature-text">Fast Execution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oil Monitor Section */}
      <section className="oil-monitor">
        <div className="container">
          <div className="oil-content">
            <div className="oil-text">
              <h2>Oil Monitor</h2>
              <p>Track oil prices and energy sector movements with advanced analytics and real-time data.</p>
              
              <div className="oil-stats">
                <div className="stat">
                  <div className="stat-label">Current Price</div>
                  <div className="stat-value">$82.50</div>
                  <div className="stat-change positive">+2.45%</div>
                </div>
                <div className="stat">
                  <div className="stat-label">24h High</div>
                  <div className="stat-value">$84.20</div>
                </div>
                <div className="stat">
                  <div className="stat-label">24h Low</div>
                  <div className="stat-value">$80.15</div>
                </div>
              </div>
            </div>
            
            <div className="oil-chart">
              <div className="chart-container">
                <div className="chart-grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>
                <div className="oil-price-line"></div>
                <div className="chart-points">
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Ideas Section */}
      <section className="trading-ideas">
        <div className="container">
          <h2>Trading Ideas</h2>
          <p>Get expert insights and trading recommendations</p>
          
          <div className="ideas-grid">
            <div className="idea-card">
              <div className="idea-header">
                <div className="idea-symbol">AAPL</div>
                <div className="idea-action buy">BUY</div>
              </div>
              <div className="idea-content">
                <div className="idea-price">$180.50</div>
                <div className="idea-change">+2.45%</div>
                <div className="idea-description">Strong earnings report expected</div>
              </div>
            </div>
            
            <div className="idea-card">
              <div className="idea-header">
                <div className="idea-symbol">TSLA</div>
                <div className="idea-action sell">SELL</div>
              </div>
              <div className="idea-content">
                <div className="idea-price">$850.25</div>
                <div className="idea-change">-1.20%</div>
                <div className="idea-description">Overvalued at current levels</div>
              </div>
            </div>
            
            <div className="idea-card">
              <div className="idea-header">
                <div className="idea-symbol">GOOGL</div>
                <div className="idea-action buy">BUY</div>
              </div>
              <div className="idea-content">
                <div className="idea-price">$2,780.30</div>
                <div className="idea-change">+0.80%</div>
                <div className="idea-description">AI developments driving growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose StockFlex Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose StockFlex?</h2>
          
          <div className="choose-grid">
            <div className="choose-item">
              <div className="choose-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Execute trades in milliseconds with our advanced infrastructure</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🔐</div>
              <h3>Bank-Level Security</h3>
              <p>Your funds and data are protected with military-grade encryption</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">📈</div>
              <h3>Advanced Analytics</h3>
              <p>Make informed decisions with our comprehensive market analysis</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🌍</div>
              <h3>Global Markets</h3>
              <p>Trade stocks from over 50 countries and exchanges worldwide</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🎯</div>
              <h3>Precision Trading</h3>
              <p>Advanced order types and algorithmic trading capabilities</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">📱</div>
              <h3>Mobile First</h3>
              <p>Trade anywhere, anytime with our award-winning mobile app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions Section */}
      <section className="subscriptions">
        <div className="container">
          <h2>Subscriptions</h2>
          <p>Choose the plan that fits your trading style</p>
          
          <div className="subscription-grid">
            <div className="subscription-card">
              <div className="subscription-header">
                <h3>Basic</h3>
                <div className="subscription-price">
                  <span className="price">$0</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="subscription-features">
                <div className="feature">✓ Real-time quotes</div>
                <div className="feature">✓ Basic charting</div>
                <div className="feature">✓ 5 watchlists</div>
                <div className="feature">✓ Email alerts</div>
              </div>
              <button className="subscription-btn" onClick={openSignInModal}>Get Started</button>
            </div>
            
            <div className="subscription-card featured">
              <div className="subscription-header">
                <h3>Pro</h3>
                <div className="subscription-price">
                  <span className="price">$29</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="subscription-features">
                <div className="feature">✓ Everything in Basic</div>
                <div className="feature">✓ Advanced analytics</div>
                <div className="feature">✓ Unlimited watchlists</div>
                <div className="feature">✓ Priority support</div>
                <div className="feature">✓ Trading signals</div>
              </div>
              <button className="subscription-btn" onClick={openSignInModal}>Buy Now</button>
            </div>
            
            <div className="subscription-card">
              <div className="subscription-header">
                <h3>Enterprise</h3>
                <div className="subscription-price">
                  <span className="price">$99</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="subscription-features">
                <div className="feature">✓ Everything in Pro</div>
                <div className="feature">✓ API access</div>
                <div className="feature">✓ Custom integrations</div>
                <div className="feature">✓ Dedicated support</div>
                <div className="feature">✓ Advanced reporting</div>
              </div>
              <button className="subscription-btn" onClick={openSignInModal}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>StockFlex is a leading financial technology company dedicated to democratizing access to global markets. Founded in 2020, we've helped over 1 million traders worldwide achieve their financial goals.</p>
              
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">1M+</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat">
                  <div className="stat-number">$50B+</div>
                  <div className="stat-label">Volume Traded</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="team-placeholder">
                <div className="team-member">
                  <div className="member-avatar"></div>
                  <div className="member-info">
                    <div className="member-name">John Smith</div>
                    <div className="member-role">CEO & Founder</div>
                  </div>
                </div>
                <div className="team-member">
                  <div className="member-avatar"></div>
                  <div className="member-info">
                    <div className="member-name">Sarah Johnson</div>
                    <div className="member-role">CTO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* Stock Ticker */}
        <div className="stock-ticker">
          <div className="ticker-container">
            <div className="ticker-item">
              <span className="ticker-symbol">AAPL</span>
              <span className="ticker-price">$180.50</span>
              <span className="ticker-change positive">+2.45%</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-symbol">GOOGL</span>
              <span className="ticker-price">$2,780.30</span>
              <span className="ticker-change positive">+0.80%</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-symbol">TSLA</span>
              <span className="ticker-price">$850.25</span>
              <span className="ticker-change negative">-1.20%</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-symbol">MSFT</span>
              <span className="ticker-price">$420.75</span>
              <span className="ticker-change positive">+1.85%</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-symbol">AMZN</span>
              <span className="ticker-price">$3,245.60</span>
              <span className="ticker-change positive">+3.20%</span>
            </div>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h4>StockFlex</h4>
            <p>The future of trading is here.</p>
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
            <a href="#legal">Legal</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 StockFlex. All rights reserved.</p>
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