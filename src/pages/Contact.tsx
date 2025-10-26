import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* === Header Section === */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          We’d love to hear from you! Fill out the form or use the details below to get in touch.
        </p>
      </div>

      {/* === Contact Info + Form Section === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-md p-8">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Our Office</h4>
              <p className="text-gray-500 text-sm">123 E-Shop Street, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-500 text-sm">+880 1700-123456</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-500 text-sm">support@eshop.com</p>
            </div>
          </div>

          {/* Optional Map Placeholder */}
          <div className="mt-6">
            <iframe
              title="E-Shop Location"
              className="w-full h-56 rounded-lg"
              src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
