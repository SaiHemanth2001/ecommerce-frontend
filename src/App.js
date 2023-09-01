import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes, useParams} from "react-router-dom"
import HomePage from './components/HomePage';
import CustomerLogin from './components/CustomerLogin';
import RegisterCustomer from './components/RegisterCustomer';
import ListOfProducts from './components/ListOfProducts';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path='/' Component={CustomerLogin}></Route>
            <Route exact path='/home' Component={HomePage}></Route>
            <Route exact path='/register' Component={RegisterCustomer}></Route>
            <Route exact path='/category/:category' Component={ListOfProducts}></Route>
            <Route exact path='/view/:productId' Component={ViewProduct}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
