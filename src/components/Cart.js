import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart,cleanCart } = useContext(CartContext)
  console.log(cart);
  return (
    <div>
      {cart.map(product => (
        <div key={product.id}>
          <p>{product.title} - Cantidad: {product.quantity}</p>
          <button onClick={()=>removeFromCart(product.id)}>Eliminar</button>
        </div>
      ))}

      <button onClick={()=>cleanCart()}>Limpiar Carrito</button>
    </div>
  )
}

export default Cart