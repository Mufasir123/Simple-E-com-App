import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="bg-[#e5e5e5]">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-3">
          {cartProduct.map((product) => (
            <div
              key={product.id}
              className="bg-[#14213d] rounded-lg p-4 flex flex-col items-center w-50 h-90 gap-1 my-5 mx-5 w-80"
            >
              <img
                alt={product.title}
                src={product.thumbnail}
                className="aspect-square w-25 h-25 rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-md font-bold  text-[#ffffff]">
                {product.title}
              </h3>
              <p className="mt-4 text-md text-[#f8f9fa]">
                {product.description}
              </p>
              <p className="mt-1 text-lg font-medium text-[#f8f9fa]">
                Price:${product.price}
              </p>
              <button
                className="bg-[#0764e5] text-white font-medium rounded-md w-full h-10"
                onClick={() => removeFromCart(product.id)}
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
