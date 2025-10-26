import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      {/* === Top Footer Section === */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            e<span className="text-blue-500">SHOP</span>
          </h2>
          <p className="text-sm text-gray-400">
            Your one-stop destination for premium quality products at the best prices.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/shop" className="hover:text-blue-500">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-blue-500">Returns</Link></li>
            <li><Link to="/shipping" className="hover:text-blue-500">Shipping Info</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest updates, offers, and product news straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-sm text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* === Bottom Footer === */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">eSHOP</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
