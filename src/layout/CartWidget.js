import { GrCart } from 'react-icons/gr';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-container">
            <GrCart style={{fontSize: 35 }}/>
            <span className='cart-counter'>0</span>
        </div>
    )
}

export default CartWidget;