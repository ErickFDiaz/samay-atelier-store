import { createContext, useState } from "react";

// 1.- Creamos el contexto 
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => { }

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quantity) => {
        // console.table({item,quantity});

        // Carrito Vacio
        if (cart.length === 0) {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            // cart.push(itemToAdd)
            setCart([itemToAdd])
            return
        }

        // Carrito con duplicado
        const index = cart.findIndex(e => e.id = item.id)
        console.log(cart[index]);
        if (index >= 0) {
            const itemToUpdate = {
                ...item,
                quantity: cart[index].quantity + quantity
            }

            // Creamos un borrador para actualizar el carrito sin dañar el state de React
            const cartDraft = [...cart]
            cartDraft[index] = itemToUpdate
            setCart(cartDraft)

        } else {
            // Carrito con producto pero el item no es duplicado
            console.log('No es duplicado');
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            const cartDraft = [...cart, itemToAdd]
            setCart(cartDraft)
        }
        // const isInCart = cart.some((product) => product.id === item.id);

        // if (isInCart) {
        //     const cartDraft = cart.map((product) => {
        //         if (product.id === item.id) {
        //             return { ...product, quantity: product.quantity + quantity };
        //         }
        //     });
        //     setCart(cartDraft);
        // } else {
        //     setCart([...cart, item]);
        // }
    }

    const removeFromCart = (itemId) => {

    }

    const valuesToShare = {
        cart,
        isInCart,
        cleanCart,
        addToCart,
        removeFromCart,
        quantityInCart: cart.length
    }

    return (
        // 2.- Proveemos los valores que deseo compartir
        <CartContext.Provider value={valuesToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider