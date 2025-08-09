import React, { useState } from "react";
import capuchino from "../../assets/capuchino.jpeg";

export default function ProductCard({
  data = {},
  increment,
  decrement,
  isAddedToCart = false,
  handleAddToCart,
  cartQuantity = 0,
}) {
  return (
    <div className="product_card">
      <img className="product_image" src={data.image} />
      <p className="product_name">{data.name}</p>
      {isAddedToCart ? (
        <div className="counter_btn">
          <button onClick={() => decrement(data.id)}>-</button>
          <p>{cartQuantity || 0}</p>
          <button onClick={() => increment(data.id)}>+</button>
        </div>
      ) : (
        <button
          className="add_to_cart_btn"
          onClick={() => handleAddToCart(data.id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
