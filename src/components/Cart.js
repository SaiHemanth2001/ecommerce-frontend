import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Product2 from './Product2';
import HeaderCart from './Header_cart';
import { Link } from 'react-router-dom';
import { AuthContext } from "./AuthContext";

const Cart = () => {
  const { userEmail } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/cart/getByMail/${userEmail}`)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));

    const token = localStorage.getItem('jwt');
    setIsAuthenticated(!!token);
  }, []);

  const totalSum = products.reduce((sum, product) => sum + product.price / 2, 0);
  const isButtonEnabled = isAuthenticated ;

  return (
    <div>
      <HeaderCart products={products} totalSum={totalSum} />
      <br /> <br /> <br />
      {products.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '24px', color: '#ff4d4d', fontWeight: 'bold', marginTop: '20px' }}>
          Your cart is empty
        </p>
      ) : (
        <div className='product-container'>
          {products.map(product => (
            <div key={product.id}>
              <Product2 product={product} totalSum={totalSum} />
            </div>
          ))}
        </div>
      )}
      {isButtonEnabled ? (
        <Link to="/payment" className="payment-link">
          <button className="payment-button">Proceed to Payment</button>
        </Link>
      ) : (
        <button className="payment-button disabled" disabled>
          Proceed to Payment
        </button>
      )}
    </div>
  );
};

export default Cart;
