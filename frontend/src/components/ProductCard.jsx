import React from 'react';
import './ProductCard.css'; // Import the CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">{product.stock} in stock</p>
      </div>
    </div>
  );
};

export default ProductCard;
