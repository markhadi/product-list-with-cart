import React from "react";

const MenuItem = ({ item, quantity, modifyCart }) => {
  return (
    <div key={item.id}>
      <picture className={`dessert-image ${quantity > 0 ? "border border-red" : ""}`}>
        <source media="(min-width: 768px)" srcSet={item.image.desktop} />
        <source media="(min-width: 640px)" srcSet={item.image.tablet} />
        <img src={item.image.mobile} loading="lazy" alt={item.name} />
      </picture>

      <div className="flex-center translate-y-[-22px]">
        {quantity === 0 ? (
          <button className="btn-add-to-cart" onClick={() => modifyCart(item, "add")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
              <g fill="#C73B0F" clipPath="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            add to Cart
          </button>
        ) : (
          <div className="btn-quantity-counter">
            <button className="btn-circle group" onClick={() => (quantity === 1 ? modifyCart(item, "remove") : modifyCart({ ...item, quantity: quantity - 1 }, "update"))}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" className="icon-svg">
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" className="fill-white group-hover:fill-red transition-colors duration-300" />
              </svg>
            </button>
            <span>{quantity}</span>
            <button className="btn-circle group" onClick={() => modifyCart({ ...item, quantity: quantity + 1 }, "update")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" className="icon-svg">
                <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" className="fill-white group-hover:fill-red transition-colors duration-300" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-[6px] font-semibold -mt-2">
        <span className="font-normal text-[14px] text-rose-500">{item.category}</span>
        <h2 className="text-rose-900">{item.name}</h2>
        <p className="text-red">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
