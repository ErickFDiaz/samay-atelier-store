import React from 'react'

const Item = ({product}) => {
    const {title,price,pictureUrl} = product 

    return (
        <>
            <div className="card" style={{width: '18rem', height: '530px'}}>
                <img src={pictureUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{height:'50px'}}>{title}</h5>
                        <h5 className='fw-bold'>S/.{price}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    )
}

export default Item