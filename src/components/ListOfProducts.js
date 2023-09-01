import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Product1 from './Product1';
import { useParams } from 'react-router-dom/dist';

const ListOfProducts = () => {
    const[products,setProducts] = useState([])
    const navigate= useNavigate()
    const {category} = useParams();
    const api ='http://localhost:8989/product/getByCategory'+'/'+category;
    axios.get(api)
    .then((response)=>{
            setProducts(response.data)
        }).catch(error=>{
            console.log(error);
        })
    const handler = (e)=>{
        e.preventDefault();
       localStorage.removeItem("jwt")
       navigate('/')      
    }
    const handler1 = (e)=>{
        e.preventDefault();
       navigate('/home')      
    }


  return (
    <div>
    <div className='button-container'>
     <span><a className="button1" onClick={handler1}>HomePage</a></span>
    <span><a className='button1' onClick={handler}>Sign Out</a></span>
    </div>
    <br />
    <div className='product-container'>{
        products.map(product=> <div key={product.id}> <Product1 product={product}/></div> ) 
    }
    </div>
    </div>
  )
}

export default ListOfProducts