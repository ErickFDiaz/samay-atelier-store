import { Link } from "react-router-dom"
const Item = ({ product }) => {
    const { title, price, pictureUrl, id, description } = product

    return (
        <>
            <div className="card" style={{ width: '18rem', height: '530px' }}>
                <img src={pictureUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: '50px' }}>{title}</h5>
                    <h5 className='fw-bold'>S/.{price}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/item/${id}`} href="#" className="btn btn-primary">Comprar</Link>
                </div>
            </div>
        </>
    );
}

export default Item