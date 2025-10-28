import { useState } from "react";
import { Truck, HelpCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch()

  const product = useSelector((state: any) =>
    state.product.products.find((p: any) => p.id === Number(id))
  );
  
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product))
  }

  if (!product) {
    return <p className="text-center mt-10 text-red-400">Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Left Side */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded-xl shadow-lg border"
        />
      </div>

      {/* Right Side */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-lg font-medium mb-4 text-gray-700">${product.price}</p>

        <div className="flex items-center gap-3 mb-6">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 p-2 border rounded"
          />
          <button
          onClick={() => handleAddToCart(product)}
           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition">
            Add to Cart
          </button>
        </div>

        <div className="space-y-3 text-gray-600">
          <p className="flex items-center gap-2">
            <Truck size={18} /> Delivery & Return
          </p>
          <p className="flex items-center gap-2">
            <HelpCircle size={18} /> Ask a Question
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-2 mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-2">Product Description</h3>
        <p className="text-gray-600">
          Product description will go here. Add detailed information about the
          features, specifications, and quality of the product.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
