import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import CustomerLogin from './components/CustomerLogin';
import RegisterCustomer from './components/RegisterCustomer';
import ListOfProducts from './components/ListOfProducts';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path='/' Component={CustomerLogin}></Route>
            <Route exact path='/:email/home' Component={HomePage}></Route>
            <Route exact path='/register' Component={RegisterCustomer}></Route>
            <Route exact path='/category/:email/:category' Component={ListOfProducts}></Route>
            <Route exact path='/view/:email/:name' Component={ProductPage}></Route>
            <Route exact path='/:email/cart' Component={Cart}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
