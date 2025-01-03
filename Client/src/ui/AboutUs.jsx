import React from 'react'
import '../css/AppLayout/AboutUs.css'
const AboutUs = () => {
  return (
    <div>
      <section className="about-us-section relative py-16 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
    {/* Left Content */}
    <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
      <h2 className="text-5xl font-extrabold text-indigo-700 mb-6">About Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We are a team of innovators, thinkers, and creators driven by a passion to make a difference. Our mission is to empower individuals and businesses with cutting-edge technology and sustainable solutions.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        With a deep commitment to excellence, we specialize in delivering tailored solutions to transform challenges into opportunities. Join us on this journey to shape a brighter, more connected future.
      </p>
      <a
        href="#"
        className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition"
      >
        Learn More
      </a>
    </div>
    {/* Right Content */}
    <div className="lg:w-1/2">
      <div className="relative">
        <img
          src="https://via.placeholder.com/600x400" 
          alt="About Us Illustration"
          className="rounded-lg shadow-lg object-cover"
        />
        <div className="absolute inset-0 bg-indigo-600 opacity-20 rounded-lg"></div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default AboutUs
