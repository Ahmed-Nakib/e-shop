import { FaShoppingBag, FaSmile, FaStar, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* === Hero Section === */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">
          About <span className="text-yellow-300">eSHOP</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-100 text-sm md:text-base">
          Welcome to <strong>eSHOP</strong> — your one-stop online store for fashion, electronics,
          and lifestyle products. We aim to deliver happiness to every doorstep with trust and
          transparency.
        </p>
      </div>

      {/* === Mission & Vision === */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/about-banner.png"
            alt="About eShop"
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At <strong>eSHOP</strong>, our mission is to bring quality products closer to you with
            affordable pricing and fast delivery. We focus on customer satisfaction, innovation, and
            trust.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become the most loved online shopping destination in Bangladesh and beyond —
            empowering people through convenience and quality service.
          </p>
        </div>
      </section>

      {/* === Why Choose Us === */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose <span className="text-blue-600">eSHOP</span>?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 rounded-2xl shadow hover:shadow-lg p-6 text-center transition duration-300">
            <FaShoppingBag className="text-blue-600 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Wide Range</h4>
            <p className="text-sm text-gray-500">
              Explore thousands of products across all categories.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 rounded-2xl shadow hover:shadow-lg p-6 text-center transition duration-300">
            <FaSmile className="text-blue-600 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Customer Satisfaction</h4>
            <p className="text-sm text-gray-500">
              We prioritize your happiness with every purchase you make.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 rounded-2xl shadow hover:shadow-lg p-6 text-center transition duration-300">
            <FaStar className="text-blue-600 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Top Quality</h4>
            <p className="text-sm text-gray-500">
              Our products go through strict quality checks before delivery.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-100 rounded-2xl shadow hover:shadow-lg p-6 text-center transition duration-300">
            <FaShieldAlt className="text-blue-600 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Secure Shopping</h4>
            <p className="text-sm text-gray-500">
              Your data and payment details are 100% safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* === Bottom CTA Section === */}
      <section className="bg-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Experience the Best Online Shopping?
        </h2>
        <p className="text-gray-100 mb-6">
          Join millions of happy customers and shop with confidence at <strong>eSHOP</strong>.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Start Shopping
        </button>
      </section>
    </div>
  );
};

export default About;
