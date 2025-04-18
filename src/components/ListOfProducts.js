import axios from 'axios';
import React, { useState } from 'react'
import Product1 from './Product1';
import { useParams } from 'react-router-dom/dist';
import Header from './Header';

const ListOfProducts = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams();
  const { email } = useParams();
  const api = `${process.env.REACT_APP_API_URL}/product/getByCategory/` + category;
  axios.get(api)
    .then((response) => {
      setProducts(response.data)
    }).catch(error => {
      console.log(error);
    })

  return (
    <div>
    <Header email={email} />
      <br /> <br /> <br /> <br />
      <div className='product-container'>{
        products.map(product => <div key={product.id}> <Product1 product={product} /></div>)
      }
      </div>
    </div>
  )
}

export default ListOfProducts