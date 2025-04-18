// ProductPrice.js
import React from 'react';

const ProductPrice = ({ price }) => {
  return (
    <div className="product-price">
      <p>${price}</p>
    </div>
  );
};

export default ProductPrice;
