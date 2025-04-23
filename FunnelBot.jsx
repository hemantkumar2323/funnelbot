import React, { useState } from 'react';

export default function FunnelBot() {
  const [productName, setProductName] = useState('');
  const [brandStyle, setBrandStyle] = useState('Clean Minimal');
  const [funnel, setFunnel] = useState(null);

  const generateFunnel = () => {
    const output = {
      hero: `🚀 ${productName}: Transform Your Daily Routine`,
      hook: `Get instant results with zero effort. See why 10,000+ people switched.`,
      offer: `Buy 1 Get 1 Free | Free Shipping | 48h Delivery Guarantee`,
      aovBoosters: ['🔥 Add-on: Premium Storage Case - ₹299', '✅ Extended Warranty - ₹99'],
      trustElements: ['⭐ 4.8 Rating from 21,372 reviews', '✅ Trusted by influencers', '🔒 100% Secure Checkout']
    };
    setFunnel(output);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🧠 FunnelBot — AI Sales Funnel Generator</h1>

      <input
        type="text"
        placeholder="Enter product name..."
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />

      <select value={brandStyle} onChange={(e) => setBrandStyle(e.target.value)} style={{ padding: '0.5rem' }}>
        <option>Clean Minimal</option>
        <option>Masculine / Tech</option>
        <option>Feminine / Beauty</option>
        <option>Bold / Fun / GenZ</option>
      </select>

      <button onClick={generateFunnel} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Generate Funnel
      </button>

      {funnel && (
        <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1.5rem' }}>
          <h2>{funnel.hero}</h2>
          <p><strong>Hook:</strong> {funnel.hook}</p>
          <p><strong>Offer:</strong> {funnel.offer}</p>
          <p><strong>AOV Boosters:</strong></p>
          <ul>
            {funnel.aovBoosters.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p><strong>Trust Elements:</strong></p>
          <ul>
            {funnel.trustElements.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
