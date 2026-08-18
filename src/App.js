import React, { useState } from 'react';
import { PRODUCTS } from './product';
import ProductList from './ProductList';
import Cart from './Cart';
import PromoBanner from './PromoBanner';
import Footer from './Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="app-frame" style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#222' }}>Minerva Shopping Experience</h1>
      </header>
      <PromoBanner />
      <main className="container">
        <ProductList products={PRODUCTS} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;