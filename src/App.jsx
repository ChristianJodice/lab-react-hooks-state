import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './sampleProducts'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all')

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled)
  }

  const addToCart = (item) => {
    const updatedCart = [...cart, item]
    setCart(updatedCart)
  }

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id)
    setCart(updatedCart)
  }

  // Filter products by category
  const filteredProducts = category === 'all'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === category)

  return (
    <div style={{ backgroundColor: darkModeEnabled ? 'black' : 'white', color: darkModeEnabled ? 'white' : 'black' }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkModeEnabled={darkModeEnabled} handleDarkModeToggle={handleDarkModeToggle}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      {/* Display initial sample products */}
      <ProductList products={filteredProducts} addToCart={addToCart}/>

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default App
