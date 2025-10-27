import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.qty,
    0
  );

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            🛒 Shopping Cart
          </h2>

          <div className="divide-y">
            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-5"
              >
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md shadow-sm"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end sm:space-x-6 w-full sm:w-auto">
                  <div className="flex items-center border rounded-md">
                    <button onClick={() => dispatch(decreaseQty(item.id))} className="px-3 py-1 text-lg font-semibold hover:bg-gray-100">
                      -
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))} className="px-3 py-1 text-lg font-semibold hover:bg-gray-100">
                      +
                    </button>
                  </div>

                  <p className="font-semibold text-gray-800">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="hover:bg-red-100 p-2 rounded-full transition"
                  >
                    <Trash2 className="text-red-500 hover:text-red-700 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 h-fit">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">CART TOTALS</h3>
          <div className="flex justify-between mb-3 text-sm sm:text-base">
            <span className="text-gray-700">Total Items:</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between font-bold text-base sm:text-lg mt-4 mb-6 text-gray-800">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
          onClick={() => navigate("/checkout")}
           className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-md text-sm sm:text-base font-semibold hover:bg-red-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
