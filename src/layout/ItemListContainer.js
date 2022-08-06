import './ItemListContainer.css';
import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList';

import getProducts from '../mocks/productsMock';

import { useEffect, useState } from 'react';




const ItemListContainer = (props) => {
    const [productsList, setProductsList] = useState([])

    // const onAdd = (cantidad) => {
    //     console.log(`Agregaste al carrito ${cantidad} productos`);
    // }

    console.log('Mounted!');

    useEffect(() => {
        console.log("I'm the useEffect");
        getProducts
            .then((res) => {
                if(category){
                    setProductsList(
                        res.filter(product => product.category === category)
                    )
                }else{
                setProductsList(res)

                }
            })
            .catch((error) => {
                setProductsList('Hubo un error')
            })
    }, [])

    console.log(productsList);


    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <h2 className="greeting">{props.greeting}</h2>
                    {productsList.length!==0?(
                    <ItemList productsList={productsList} />

                    ):(
                        <h1>Cargando Productos ...</h1>
                    )}
                </div>
            </div>


            {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
        </>
    )
};

export default ItemListContainer;