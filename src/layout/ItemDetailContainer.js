import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
// import getProduct from '../mocks/oneProductMock'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  console.log("item: ", item);
  const {id} = useParams()

  const getProduct = (id) => {
    fetch("../JSON/DataList.json")
    .then((response)=> response.json())
    .then((data) =>
      setItem(data.filter((item)=>item.id===parseInt(id))[0])
    )
  }

  useEffect(() => {
    getProduct(id)
  }, [id])
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