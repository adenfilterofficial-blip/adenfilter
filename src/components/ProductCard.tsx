import React from 'react';

type Prices = {
  manual_backwash: number;
  automatic_backwash: number;
  stainless_steel_upgrade?: number;
};

type ProductProps = {
  name: string;
  capacity: number;
  features: string[];
  prices: Prices;
  image?: string;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};

export const ProductCard: React.FC<ProductProps> = ({ name, capacity, features, prices, image }) => {
  return (
    <div className="product-card glass-panel">
      <div className="product-image-container">
        {image ? (
          <img src={image} alt={name} className="product-image" loading="lazy" width={280} height={200} />
        ) : (
          <div className="product-image-placeholder">No Image Available</div>
        )}
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-capacity">{capacity.toLocaleString('id-ID')} Liter / Hari</p>
      <ul className="product-features">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <div className="product-prices">
        <div className="price-row">
          <span className="price-label">Manual Backwash</span>
          <span className="price-value">{formatPrice(prices.manual_backwash)}</span>
        </div>
        <div className="price-row">
          <span className="price-label">Auto Backwash</span>
          <span className="price-value">{formatPrice(prices.automatic_backwash)}</span>
        </div>
        {prices.stainless_steel_upgrade && (
          <div className="price-row" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            <span className="price-label">Upgrade Stainless</span>
            <span className="price-value">+{formatPrice(prices.stainless_steel_upgrade)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
