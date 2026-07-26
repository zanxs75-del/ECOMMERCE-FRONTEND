import React from 'react';

const ProductCard = (props) => {
  
  const formattedPrice = Number(props.price || 0).toFixed(2);

  return (
    <div className="card">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.productName}
      />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">${formattedPrice}</p>
        <button 
          className="btn btn-primary" 
          onClick={props.onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
