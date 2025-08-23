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
    <div className="w-full h-[120px] rounded-sm bg-white p-3 border-2 border-black">
      <p className="text-xl text-bold mb-3">{data.name}</p>
      {isAddedToCart ? (
        <div className="flex gap-x-4 items-center">
          <button
            className="w-[30%] text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            onClick={() => decrement(data.id)}
          >
            -
          </button>
          <p>{cartQuantity || 0}</p>
          <button
            className="w-[30%] text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            onClick={() => increment(data.id)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="w-full text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          onClick={() => handleAddToCart(data.id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
