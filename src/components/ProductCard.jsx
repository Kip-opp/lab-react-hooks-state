import React from 'react'
// CHANGE THIS IMPORT to point to your styles folder
import styles from '../styles/ProductCard.module.css' 

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button 
        data-testid={'product-' + product.id}
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
      >
        {product.inStock ? '➕ Add' : '🚫'}
      </button>
    </div>
  )
}

export default ProductCard
