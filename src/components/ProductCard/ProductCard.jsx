import React, { useState } from "react";
import capuchino from "../../assets/capuchino.jpeg";

export default function ProductCard({ data = {}, increment, decrement }) {
  return (
    <div className="product_card">
      <img className="product_image" src={data.image} />
      <p className="product_name">{data.name}</p>
      <div className="counter_btn">
        <button onClick={() => decrement(data.id)}>-</button>
        <p>{data.qty || 0}</p>
        <button onClick={() => increment(data.id)}>+</button>
      </div>
    </div>
  );
}
