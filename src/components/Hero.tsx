import { categories } from "../data/data"


const Hero = () => {
  return (
     <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* === Shop by Categories === */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-3">
            SHOP BY CATEGORIES
          </h2>
          <ul className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-5 py-2 bg-white rounded-full shadow hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-200 text-sm font-medium"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* === Hero Section === */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-md p-6 md:p-10 overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
              WELCOME TO <span className="text-red-500">E-SHOP</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              MILLIONS+ PRODUCTS • BEST DEALS • FAST DELIVERY 🚀
            </p>
            <button className="mt-3 px-6 py-2 bg-red-500 text-white font-semibold rounded-full shadow hover:bg-red-600 transition-all">
              SHOP NOW
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 mt-6 md:mt-0 flex justify-center">
            <img
              src="/hero.png"
              alt="E-Shop Hero"
              className="w-80 md:w-[420px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
