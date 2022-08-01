import './ItemListContainer.css';
import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';


const ItemListContainer = (props) => {
    const [productsList, setProductsList] = useState([]) 

    // const onAdd = (cantidad) => {
    //     console.log(`Agregaste al carrito ${cantidad} productos`);
    // }

    const products = [{
        "id": 1,
        "title": "Floating Clouds  (Ukigumo)",
        "price": 55.69,
        "pictureUrl": "http://dummyimage.com/250x250.png/ff4444/ffffff"
    }, {
        "id": 2,
        "title": "Three Brave Men",
        "price": 68.83,
        "pictureUrl": "http://dummyimage.com/250x250.png/cc0000/ffffff"
    }, {
        "id": 3,
        "title": "Boy in Blue, The",
        "price": 58.31,
        "pictureUrl": "http://dummyimage.com/250x250.png/cc0000/ffffff"
    }, {
        "id": 4,
        "title": "Empire of Silver (Bai yin di guo)",
        "price": 62.69,
        "pictureUrl": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
    }, {
        "id": 5,
        "title": "Last Broadcast, The",
        "price": 45.85,
        "pictureUrl": "http://dummyimage.com/250x250.png/dddddd/000000"
    }]

    const data = new Promise((resolve, reject) => {

        let condition = true
        setTimeout(() => {
            if (condition) {
                resolve(products)
            } else {
                reject('Something wrong')
            }
        }, 2000)
    })

    console.log('Mounted!');

    useEffect(() => {
        console.log("I'm the useEffect");
        data
        .then((res)=>{
            setProductsList(res)
        })
        .catch((error)=>{
            setProductsList('Hubo un error')
        })
    },[])

    console.log(productsList);


    return (
        <>
            <h2 className="greeting">{props.greeting}</h2>
            <ItemList productsList={productsList}/>

            {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
        </>
    )
};

export default ItemListContainer;