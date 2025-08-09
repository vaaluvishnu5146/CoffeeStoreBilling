import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import CartEmpty from "../assets/emptycart.png";

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
  const [cart, setCart] = useState([]); // [{ id: 1, quantity: 3 }]
  const [cartTotal, setCartTotal] = useState({
    total: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const total = calculateTheTotal(cart);
    const grandTotal = total + (total / 100) * 18;
    setCartTotal({
      ...cartTotal,
      total,
      grandTotal,
    });
  }, [cart]);

  function incrementQty(id = 0) {
    const itemsCopy = cart.map((_p) => {
      if (_p.id == id) {
        _p.qty += 1;
      }
      return _p;
    });
    setCart(itemsCopy);
  }

  function decrementQty(id = 0) {
    const itemsCopy = cart.map((_p) => {
      if (_p.id == id && _p.qty > 1) {
        _p.qty -= 1;
      }
      return _p;
    });
    setCart(itemsCopy);
  }

  function checkProductInTheCart(id = 0) {
    return cart.find((_p) => _p.id === id);
  }

  function checkProductQuantityInTheCart(id = 0) {
    const matchingItem = cart.find((_p) => _p.id === id);
    if (matchingItem) {
      return matchingItem.qty;
    } else {
      return 0;
    }
  }

  function handleAddToCart(id = 0) {
    const matchingProduct = products.find((_p) => _p.id === id);
    setCart((items) => [...items, { ...matchingProduct, qty: 1 }]);
  }

  function calculateTheTotal(items = []) {
    let total;
    if (items.length < 0) {
      total = 0;
    } else {
      total = items.reduce((prev, curr) => (prev += curr.qty * curr.price), 0);
    }
    return total;
  }

  function clearCurrentBilling() {
    setCart([]);
    setCartTotal({
      total: 0,
      grandTotal: 0,
    });
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
            isAddedToCart={checkProductInTheCart(product.id)}
            handleAddToCart={handleAddToCart}
            cartQuantity={checkProductQuantityInTheCart(product.id)}
          />
        ))}
      </div>
      <div className="card billing_area">
        {cart.length > 0 && (
          <>
            <div className="billing_items_listing">
              {cart.map((_product, index) => (
                <div className="billng_item">
                  <p>{_product.name}</p>
                  <p>
                    {_product.qty} x {_product.price}
                  </p>
                </div>
              ))}
            </div>
            <div className="billing_pricing_area">
              <h3>Billing</h3>
              <ul className="pricing_and_taxing">
                <li>
                  <p className="text-bold">Total</p>
                  <p className="text-bold">{cartTotal.total}</p>
                </li>
                <li>
                  <p className="text-bold">CGST</p>
                  <p className="text-bold">9%</p>
                </li>
                <li>
                  <p className="text-bold">IGST</p>
                  <p className="text-bold">9%</p>
                </li>
                <li>
                  <p className="text-bold">Grand Total</p>
                  <p className="text-bold">{cartTotal.grandTotal}</p>
                </li>
              </ul>
              <div className="cart_operations">
                <button onClick={clearCurrentBilling}>Clear</button>
                <button>Generate Bill</button>
              </div>
            </div>
          </>
        )}
        {cart.length < 1 && (
          <div className="empty_cart">
            <img src={CartEmpty} />
            <h3>Cart is Empty</h3>
          </div>
        )}
      </div>
    </div>
  );
}
