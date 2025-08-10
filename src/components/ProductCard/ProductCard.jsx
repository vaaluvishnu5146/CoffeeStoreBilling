import React from "react";

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
      <p className="product_name">{data.title}</p>
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
