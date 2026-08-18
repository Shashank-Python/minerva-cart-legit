import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Available Products</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {products.map((product) => (
          <ProductItem 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;