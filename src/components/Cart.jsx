import React, { useState, useEffect } from 'react'
import styles from './Cart.module.css'

const Cart = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) setIsOpen(true);
  }, [cartItems.length]);

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <>
      <button 
        className={styles.cartIcon} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Cart"
      >
        🛒
        {cartItems.length > 0 && (
          <span className={styles.badge}>{cartItems.length}</span>
        )}
      </button>

      {isOpen && (
        <div className={styles.cartTray}>
          <div className={styles.cartHeader}>
            <span>Shopping Cart</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          {cartItems.length === 0 ? (
             <p style={{ textAlign: 'center', color: '#888', padding: '10px' }}>
               Your cart is empty.
             </p>
          ) : (
            <ul className={styles.cartList}>
               {cartItems.map((item, index) => (
                <li key={index} className={styles.cartItem}>
                  
                  {/* FIX: Exact text "is in your cart" for the test */}
                  <div>
                    {item.name} is in your cart.
                  </div>
                  
                  <button 
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}

export default Cart
