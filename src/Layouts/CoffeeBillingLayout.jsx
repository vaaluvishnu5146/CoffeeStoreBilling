import React, { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

export default function CoffeeBillingLayout() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hot Coffee",
      qty: 0,
      price: 120,
      image:
        "https://globalassets.starbucks.com/digitalassets/products/bev/CaffeLatte.jpg?impolicy=1by1_tight_288&crop=495,495,810,810&wid=288&hei=288&qlt=85",
    },
    {
      id: 2,
      name: "Cold Coffee",
      qty: 0,
      price: 120,
      image:
        "https://globalassets.starbucks.com/digitalassets/products/bev/CaffeLatte.jpg?impolicy=1by1_tight_288&crop=495,495,810,810&wid=288&hei=288&qlt=85",
    },
    {
      id: 3,
      name: "Cold Tea",
      qty: 0,
      price: 130,
      image:
        "https://globalassets.starbucks.com/digitalassets/products/bev/CaffeLatte.jpg?impolicy=1by1_tight_288&crop=495,495,810,810&wid=288&hei=288&qlt=85",
    },
    {
      id: 4,
      name: "Hot Tea",
      qty: 0,
      price: 130,
      image:
        "https://globalassets.starbucks.com/digitalassets/products/bev/CaffeLatte.jpg?impolicy=1by1_tight_288&crop=495,495,810,810&wid=288&hei=288&qlt=85",
    },
    {
      id: 5,
      name: "Coconut Pudding",
      qty: 0,
      price: 150,
      image:
        "https://globalassets.starbucks.com/digitalassets/products/bev/CaffeLatte.jpg?impolicy=1by1_tight_288&crop=495,495,810,810&wid=288&hei=288&qlt=85",
    },
  ]);

  function incrementQty(id = 0) {
    const productCopy = products.map((_p) => {
      if (_p.id == id) {
        _p.qty += 1;
      }
      return _p;
    });
    setProducts(productCopy);
  }

  function decrementQty(id = 0) {
    const productCopy = products.map((_p) => {
      if (_p.id == id) {
        _p.qty -= 1;
      }
      return _p;
    });
    setProducts(productCopy);
  }

  return (
    <div className="coffee_billing_layout">
      <div className="card items_listing_container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            data={product}
            increment={incrementQty}
            decrement={decrementQty}
          />
        ))}
      </div>
      <div className="card billing_area"></div>
    </div>
  );
}
