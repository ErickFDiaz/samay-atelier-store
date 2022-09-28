import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import ItemListContainer from './layout/ItemListContainer';
import ItemDetailContainer from './layout/ItemDetailContainer'
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAXl_S_4Q5ytejIeQXlIzv93wJlce2i-9g",
  authDomain: "samay-atelier.firebaseapp.com",
  projectId: "samay-atelier",
  storageBucket: "samay-atelier.appspot.com",
  messagingSenderId: "556659839398",
  appId: "1:556659839398:web:92e4dd6cce439932217f67"
};

const hola = 'Hola'

initializeApp(firebaseConfig)

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
