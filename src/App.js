import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import ItemListContainer from './layout/ItemListContainer';
import ItemDetailContainer from './layout/ItemDetailContainer'
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a Samay Store' />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
