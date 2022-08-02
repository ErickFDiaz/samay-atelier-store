import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import getProduct from '../mocks/oneProductMock'
const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  console.log("item: ", item);

  useEffect(() => {
    getProduct
      .then((res) => setItem(res))
      .catch((error) => alert('Something wrong', error))
  }, [])
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='fs-4'>ItemDetailContainer</h1>
          <ItemDetail item={item} />
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer