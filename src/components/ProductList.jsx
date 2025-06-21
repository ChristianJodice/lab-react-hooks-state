import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Available Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ProductCard addToCart={addToCart} key={product.id} product={product} />
        ))
      )}
    </div>
  )
}

export default ProductList
