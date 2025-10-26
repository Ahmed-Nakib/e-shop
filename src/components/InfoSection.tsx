
import type { JSX } from "react";
import { FaShippingFast, FaHeadset, FaCreditCard, FaUndo, FaLock } from "react-icons/fa";

type InfoItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const InfoSection = () => {
  const infoSection: InfoItem[] = [
    {
      icon: <FaShippingFast className="text-red-500 text-3xl" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-red-500 text-3xl" />,
      title: "24/7 Support",
      description: "We’re here to help you anytime, anywhere",
    },
    {
      icon: <FaCreditCard className="text-red-500 text-3xl" />,
      title: "Secure Payment",
      description: "Your transactions are 100% safe and protected",
    },
    {
      icon: <FaUndo className="text-red-500 text-3xl" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 7 days of purchase",
    },
    {
      icon: <FaLock className="text-red-500 text-3xl" />,
      title: "Trusted Quality",
      description: "We ensure authentic and high-quality products",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {infoSection.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="mb-3">{info.icon}</div>
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              {info.title}
            </h4>
            <p className="text-gray-500 text-sm">{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

