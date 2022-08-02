import React from 'react'

const ItemDetail = ({ item }) => {
    return (
        <>
            <div className='container-fluid mb-3'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={item.pictureUrl} class="rounded mx-auto d-block" alt="..."/>
                    </div>
                    <div className='col-6'>
                        <h1 className='fs-3 fw-bold'>{item.title}</h1>
                        <h6 className='fs-1 fw-bold'>S/. {item.price}</h6>
                        <p className='text-primary'><a src={'#'}>Ver los medios de pago</a></p>
                        <h4>Descripción: </h4>
                        <ul>
                            {(item.descriptionList).map((listItem)=><li>{listItem}</li>)}
                        </ul>
                        <button className='btn btn-primary'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail