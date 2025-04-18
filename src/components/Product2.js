import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const Product2 = ({ product }) => {
    const m = product.price - product.price * 0.5;
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const handler3 = (e) => {
        e.preventDefault();
        enqueueSnackbar(`${product.name} : ${product.price / 2}`, { variant: 'info' });
    }
    const handler4 = (e) => {
        e.preventDefault();
        axios.delete(`${process.env.REACT_APP_API_URL}/cart/delProductsByName/${product.name}`)
            .then(response => {
                navigate(0);
                enqueueSnackbar(`${response.data}`, { variant: 'error' });
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <ul className="mystyle-products">
                <li className="product">
                    <a href={`/view/${product.name}`} >
                        <span className="onsale">Sale!</span>
                        <img alt={product.name} className="attachment-shop_catalog " src={product.img} />
                        <h3 className='product-name'><b>{product.name}</b></h3>
                        <span className="price">
                            <del> <span className="amount">{product.price}</span> </del>
                            <ins> <span className="amount">{m}</span> </ins>
                            <span className="sale-tag sale-tag-square">-50%</span>
                        </span>
                    </a>
                    <a className="button add_to_cart_button product_type_simple" rel="nofollow" href={`/view/${product.name}`}>
                        Buy Now
                    </a>
                    <br />
                    <span> <a href={`/view/${product.name}`} className='button-checkout' data-toggle="tooltip" data-placement="top" title="Checkout" onClick={(e) => handler3(e)}>Checkout</a>{" "}<a href={`/view/${product.name}`} className='button-delete' data-toggle="tooltip" data-placement="top" title="Delete" onClick={(e) => handler4(e)}>Delete</a></span>


                </li>
            </ul>
        </div>
    )
}

export default Product2