
import { CheckCircle, Package, Truck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const order = {
    number: "123456",
    address: "California, 455 Main Street",
    items: [
      { name: "Product 3", qty: 1, price: 19.99 },
      { name: "Product 4", qty: 1, price: 49.99 },
    ],
  };

  const totalPrice = order.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="text-green-500 w-14 h-14 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">Thank you for your order!</h1>
          <p className="text-gray-600 mt-1">
            Your order has been placed successfully. You’ll receive an email confirmation shortly.
          </p>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-500" /> Order Summary
          </h2>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Order Number:</span> {order.number}
            </p>
            <p className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-gray-500" />
              <span>
                <span className="font-medium">Shipping Address:</span> {order.address}
              </span>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Items Ordered:</h3>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-gray-50 px-3 py-2 rounded-lg"
                >
                  <span>
                    {item.name} (x{item.qty})
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-4 font-semibold text-gray-800 border-t pt-3">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="bg-green-500 hover:bg-green-600 w-full sm:w-1/2">
            Track Order
          </button>
          <button
            
            onClick={() => navigate("/")}
            className="w-full sm:w-1/2 flex items-center justify-center gap-2"
          >
            Continue Shopping <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;