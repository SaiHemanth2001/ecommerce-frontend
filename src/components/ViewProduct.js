import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import {BiCartAdd} from 'react-icons/bi';


const ViewProduct = () => {
    const[product,setProduct] = useState({})
    const {productId} = useParams();
    const d= product.name;
    const api ='http://localhost:8989/product/getById'+'/'+productId;
    axios.get(api)
    .then((response)=>{
            setProduct(response.data)
        }).catch(error=>{
            console.log(error);
        })
  return (
    <div className='right'>
        <ul key={product.productId}>
            <img src={product.productId} alt={`${product.name}`}></img>
          <button type="button" className="btn btn-primary"><BiCartAdd /></button>
        </ul>
    </div>
  )
}

export default ViewProduct