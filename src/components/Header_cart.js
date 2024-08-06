import React from 'react';
import './Header.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header_cart = ({email,totalSum}) => {
  const navigate = useNavigate();
  const handler=(e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:8083/cart/delProducts/${email}`)
    .then(response => {
        alert('Cart Cleared')
    }).catch(error=>{
        console.log(error);
    })
  }
  const handler1 = (e)=>{
    e.preventDefault();
   navigate(-1)      
  }
  const handler2 = (e) =>{
    e.preventDefault();
    alert(`Your cart costs : ${totalSum}`)
  }

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a onClick={handler1}>Back</a></li>
          <li><a onClick={handler2}>Checkout</a></li>
          <li><a onClick={handler}>Clear Cart</a></li>
          <li><a href={`/`}>Signout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header_cart;
