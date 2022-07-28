import React, { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {

  const [contador, setContador] = useState(initial)
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }

  }
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1)
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='border rounded p-3 me-2 fw-bold'>
          <button className='btn' onClick={restar}>-</button>
          <span>{contador}</span>
          <button className='btn' onClick={sumar}>+</button>
        </div>
        <button className="btn btn-danger" onClick={()=>onAdd(contador)}>Comprar</button>

      </div>
      
    </>
  )
}

export default ItemCount


