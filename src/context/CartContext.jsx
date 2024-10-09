import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "MODIFY_CART": {
      const { item, modificationType } = action;
      const existingItem = state[item.id];
      const currentQuantity = existingItem ? existingItem.quantity : 0;

      if (modificationType === "add") {
        return { ...state, [item.id]: { ...item, quantity: currentQuantity + 1 } };
      } else if (modificationType === "remove") {
        const { [item.id]: _, ...rest } = state;
        return rest;
      } else if (modificationType === "update") {
        return item.quantity > 0 ? { ...state, [item.id]: { ...existingItem, quantity: item.quantity } } : cartReducer(state, { type: "MODIFY_CART", item, modificationType: "remove" });
      }
      return state;
    }

    case "CLEAR_CART":
      return {};

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {});

  const modifyCart = (item, modificationType) => {
    dispatch({ type: "MODIFY_CART", item, modificationType });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getCartTotal = () => Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);

  return <CartContext.Provider value={{ cart, modifyCart, clearCart, getCartTotal }}>{children}</CartContext.Provider>;
};
