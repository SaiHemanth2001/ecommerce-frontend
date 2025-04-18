import React from 'react';
import './Header.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Header_cart = ({ products, totalSum }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handler = (e) => {
    e.preventDefault();
    if (products.length > 0) {
      axios.delete(`${process.env.REACT_APP_API_URL}/cart/delAll`)
        .then(response => {
          navigate(0);
          enqueueSnackbar(`${response.data}`, { variant: 'success' });
          
        }).catch(error => {
          console.log(error);
        });
    }
  };

  const handler1 = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handler2 = (e) => {
    e.preventDefault();
    enqueueSnackbar(`Your cart costs : ${totalSum}`, { variant: 'success' });
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a onClick={handler1}>Back</a></li>
          <li><a onClick={handler2}>Checkout</a></li>
          <li>
            <a
              onClick={handler}
              style={{ color: products.length === 0 ? '#ccc' : 'inherit', cursor: products.length === 0 ? 'not-allowed' : 'pointer' }}
            >
              Clear Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header_cart;
