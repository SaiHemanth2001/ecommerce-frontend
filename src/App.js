import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import CustomerLogin from './components/CustomerLogin';
import RegisterCustomer from './components/RegisterCustomer';
import ListOfProducts from './components/ListOfProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path='/' Component={HomePage}></Route>
            <Route exact path='/customer-login' Component={CustomerLogin}></Route>
            <Route exact path='/register' Component={RegisterCustomer}></Route>
            <Route exact path='/customer' Component={ListOfProducts}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
