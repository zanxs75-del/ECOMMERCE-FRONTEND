import React from 'react';

const ProductCard = (props) => {
    const handleAddToCart = () => {
    alert("Added to Cart!")
  }
  return (
    <div className="card">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">${props.price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;