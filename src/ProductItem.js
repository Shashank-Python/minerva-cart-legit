import React from 'react';
import { THEME } from './theme';

function ProductItem({ product, onAddToCart }) {
  return (
    <div style={{ border: `1px solid ${THEME.colors.border}`, padding: '15px', marginBottom: '15px', borderRadius: THEME.spacing.borderRadiusCard, backgroundColor: '#fff' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
      <p style={{ margin: '0 0 10px 0', color: THEME.colors.secondary }}>Price: ${product.price}</p>
      <button 
        className="button-action" 
        onClick={() => onAddToCart(product)}
        style={{ backgroundColor: THEME.colors.primary, color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px' }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;