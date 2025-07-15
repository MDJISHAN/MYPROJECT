import React, { useState } from 'react';
import './OilMonitor.css';

const OilMonitor = ({ onBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [selectedOilType, setSelectedOilType] = useState('Crude Oil');

  const oilData = [
    { type: 'Crude Oil', price: 78.45, change: 2.15, symbol: 'CL', volume: '245,678' },
    { type: 'Brent Oil', price: 82.30, change: 1.85, symbol: 'BZ', volume: '198,567' },
    { type: 'Natural Gas', price: 3.25, change: -0.45, symbol: 'NG', volume: '456,789' },
    { type: 'Heating Oil', price: 2.68, change: 1.25, symbol: 'HO', volume: '123,456' }
  ];

  const newsData = [
    { title: 'Oil prices surge on supply concerns', time: '2 hours ago', impact: 'positive' },
    { title: 'OPEC+ meeting scheduled for next week', time: '4 hours ago', impact: 'neutral' },
    { title: 'US crude inventories decline sharply', time: '6 hours ago', impact: 'positive' },
    { title: 'Geopolitical tensions affect oil markets', time: '8 hours ago', impact: 'negative' }
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y'];
  const oilTypes = ['Crude Oil', 'Brent Oil', 'Natural Gas', 'Heating Oil'];

  return (
    <div className="oil-monitor-page">
      {/* Header */}
      <header className="oil-header">
        <div className="oil-header-container">
          <div className="oil-logo">
            <span className="oil-logo-icon">🛢️</span>
            <span className="oil-logo-text">stocks4u</span>
          </div>
          
          <div className="oil-search">
            <input 
              type="text" 
              placeholder="Search oil & gas"
              className="oil-search-input"
            />
          </div>
          
          <div className="oil-user">
            <button className="oil-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="oil-main">
        <div className="oil-container">
          <div className="oil-title">
            <h1>Oil Monitor</h1>
            <div className="oil-info">
              <span className="info-icon">ℹ️</span>
              <span className="info-text">Real-time oil & gas market tracking</span>
            </div>
          </div>

          {/* Controls */}
          <div className="oil-controls">
            <div className="oil-type-selector">
              <label>Commodity:</label>
              <select 
                value={selectedOilType} 
                onChange={(e) => setSelectedOilType(e.target.value)}
                className="oil-type-select"
              >
                {oilTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="timeframe-selector">
              <label>Timeframe:</label>
              <div className="timeframe-buttons">
                {timeframes.map(timeframe => (
                  <button
                    key={timeframe}
                    className={`timeframe-btn ${selectedTimeframe === timeframe ? 'active' : ''}`}
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="oil-grid">
            {/* Price Chart */}
            <div className="oil-chart-section">
              <div className="chart-header">
                <h3>{selectedOilType} Price Chart</h3>
                <div className="chart-stats">
                  <div className="stat">
                    <span className="stat-label">Current Price</span>
                    <span className="stat-value">$78.45</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Change</span>
                    <span className="stat-value positive">+$2.15 (2.82%)</span>
                  </div>
                </div>
              </div>

              <div className="oil-chart">
                <div className="chart-container">
                  <div className="chart-grid">
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line vertical"></div>
                  </div>
                  
                  <div className="price-line"></div>
                  <div className="price-area"></div>
                  
                  <div className="price-points">
                    <div className="price-point"></div>
                    <div className="price-point"></div>
                    <div className="price-point"></div>
                    <div className="price-point"></div>
                    <div className="price-point"></div>
                    <div className="price-point"></div>
                    <div className="price-point"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Oil Types Table */}
            <div className="oil-types-section">
              <div className="section-header">
                <h3>Oil & Gas Prices</h3>
                <span className="last-updated">Last updated: 1 min ago</span>
              </div>

              <div className="oil-types-table">
                <div className="table-header">
                  <div className="table-cell">Type</div>
                  <div className="table-cell">Price</div>
                  <div className="table-cell">Change</div>
                  <div className="table-cell">Volume</div>
                </div>

                {oilData.map((oil, index) => (
                  <div key={index} className="oil-row">
                    <div className="table-cell oil-type">
                      <div className="oil-info">
                        <span className="oil-name">{oil.type}</span>
                        <span className="oil-symbol">{oil.symbol}</span>
                      </div>
                    </div>
                    <div className="table-cell oil-price">${oil.price}</div>
                    <div className={`table-cell oil-change ${oil.change >= 0 ? 'positive' : 'negative'}`}>
                      {oil.change >= 0 ? '+' : ''}${oil.change.toFixed(2)}
                    </div>
                    <div className="table-cell oil-volume">{oil.volume}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market News */}
            <div className="oil-news-section">
              <div className="section-header">
                <h3>Market News</h3>
                <a href="#" className="view-all">View All</a>
              </div>

              <div className="news-list">
                {newsData.map((news, index) => (
                  <div key={index} className="news-item">
                    <div className="news-content">
                      <h4 className="news-title">{news.title}</h4>
                      <span className="news-time">{news.time}</span>
                    </div>
                    <div className={`news-impact ${news.impact}`}>
                      {news.impact === 'positive' ? '↗' : news.impact === 'negative' ? '↘' : '→'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Summary */}
            <div className="oil-summary-section">
              <div className="section-header">
                <h3>Market Summary</h3>
              </div>

              <div className="summary-stats">
                <div className="summary-stat">
                  <div className="stat-icon">📈</div>
                  <div className="stat-content">
                    <span className="stat-label">Daily High</span>
                    <span className="stat-value">$79.85</span>
                  </div>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon">📉</div>
                  <div className="stat-content">
                    <span className="stat-label">Daily Low</span>
                    <span className="stat-value">$76.20</span>
                  </div>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon">📊</div>
                  <div className="stat-content">
                    <span className="stat-label">Avg Volume</span>
                    <span className="stat-value">2.4M</span>
                  </div>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-content">
                    <span className="stat-label">Target Price</span>
                    <span className="stat-value">$82.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OilMonitor;