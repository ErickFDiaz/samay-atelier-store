import { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

    const { quantityInCart } = useContext(CartContext)
    console.log('Cantidad en el carrito', quantityInCart);
    return (
    <Link to={'/cart'}>
        <div className="cart-container" style={{ display: quantityInCart === 0? 'none': 'block'}}>
            <GrCart style={{fontSize: 35 }}/>
            <span className='cart-counter'>{quantityInCart}</span>
        </div>
    </Link>
        
    )
}

export default CartWidget;