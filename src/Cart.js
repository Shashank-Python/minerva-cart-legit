import React from 'react';
import { calculateSubtotal, formatCurrency } from './utils';

function Cart({ cartItems }) {
  const totalPrice = calculateSubtotal(cartItems);

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
      <h2 style={{ fontSize: '20px', marginTop: '0', marginBottom: '15px' }}>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ color: '#888' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'between', marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px dashed #ddd' }}>
              <div>
                <strong style={{ display: 'block' }}>{item.name}</strong>
                <span style={{ color: '#666', fontSize: '14px' }}>Qty: {item.quantity} × {formatCurrency(item.price)}</span>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '2px solid #ddd', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <span>Total:</span>
            <span>{formatCurrency(totalPrice)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;