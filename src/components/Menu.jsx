import dessertItems from "../data/data.json";
import { useCart } from "../context/CartContext";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { modifyCart, cart } = useCart();

  return (
    <div>
      <h1 className="menu-title">Desserts</h1>
      <div className="desserts-grid">
        {dessertItems.map((item) => (
          <MenuItem key={item.id} item={item} quantity={cart[item.id]?.quantity || 0} modifyCart={modifyCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
