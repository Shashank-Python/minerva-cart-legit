import React from 'react';

function ProductItem({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '6px', backgroundColor: '#fff' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
      <p style={{ margin: '0 0 10px 0', color: '#666' }}>Price: ${product.price}</p>
      <button 
        className="button-action" 
        onClick={() => onAddToCart(product)}
        style={{ backgroundColor: '#222', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px' }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;