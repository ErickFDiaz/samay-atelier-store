import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    return (
    <Link to={'/cart'}>
        <div className="cart-container">
            <GrCart style={{fontSize: 35 }}/>
            <span className='cart-counter'>0</span>
        </div>
    </Link>
        
    )
}

export default CartWidget;