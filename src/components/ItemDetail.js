import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
// import {addToCart} from ''

const ItemDetail = ({ item }) => {
    const { title, pictureUrl, price, description, stock } = item

    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        console.log(`You just added ${quantityToAdd} products to your cart`)
        setCount(quantityToAdd)
        // console.log(count)
        addToCart(item, quantityToAdd)
        // navigate('../../Cart')
    }

    return (
        <>
            <div className='container-fluid mb-3'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={pictureUrl} className="rounded mx-auto d-block" alt="..." />
                    </div>
                    <div className='col-6'>
                        <h1 className='fs-3 fw-bold'>{title}</h1>
                        <h6 className='fs-1 fw-bold'>S/. {price}</h6>
                        <p className='text-primary'>Ver los medios de pago</p>
                        <p>{description}</p>

                        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail