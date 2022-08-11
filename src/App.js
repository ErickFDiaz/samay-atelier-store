import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import ItemListContainer from './layout/ItemListContainer';
import ItemDetailContainer from './layout/ItemDetailContainer'
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Samay Store' />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenidos a Samay Store' />}></Route>
          <Route path='/about' element={<h1>About</h1>}></Route>
          <Route path='*' element={<ItemListContainer greeting='Bienvenidos a Samay Store' />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>´
      </CartProvider>
    </div>
  );
}

export default App;
