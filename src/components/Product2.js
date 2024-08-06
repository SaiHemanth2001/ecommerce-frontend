import React from 'react'
import './styles.scss'
import { useParams } from 'react-router-dom';
const Product2 = ({product}) => {
    const m = product.price-product.price*0.5;
    const {email} = useParams();
    const handler3 = (e)=>{
        e.preventDefault();
       alert(`${product.name}:${product.price/2}`);      
    } 
  return (
    <div>
         <ul className="mystyle-products">
                <li className="product">
                    <a href={`/${email}/cart`} >
                        <span className="onsale">Sale!</span>
                        <img alt={product.name} className="attachment-shop_catalog " src={product.img} />
                        <h3 className='product-name'><b>{product.name}</b></h3>
                        <span className="price">
                            <del> <span className="amount">{product.price}</span> </del>
                            <ins> <span className="amount">{m}</span> </ins>
                            <span className="sale-tag sale-tag-square">-50%</span>
                        </span>
                    </a>
                    <a className="button add_to_cart_button product_type_simple" rel="nofollow" href={`/${email}/cart`}>
                        Buy Now
                    </a>
                    <br/>
                   <span> <a href={`/${email}/cart`} className='button-checkout'  data-toggle="tooltip" data-placement="top" title="Checkout" onClick={(e)=>handler3(e)}>Checkout</a></span>
                 

                </li>
            </ul>
    </div>
  )
}

export default Product2