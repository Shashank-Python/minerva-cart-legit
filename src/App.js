import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-frame" style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#222' }}>Minerva Shopping Experience</h1>
      </header>
      <main className="container">
        <div className="product-module">Initializing product listing arrays...</div>
        <div className="cart-module">Initializing cart checkout fields...</div>
      </main>
    </div>
  );
}

export default App;