import React, { useState } from 'react';
import ReferEarnBanner from './components/ReferEarnBanner/ReferEarnBanner';
import SwapCenterBanner from './components/SwapCenterBanner/SwapCenterBanner';
import BonusVEsBanner from './components/BonusVEsBanner/BonusVEsBanner';
import CaptchaTasksBanner from './components/CaptchaTasksBanner/CaptchaTasksBanner';
import ExchangeCenterBanner from './components/ExchangeCenterBanner/ExchangeCenterBanner';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const banners = [
    { id: 'refer', name: '1. Refer & Earn', component: <ReferEarnBanner /> },
    { id: 'swap', name: '2. Swap Center', component: <SwapCenterBanner /> },
    { id: 'bonus', name: '3. Bonus VEs', component: <BonusVEsBanner /> },
    { id: 'captcha', name: '4. Captcha Tasks', component: <CaptchaTasksBanner /> },
    { id: 'exchange', name: '5. Exchange Center', component: <ExchangeCenterBanner /> },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#161827', padding: '2rem 1rem' }}>
      <div className="container-xl">
        {/* Header */}
        <header className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#60a5fa' }}>VELOOP Rewards Design System</span>
          </div>
          <h1 className="font-display fw-bold text-white mb-2" style={{ fontSize: '2.5rem' }}>
            Promotional & Feature Banners
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1rem' }}>
            Redesigned premium, trustworthy, and interactive fintech banner cards built with React, Vite, and CSS Modules.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <button
            onClick={() => setActiveTab('all')}
            className={`btn px-3 py-2 rounded-pill text-white transition-all`}
            style={{
              backgroundColor: activeTab === 'all' ? '#3b82f6' : 'rgba(255, 255, 255, 0.05)',
              border: activeTab === 'all' ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            All Banners
          </button>
          {banners.map((banner) => (
            <button
              key={banner.id}
              onClick={() => setActiveTab(banner.id)}
              className={`btn px-3 py-2 rounded-pill text-white transition-all`}
              style={{
                backgroundColor: activeTab === banner.id ? '#3b82f6' : 'rgba(255, 255, 255, 0.05)',
                border: activeTab === banner.id ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              {banner.name}
            </button>
          ))}
        </div>

        {/* Banner Display Section */}
        <main className="d-flex flex-column gap-5">
          {banners
            .filter((banner) => activeTab === 'all' || activeTab === banner.id)
            .map((banner) => (
              <section key={banner.id} id={banner.id} className="w-100">
                {banner.component}
              </section>
            ))}
        </main>

        {/* Footer */}
        <footer className="text-center mt-5 pt-4 border-top border-secondary border-opacity-10 text-muted" style={{ fontSize: '0.85rem' }}>
          VELOOP Rewards Frontend Task — Day 1 Foundation Milestone
        </footer>
      </div>
    </div>
  );
}

export default App;
