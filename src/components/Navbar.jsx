import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="flex w-[99vw] h-20 justify-between px-10 border-b-2 border-gray-300 fixed bg-white">
      <div className="text-3xl flex items-center">Cart System</div>

      <div className="flex items-center gap-10 text-lg">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span className="font-semibold">cart item:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
