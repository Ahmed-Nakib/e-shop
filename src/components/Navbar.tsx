import { useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Search, Menu, X, User, Home, Store, Mail, Info } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  qty: number;
  price: number;
}

interface RootState {
  cart: {
    cartItems: CartItem[];
  };
}

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/shop", label: "Shop", icon: Store },
  { path: "/contact", label: "Contact", icon: Mail },
  { path: "/about", label: "About", icon: Info },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.qty, 0),
    [cartItems]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div
      className={`${
        isMobile
          ? "flex flex-col items-center gap-4"
          : "hidden md:flex justify-center items-center gap-6"
      } py-4 text-sm font-medium text-gray-700`}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => isMobile && setIsOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 transition ${
              isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
            }`
          }
        >
          {isMobile && <item.icon size={16} className="text-gray-500" />}
          {item.label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <form
              onSubmit={handleSearch}
              className="md:hidden flex items-center border border-gray-300 rounded-lg px-3 py-2 mx-4 mt-4"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 text-sm focus:outline-none"
              />
              <button type="submit" aria-label="Search" className="text-gray-500 hover:text-red-600">
                <Search size={16} />
              </button>
            </form>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="text-3xl font-extrabold tracking-tight text-gray-900">
            e<span className="text-red-600">SHOP</span>
          </NavLink>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-2 w-full max-w-lg mx-8 bg-gray-50 shadow-sm focus-within:ring-2 focus-within:ring-red-500"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-sm bg-transparent focus:outline-none placeholder-gray-500"
            />
            <button type="submit" aria-label="Search" className="text-gray-500 hover:text-red-600">
              <Search size={16} />
            </button>
          </form>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <NavLink to="/cart" className="relative group p-2 rounded-full hover:bg-red-50">
              <ShoppingCart className="text-gray-700 group-hover:text-red-600" size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">
                  {cartCount}
                </span>
              )}
            </NavLink>

            {/* Login */}
            <NavLink
              to="/login"
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-red-600 text-sm font-semibold p-2 rounded-lg hover:bg-gray-100"
            >
              <User size={18} />
              <span className="hidden lg:inline">Login / Register</span>
            </NavLink>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} className="text-red-600" /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="border-t border-gray-100 hidden md:block">
          <NavLinks />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 bg-white shadow-inner">
            {/* Mobile Search */}
            

            {/* Mobile Nav Links */}
            <NavLinks isMobile />

            {/* Mobile Login Button */}
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center gap-3 p-3 mt-4 mx-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
            >
              <User size={18} /> Login / Register
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
