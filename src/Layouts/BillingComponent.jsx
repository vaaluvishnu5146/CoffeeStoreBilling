import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import CartEmpty from "../assets/emptycart.png";
import useTheme from "../hooks/useTheme";

export default function BillingComponent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState({
    total: 0,
    grandTotal: 0,
  });
  const [theme] = useTheme();

  useEffect(() => {
    console.log("Theme changes");
  }, [theme]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
    const total = calculateTheTotal(cart);
    const grandTotal = total + (total / 100) * 18;
    setCartTotal({
      ...cartTotal,
      total,
      grandTotal: parseFloat(grandTotal.toFixed(2)),
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
    return parseFloat(total.toFixed(2));
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
            theme={theme}
          />
        ))}
      </div>
      <div className="card billing_area">
        {cart.length > 0 && (
          <>
            <div className="billing_items_listing">
              {cart.map((_product, index) => (
                <div key={index} className="billng_item">
                  <p>{_product.title}</p>
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
