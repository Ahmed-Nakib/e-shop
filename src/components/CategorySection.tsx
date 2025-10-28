import { useNavigate } from "react-router-dom";

type Category = {
  title: string;
  image: string;
};

const CategorySection = () => {
  const categories: Category[] = [
    {
      title: "Men",
      image: "/men.png",
    },
    {
      title: "Women",
      image: "/women.png",
    },
    {
      title: "Kids",
      image: "/kid.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
          onClick={() => navigate(`/category/${cat.title.toLocaleLowerCase()}`)}
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-semibold">{cat.title}</h3>
              <button className="mt-3 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
                View All
              </button>
            </div>

            {/* Title on top always visible */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-80 text-black px-3 py-1 rounded-md font-semibold">
              {cat.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
