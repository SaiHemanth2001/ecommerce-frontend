import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Product2 from './Product2';
import Header_cart from './Header_cart';

const Cart = () => {
    const[products,setProducts] = useState([]);
    const totalSum = (products.reduce((sum, product) => sum + product.price/2, 0));
    const {email} = useParams();
    const navigate= useNavigate();
    const api =`http://localhost:8083/cart/getByMail/${email}`;
    axios.get(api)
    .then((response)=>{
            setProducts(response.data)
        }).catch(error=>{
            console.log(error);
        })

  
  return (
    <div>
    <Header_cart email={email} totalSum={totalSum} />
    <div className='product-container'>{
        products.map(product=> <div key={product.id}> <Product2 product={product} totalSum={totalSum}/></div> ) 
    }
    </div>

    </div>
  )
}

export default Cart