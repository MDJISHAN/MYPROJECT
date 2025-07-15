import React, { useState } from 'react';
import './IntradayScan.css';

const IntradayScan = ({ onBack, scanType = 'intraday' }) => {
  const [activeTab, setActiveTab] = useState('Intraday Boost');
  const [filterBy, setFilterBy] = useState('Volume');

  const stockData = [
    { 
      name: 'AXIS SECURITIES', 
      symbol: 'AXISSEC', 
      ltp: 1657.50, 
      percentageChange: 4.85, 
      volume: 124587,
      chart: 'up',
      action: 'BUY'
    },
    { 
      name: 'ADITYA CHEMICALS', 
      symbol: 'ADITYACHEM', 
      ltp: 908.75, 
      percentageChange: 3.92, 
      volume: 89654,
      chart: 'up',
      action: 'BUY'
    },
    { 
      name: 'BIRLASOFT GRANULES', 
      symbol: 'BIRLASOFTG', 
      ltp: 2569.30, 
      percentageChange: -2.45, 
      volume: 67543,
      chart: 'down',
      action: 'SELL'
    },
    { 
      name: 'BAJAJ HINDUSTHAN', 
      symbol: 'BAJAJHIND', 
      ltp: 1845.80, 
      percentageChange: 2.18, 
      volume: 95876,
      chart: 'up',
      action: 'BUY'
    }
  ];

  const tabs = ['Intraday Boost', 'Volume Boost', 'Unusual Volume'];
  const filterOptions = ['Volume', 'Price', 'Change%', 'Market Cap'];

  const getTitle = () => {
    switch(scanType) {
      case 'volume':
        return 'Volume Boost';
      case 'intraday-boost':
        return 'Intraday Boost';
      default:
        return 'Intraday Scan';
    }
  };

  return (
    <div className="intraday-scan-page">
      {/* Header */}
      <header className="intraday-header">
        <div className="intraday-header-container">
          <div className="intraday-logo">
            <span className="intraday-logo-icon">📈</span>
            <span className="intraday-logo-text">stocks4u</span>
          </div>
          
          <div className="intraday-search">
            <input 
              type="text" 
              placeholder="Search Stocks"
              className="intraday-search-input"
            />
          </div>
          
          <div className="intraday-user">
            <button className="intraday-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="intraday-main">
        <div className="intraday-container">
          <div className="intraday-title">
            <h1>{getTitle()}</h1>
            <div className="intraday-info">
              <span className="info-icon">ℹ️</span>
              <span className="info-text">Real-time stock screening</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="intraday-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="intraday-controls">
            <div className="filter-section">
              <label>Filter By:</label>
              <select 
                value={filterBy} 
                onChange={(e) => setFilterBy(e.target.value)}
                className="filter-select"
              >
                {filterOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="action-buttons">
              <button className="action-btn screener">Screener</button>
              <button className="action-btn export">Export</button>
            </div>
          </div>

          {/* Stock Table */}
          <div className="intraday-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {stockData.length} results</span>
              <span className="last-updated">Last updated: 2 minutes ago</span>
            </div>

            <div className="intraday-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Name</div>
                <div className="table-cell">Symbol</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Percentage Change</div>
                <div className="table-cell">Volume</div>
                <div className="table-cell">Chart</div>
              </div>

              {stockData.map((stock, index) => (
                <div key={index} className="table-row stock-row">
                  <div className="table-cell stock-name">
                    <div className="stock-info">
                      <span className="stock-title">{stock.name}</span>
                      <span className="stock-sector">Technology</span>
                    </div>
                  </div>
                  <div className="table-cell stock-symbol">{stock.symbol}</div>
                  <div className="table-cell stock-price">₹{stock.ltp.toFixed(2)}</div>
                  <div className={`table-cell stock-change ${stock.percentageChange >= 0 ? 'positive' : 'negative'}`}>
                    <span className="change-value">
                      {stock.percentageChange >= 0 ? '+' : ''}{stock.percentageChange.toFixed(2)}%
                    </span>
                    <button className={`action-tag ${stock.action === 'BUY' ? 'buy' : 'sell'}`}>
                      {stock.action}
                    </button>
                  </div>
                  <div className="table-cell stock-volume">{stock.volume.toLocaleString()}</div>
                  <div className="table-cell stock-chart">
                    <div className="chart-container">
                      <div className={`chart-line ${stock.chart}`}>
                        <div className="chart-area"></div>
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
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn prev" disabled>Previous</button>
            <div className="page-numbers">
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <span className="page-dots">...</span>
              <button className="page-btn">10</button>
            </div>
            <button className="page-btn next">Next</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntradayScan;