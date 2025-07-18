import React from 'react'

const Cart = ({cart, removeFromCart}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* TODO: Display cart items dynamically */}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} - {item.price} <button onClick={() => removeFromCart(item)}>Remove</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
