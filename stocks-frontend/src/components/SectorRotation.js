import React, { useState } from 'react';
import './SectorRotation.css';

const SectorRotation = ({ onBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [selectedSector, setSelectedSector] = useState('');

  const sectorData = [
    { name: 'NIFTY BANK', value: 46789.50, change: 2.45, color: 'green', height: 180 },
    { name: 'NIFTY IT', value: 30248.75, change: 1.85, color: 'green', height: 150 },
    { name: 'NIFTY FMCG', value: 54789.25, change: 1.25, color: 'green', height: 120 },
    { name: 'NIFTY PHARMA', value: 12965.80, change: 0.95, color: 'green', height: 100 },
    { name: 'NIFTY AUTO', value: 15847.25, change: 0.65, color: 'green', height: 85 },
    { name: 'NIFTY METAL', value: 7234.50, change: 0.45, color: 'green', height: 70 },
    { name: 'NIFTY REALTY', value: 485.75, change: -0.25, color: 'red', height: 60 },
    { name: 'NIFTY ENERGY', value: 28947.30, change: -0.85, color: 'red', height: 80 },
    { name: 'NIFTY MEDIA', value: 1847.65, change: -1.25, color: 'red', height: 100 },
    { name: 'NIFTY PSU', value: 4789.20, change: -1.85, color: 'red', height: 120 },
    { name: 'NIFTY INFRA', value: 6234.80, change: -2.15, color: 'red', height: 140 },
    { name: 'NIFTY PVTBANK', value: 24789.45, change: -2.75, color: 'red', height: 160 }
  ];

  const stockData = [
    { name: 'NIFTY BANK', symbol: 'NIFTYBANK', ltp: 46789.50, change: 2.45, action: 'BUY' },
    { name: 'NIFTY IT', symbol: 'NIFTYIT', ltp: 30248.75, change: 1.85, action: 'BUY' },
    { name: 'NIFTY FMCG', symbol: 'NIFTYFMCG', ltp: 54789.25, change: 1.25, action: 'BUY' },
    { name: 'NIFTY PHARMA', symbol: 'NIFTYPHARMA', ltp: 12965.80, change: 0.95, action: 'BUY' }
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y'];

  return (
    <div className="sector-rotation-page">
      {/* Header */}
      <header className="sector-header">
        <div className="sector-header-container">
          <div className="sector-logo">
            <span className="sector-logo-icon">📈</span>
            <span className="sector-logo-text">stocks4u</span>
          </div>
          
          <div className="sector-search">
            <input 
              type="text" 
              placeholder="Search markets" 
              className="sector-search-input"
            />
          </div>
          
          <div className="sector-user">
            <button className="sector-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="sector-main">
        <div className="sector-container">
          <div className="sector-title">
            <h1>Sector Rotation</h1>
          </div>

          <div className="sector-content">
            {/* Left Panel - Chart */}
            <div className="sector-chart-panel">
              <div className="chart-header">
                <div className="chart-timeframes">
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

              <div className="sector-chart">
                <div className="chart-container">
                  <div className="chart-bars">
                    {sectorData.map((sector, index) => (
                      <div key={index} className="chart-bar-container">
                        <div 
                          className={`chart-bar ${sector.color}`}
                          style={{ height: `${sector.height}px` }}
                        >
                          <div className="bar-value">{sector.change}%</div>
                        </div>
                        <div className="bar-label">{sector.name.split(' ')[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color green"></div>
                  <span>Top Performing Sectors</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color red"></div>
                  <span>Under Performing Sectors</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Table */}
            <div className="sector-table-panel">
              <div className="table-header">
                <h3>Sector Performance</h3>
                <div className="table-filters">
                  <select className="filter-select">
                    <option value="">All Sectors</option>
                    <option value="bank">Banking</option>
                    <option value="it">IT</option>
                    <option value="pharma">Pharma</option>
                  </select>
                </div>
              </div>

              <div className="sector-table">
                <div className="table-row table-header-row">
                  <div className="table-cell">Sector Name</div>
                  <div className="table-cell">Symbol</div>
                  <div className="table-cell">LTP</div>
                  <div className="table-cell">Change%</div>
                  <div className="table-cell">Action</div>
                  <div className="table-cell">Chart</div>
                </div>

                {stockData.map((stock, index) => (
                  <div key={index} className="table-row">
                    <div className="table-cell stock-name">{stock.name}</div>
                    <div className="table-cell stock-symbol">{stock.symbol}</div>
                    <div className="table-cell stock-price">₹{stock.ltp}</div>
                    <div className={`table-cell stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </div>
                    <div className="table-cell">
                      <button className={`action-btn ${stock.action === 'BUY' ? 'buy' : 'sell'}`}>
                        {stock.action}
                      </button>
                    </div>
                    <div className="table-cell">
                      <div className="mini-chart">
                        <div className={`chart-line ${stock.change >= 0 ? 'up' : 'down'}`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sector-sidebar">
          <div className="sidebar-content">
            <h3>Market Overview</h3>
            <div className="market-stats">
              <div className="stat-item">
                <div className="stat-label">NIFTY 50</div>
                <div className="stat-value">19,745.50</div>
                <div className="stat-change positive">+1.25%</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">SENSEX</div>
                <div className="stat-value">66,230.80</div>
                <div className="stat-change positive">+0.85%</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">BANK NIFTY</div>
                <div className="stat-value">45,120.25</div>
                <div className="stat-change negative">-0.45%</div>
              </div>
            </div>

            <h3>Top Gainers</h3>
            <div className="gainers-list">
              <div className="gainer-item">
                <div className="gainer-name">HDFC BANK</div>
                <div className="gainer-change positive">+3.45%</div>
              </div>
              <div className="gainer-item">
                <div className="gainer-name">ICICI BANK</div>
                <div className="gainer-change positive">+2.85%</div>
              </div>
              <div className="gainer-item">
                <div className="gainer-name">AXIS BANK</div>
                <div className="gainer-change positive">+2.15%</div>
              </div>
            </div>

            <h3>Top Losers</h3>
            <div className="losers-list">
              <div className="loser-item">
                <div className="loser-name">BAJAJ AUTO</div>
                <div className="loser-change negative">-2.45%</div>
              </div>
              <div className="loser-item">
                <div className="loser-name">M&M</div>
                <div className="loser-change negative">-1.85%</div>
              </div>
              <div className="loser-item">
                <div className="loser-name">TATA MOTORS</div>
                <div className="loser-change negative">-1.25%</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SectorRotation;