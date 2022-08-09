import React, { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setcount] = useState(initial)
  const sumar = () => {
    if (count < stock) {
      setcount(count + 1)
    }

  }
  const restar = () => {
    if (count > initial) {
      setcount(count - 1)
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='border rounded p-3 me-2 fw-bold'>
          <button className='btn' onClick={restar}>-</button>
          <span>{count}</span>
          <button className='btn' onClick={sumar}>+</button>
        </div>
        <button className="btn btn-danger" onClick={()=>onAdd(count)}>Agregar al carrito</button>

      </div>
      
    </>
  )
}

export default ItemCount


