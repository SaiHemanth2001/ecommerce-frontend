import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import CustomerLogin from './components/CustomerLogin';
import RegisterCustomer from './components/RegisterCustomer';
import ListOfProducts from './components/ListOfProducts';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import payment from './components/payment';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path='/login' element={<CustomerLogin/>}></Route>
            <Route exact path='/' Component={HomePage}></Route>
            <Route exact path='/register' Component={RegisterCustomer}></Route>
            <Route exact path='/category/:category' Component={ListOfProducts}></Route>
            <Route exact path='/view/:name' Component={ProductPage}></Route>
            <Route exact path='/cart' element={<Cart/>}></Route>
            <Route exact path='/payment' Component={payment}></Route>
          </Routes>
        </div>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
