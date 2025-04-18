// ProductDetails.js
import React from 'react';

const ProductDetails = ({ name, description }) => {
  return (
    <div className="product-details">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;
