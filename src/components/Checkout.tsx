import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Product 3",
      price: 19.99,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Product 4",
      price: 49.99,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
  ]);

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order placed:", billingInfo, products);
    alert("✅ Order placed successfully!");
  };

  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">
        CHECKOUT
      </h1>

      {/* Main Grid Layout */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Left Side */}
        <div className="space-y-6">
          {/* Billing Information */}
          <div className="border p-5 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={billingInfo.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full border rounded-lg p-2 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={billingInfo.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full border rounded-lg p-2 outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                value={billingInfo.phone}
                onChange={handleChange}
                placeholder="Enter Phone #"
                className="w-full border rounded-lg p-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-5 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <textarea
              name="address"
              value={billingInfo.address}
              onChange={handleChange}
              placeholder="Enter Shipping Address"
              className="w-full border rounded-lg p-2 outline-none h-24"
              required
            />
          </div>

          {/* Payment Method */}
          <div className="border p-5 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <select
              name="paymentMethod"
              value={billingInfo.paymentMethod}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 outline-none"
            >
              <option>Cash on Delivery</option>
              <option>Credit/Debit Card</option>
              <option>PayPal</option>
            </select>
          </div>
        </div>

        {/* Right Side */}
        <div className="border p-5 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {/* Products */}
          <div className="space-y-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t mt-6 pt-4 flex justify-between text-lg font-semibold">
            <p>Total Price:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          {/* Place Order Button */}
          <button
            onClick={() => navigate("/orderConfirmation")}
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg mt-6 transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;