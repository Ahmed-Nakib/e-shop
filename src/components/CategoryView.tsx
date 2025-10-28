import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom"
import { addToCart } from "../features/cart/cartSlice";

const CategoryView = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product))
  }
  const { name } = useParams<{ name: string }>();
  const products = useSelector((state: any) => state.product.products)
  const filteredProducts = products.filter(
    (item: any) =>
      item.category?.toLowerCase().includes(name?.toLocaleLowerCase() || "")
  )
  return (
     <div className="py-10 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">
       {name} Collection
      </h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product: any) => (
                     <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group"
          >
            <NavLink to={`/product/${product.id}`}>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-md">
                  {product.category || "New"}
                </div>
              </div>
            </NavLink>

            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-2 line-clamp-2">
                {product.description || "Best quality guaranteed!"}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-blue-600">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
              <button 
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
          ))}
        </div>
      )
      :
     <p className="text-center text-gray-500">No products found.</p>
    }
        
    </div>
  )
}

export default CategoryView
