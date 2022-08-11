import { createContext, useState } from "react";

// 1.- Creamos el contexto 
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // const isInCart = (id) => { }

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quantity) => {
        
        const isInCart = cart.some((product) => product.id === item.id);

        if (isInCart) {
            const cartDraft = cart.map((product) => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + quantity };
                }else{
                    return product
                }
            });
            setCart(cartDraft);
        } else {
            setCart([...cart, {...item, quantity: quantity}]);
        }
    }

    const removeFromCart = (itemId) => {
        const index = cart.findIndex(e => e.id = itemId)
        // alert(index)
        const cartDraft = [...cart]
        cartDraft.splice(index,1)
        console.log(cartDraft);
        setCart(cartDraft)
    }

    const quantityInCart = () => {
        let quantityProducts = 0;
        for (const product of cart) {
            quantityProducts = quantityProducts + product.quantity
        }
        return quantityProducts
    }

    const valuesToShare = {
        cart,
        // isInCart,
        cleanCart,
        addToCart,
        removeFromCart,
        quantityInCart: quantityInCart()
    }

    return (
        // 2.- Proveemos los valores que deseo compartir
        <CartContext.Provider value={valuesToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider