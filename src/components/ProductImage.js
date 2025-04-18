import React from 'react';

const ProductImage = ({ imageUrl }) => {
  return (
    <div className="product-image">
      <img src={imageUrl} alt="Product" />
    </div>
  );
};

export default ProductImage;
