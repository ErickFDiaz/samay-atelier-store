import './ItemListContainer.css';
import ItemCount from '../components/ItemCount'
const ItemListContainer = (props) => {
    const onAdd = (cantidad) => {
        console.log(`Agregaste al carrito ${cantidad} productos`);
    }

    return (
        <>
        <h2 className="greeting">{props.greeting}</h2>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    )
};

export default ItemListContainer;