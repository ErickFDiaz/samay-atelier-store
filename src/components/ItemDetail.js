import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    const {title,pictureUrl,price,description, stock} = item
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const onAdd = (quantityToAdd) => {
        console.log(`You just added ${quantityToAdd} products to your cart`)
        setCount(quantityToAdd)
        console.log(count)

        navigate('../../Cart')
    }
    return (
        <>
            <div className='container-fluid mb-3'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={pictureUrl} className="rounded mx-auto d-block" alt="..."/>
                    </div>
                    <div className='col-6'>
                        <h1 className='fs-3 fw-bold'>{title}</h1>
                        <h6 className='fs-1 fw-bold'>S/. {price}</h6>
                        <p className='text-primary'>Ver los medios de pago</p>
                        <p>{description}</p>
                        {/* <h4>Descripción: </h4> */}
                        {/* <ul>
                            {(descriptionList).map((listItem)=><li key={listItem}>{listItem}</li>)}
                        </ul> */}
                        {/* <button className='btn btn-primary'>Comprar</button> */}
                        <ItemCount initial={1} stock={stock} onAdd={onAdd}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail