import './ItemListContainer.css';
// import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList';



import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = (props) => {
    const { category } = useParams()

    const [productsList, setProductsList] = useState([])

    // const onAdd = (cantidad) => {
    //     console.log(`Agregaste al carrito ${cantidad} productos`);
    // }



    console.log('Mounted!');

    useEffect(() => {
        const db = getFirestore()

        const productsCollection = collection(db, 'products')

        if (category) {
            const q = query(productsCollection, where('category', '==', category))

            getDocs(q)
                .then((snapshot) => {
                    setProductsList(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            const q = query(productsCollection)

            getDocs(q)
                .then((snapshot) => {
                    setProductsList(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        // console.log("I'm the useEffect");
        // getProducts
        //     .then((res) => {
        //         if(category){
        //             setProductsList(
        //                 res.filter(product => product.category === category)
        //             )
        //         }else{
        //         setProductsList(res)

        //         }
        //     })
        //     .catch((error) => {
        //         setProductsList('Hubo un error')
        //     })
    }, [category])

    console.log(productsList);


    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <h2 className="greeting">{props.greeting}</h2>
                    {productsList.length !== 0 ? (
                        <ItemList productsList={productsList} />

                    ) : (
                        <h1>Cargando Productos ...</h1>
                    )}
                </div>
            </div>


            {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
        </>
    )
};

export default ItemListContainer;