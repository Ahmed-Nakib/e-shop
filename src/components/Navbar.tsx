import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state: any) => state.cart.cartItems);
 const cartCount = cartItems.reduce((total: number, item: any) => total + item.qty, 0);


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      {/* === Top Section === */}
      <div className="flex flex-wrap justify-between items-center px-4 py-3 max-w-7xl mx-auto gap-3">
        
        {/* === Logo === */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          e<span className="text-red-500">SHOP</span>
        </Link>

        {/* === Search bar (always visible) === */}
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-full max-w-md flex-1 focus-within:ring-2 focus-within:ring-red-400 transition-all order-3 md:order-none">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-2 py-1 text-sm focus:outline-none"
          />
          <FaSearch className="text-gray-500 hover:text-red-500 cursor-pointer" />
        </div>

        {/* === Right side buttons === */}
        <div className="hidden md:flex items-center gap-6">
          {/* Cart Icon with badge */}
          <Link to="/cart" className="relative group">
            <FaShoppingCart
              className="text-gray-700 group-hover:text-red-500 transition-colors duration-200"
              size={22}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User / Login */}
          <Link
            to="/login"
            className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
          >
            <FaUser /> <span className="text-sm font-medium">Login / Register</span>
          </Link>
        </div>

        {/* === Mobile menu toggle === */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* === Navigation Links === */}
      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 py-2 text-sm font-medium text-gray-700 flex-wrap">
          <Link to="/" className="hover:text-red-500" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/shop" className="hover:text-red-500" onClick={() => setOpen(false)}>Shop</Link>
          <Link to="/contact" className="hover:text-red-500" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/about" className="hover:text-red-500" onClick={() => setOpen(false)}>About</Link>
        </div>
      </div>

      {/* === Mobile Menu === */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center gap-5 py-5 text-gray-700 font-medium">
            {/* Cart link */}
            <Link to="/cart" className="relative" onClick={() => setOpen(false)}>
              <FaShoppingCart size={22} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link to="/login" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <FaUser /> Login / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
