import React from 'react';
import { CART_CONFIG } from './config';

function PromoBanner() {
  return (
    <div style={{ backgroundColor: '#eef6ff', border: '1px solid #b9d7fb', padding: '10px 15px', borderRadius: '6px', marginBottom: '20px', fontSize: '14px', color: '#004085' }}>
      <span>🚚 Free shipping available on all orders over {CART_CONFIG.currencySymbol}{CART_CONFIG.freeShippingThreshold}!</span>
    </div>
  );
}

export default PromoBanner;