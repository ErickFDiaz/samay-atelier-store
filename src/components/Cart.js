import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, removeFromCart, cleanCart, totalAmount } =
    useContext(CartContext);
  console.log(cart);
  if (totalAmount === 0) {
    return (
      <div className="container">
        <div className="row p-3">
          <h1>Tu carrito esta vacio</h1>
          <Link to={`/`} className="btn btn-primary" style={{width:300}}>Ir Comprar</Link>

        </div>
      </div>
    );
  } else {
    return (
      <div className="container pt-2">
        <h1>Tu carrito</h1>
        <div className="row">
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, i) => (
                <tr key={product.id}>
                  <th>{i + 1}</th>
                  <th>{product.title}</th>
                  <th>{product.category}</th>
                  <th>{product.price}</th>
                  <th>{product.quantity}</th>
                  <th>{product.price * product.quantity}</th>
                  <th>
                    <button
                      className="btn btn-warning"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Eliminar
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="5"></th>
                <th colspan="2">
                  <span className="fs-5">
                    Total de tu Compra: {totalAmount}
                  </span>
                </th>
              </tr>
            </tfoot>
          </table>
          <div className="d-flex justify-content-between">
            <button onClick={() => cleanCart()} className="btn btn-danger">
              Limpiar Carrito
            </button>
            <button className="btn btn-success">Terminar Compra</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
