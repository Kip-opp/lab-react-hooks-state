import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true },
  { id: 3, name: 'iPhone', price: '$99.00', category: 'phones', inStock: true }   
]

const ProductList = ({ categoryFilter, addToCart }) => {
  const filteredProducts = categoryFilter === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === categoryFilter);

  return (
    <div className="product-list" style={{ width: '100%' }}>
      <h2>Available Products</h2>
      
      {filteredProducts.length === 0 ? (
        // FIX: Changed "found" to "available" to match test
        <p>No products available in this category.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
