import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css' 

const App = () => {
  // TODO: Implement state for dark mode toggle
     const [darkMode, setDarkMode] = useState(false);

  // TODO: Implement state for cart management
const [cartItems, setCartItems] = useState([]);

  // TODO: Implement state for category filtering
const [categoryFilter, setCategoryFilter] = useState('all');

  // --- HANDLERS ---
  const toggleTheme = () => setDarkMode(prev => !prev);
  const addToCart = (product) => setCartItems(prev => [...prev, product]);
  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);
  
  // NEW HANDLER: Remove item by index
  const removeFromCart = (indexToRemove) => {
    setCartItems(prevItems => 
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    // OUTER WRAPPER: Handles the full page background color
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      
      {/* INNER CONTAINER: Handles centering and layout */}
      <div className="app-container">
      
        <h1>🛒 Shopping App</h1>
        <p style={{ textAlign: 'center' }}>
          Welcome! The App has implemented filtering, cart management, and dark mode.
        </p>

        {/* Controls Wrapper */}
        <div className="controls-wrapper">
          
          {/* Filter Section */}
          <div className="filter-section">
            <label>Filter by Category: </label>
            <select value={categoryFilter} onChange={handleCategoryChange}>
              <option value="all">All</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
              <option value="phones">Phones</option>
            </select>
          </div>

          {/* Toggle Button */}
          <DarkModeToggle 
            darkMode={darkMode} 
            toggleTheme={toggleTheme} 
          />
        </div>

        {/* Product Grid */}
        <ProductList 
          categoryFilter={categoryFilter} 
          addToCart={addToCart} 
        />

        {/* Cart Button (Floating Component) */}
        {/* Placed here once, with the Remove handler passed down */}
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
        />
      
      </div>
    </div>
  )
}

export default App
