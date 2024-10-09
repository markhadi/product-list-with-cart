import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between pb-4 border-b-2 border-rose-100">
      <div className="flex flex-col gap-3">
        <h3 className="text-rose-900">{item.name}</h3>
        <div className="flex">
          <span className="mr-4 text-red">{item.quantity}x</span>
          <p className="mr-2 text-rose-400 font-normal">@ {item.price.toFixed(2)}</p>
          <p className="text-rose-500">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
      <button className="flex-center btn-circle border-rose-300 hover:bg-rose-300 transition-colors duration-300 group" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name} from cart`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
          <path className="fill-rose-300 group-hover:fill-rose-500 transition-colors duration-300" fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </button>
    </div>
  );
};

export default React.memo(CartItem);
