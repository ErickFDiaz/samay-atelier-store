import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
// import getProduct from '../mocks/oneProductMock'
import { useParams } from 'react-router-dom'

import {doc, getDoc,getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  console.log("item: ", item);
  const {id} = useParams()

  const getProduct = (id) => {
    const db = getFirestore()

    const product = doc(db, 'products', id)
    getDoc(product)
    .then((snapshot)=>{
      setItem({...snapshot.data(),id:snapshot.id})
    })
    .catch((error)=>{
      console.log(error);
    })
    
  }

  useEffect(() => {
    getProduct(id)
  }, [id])
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          
          <ItemDetail item={item} />
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer