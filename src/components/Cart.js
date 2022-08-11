import React,{useContext} from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart);
  return (
    <div>
      {cart.map(product => <p key={product.id}>{product.title} - Cantidad: {product.quantity}</p>)}
    </div>
  )
}

export default Cart