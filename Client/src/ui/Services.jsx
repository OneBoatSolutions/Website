import React from "react";

const Services = () => {
  return (
    <div>
      <section className="services-section py-16 bg-white mt-10 rounded-xl">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-5xl font-extrabold text-blue-600 mb-12">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We provide a wide range of services tailored to meet your unique
            needs. Explore how we can help you achieve your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="service-item bg-gradient-to-br from-blue-100 to-indigo-50 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <div className="icon bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <i className="fas fa-lightbulb text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Consulting
              </h3>
              <p className="text-gray-700">
                Expert guidance to help you navigate complex challenges and
                achieve strategic goals.
              </p>
            </div>
            {/* Service Item 2 */}
            <div className="service-item bg-gradient-to-br from-green-100 to-teal-50 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <div className="icon bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <i className="fas fa-code text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Product Development
              </h3>
              <p className="text-gray-700">
                Tailored solutions to bring your ideas to life with cutting-edge
                technology.
              </p>
            </div>
            {/* Service Item 3 */}
            <div className="service-item bg-gradient-to-br from-yellow-100 to-orange-50 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <div className="icon bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                EdTech Solutions
              </h3>
              <p className="text-gray-700">
                Innovative tools and platforms to enhance learning and
                engagement in education.
              </p>
            </div>
            {/* Add More Services as Needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
