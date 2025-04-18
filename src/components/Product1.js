import React from 'react'
import './styles.scss'
import { useParams } from 'react-router-dom';
const Product1 = ({ product }) => {
    const m = product.price - product.price * 0.5;
    const { email } = useParams();
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
                    <a className="button add_to_cart_button product_type_simple" rel="nofollow" href="#">
                        Buy Now
                    </a>
                    <a href={`/view/${product.name}`} className="btn btn-dark btn-circle btn-review" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion ion-ios-move"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default Product1