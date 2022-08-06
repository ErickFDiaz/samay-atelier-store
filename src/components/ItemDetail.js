import React from 'react'

const ItemDetail = ({ item }) => {
    const {title,pictureUrl,price} = item
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
                        {/* <h4>Descripción: </h4> */}
                        {/* <ul>
                            {(descriptionList).map((listItem)=><li key={listItem}>{listItem}</li>)}
                        </ul> */}
                        <button className='btn btn-primary'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail