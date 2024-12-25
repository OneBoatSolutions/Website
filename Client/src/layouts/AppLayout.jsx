import React from "react";
import Navbar from "../components/Navbar";
import ScrollBaseAnimation from "../components/ScrollBaseAnimation";
import "../css/AppLayout.css";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="App">
      <div className="grid-background"></div>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-between p-4 relative z-10">
        {/* Content container */}
        <div className="p-5 m-2 w-[90%] h-auto flex flex-col justify-center items-center content-container relative">
          {/* One Boat Solutions heading */}
          <div className="One_Boat_Heading flex flex-row sm:flex-row gap-3 m-0 p-0 text-center lg:text-left">
            <div className="font-semibold text-6xl sm:text-8xl text-blue-700">
              One
            </div>
            <div className="font-semibold text-6xl sm:text-8xl">Boat</div>
            <div className="font-semibold text-6xl lg:block sm:text-8xl hidden">
              Solutions{" "}
            </div>
          </div>

          {/* Solutions placed on the next line in mobile view */}
          <div className="font-semibold text-6xl sm:hidden sm:text-8xl  mt-4 sm:mt-0 text-center lg:text-left">
            Solutions
          </div>

          {/* Tagline */}
          <div className="TagLine text-2xl sm:text-3xl mt-8 text-center ">
            Either You Sail with us Or Drown Without us...
          </div>

          {/* Description */}
          <div className="TagLine text-xl sm:text-2xl mt-4 text-center">
            "OneBoat Solutions is an innovative startup driving growth in
            EdTech, product development, and consultancy services, offering
            advanced, tech-driven solutions."
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-row gap-5 justify-center sm:flex-row lg:flex-row">
            <button className="btn btn-primary text-lg">Get Started</button>
            <button className="btn  btn-outline text-lg">Login</button>
          </div>
        </div>

        {/* Animated Blobs */}
        {/* Blue Blob - Centered */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 lg:w-[250px] lg:h-[250px] blob bg-pink-300 animate-blob sm:w-[50px] sm:h-[50px] sm:left[40px]"></div> */}

        {/* Yellow Blob - Top Right */}
        {/* <div className="absolute top-[75px] right-[100px] w-28 h-28 blob bg-yellow-300 animate-blob"></div> */}

        {/* Pink Blob - Bottom Left */}
        {/* <div className="absolute bottom-[50px] left-[170px] w-36 h-36 blob bg-blue-300 animate-blob "></div> */}
        {/* <div className="absolute bottom-[250px] left-[270px] w-16 h-16 blob bg-green-300 animate-blob"></div> */}
      </div>

      <section>
        <div className="h-[150px] grid place-content-center">
          <ScrollBaseAnimation
            delay={5000}
            baseVelocity={-1}
            clasname="font-bold tracking-[-0.07em] leading-[90%]"
          >
            Either Sail with us
          </ScrollBaseAnimation>
          <ScrollBaseAnimation
            delay={5000}
            baseVelocity={1}
            clasname="font-bold tracking-[-0.07em] leading-[90%]"
          >
            Or Drown Without us
          </ScrollBaseAnimation>
        </div>
      </section>
      <section className="vision-mission-section relative p-8 mt-8 flex flex-col items-center text-center">
        {/* Vision Section */}
        <div className="vision-container mb-16 w-[90%] lg:w-[80%]">
          <h2 className="text-4xl font-bold mb-8 text-blue-800">Our Vision</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="glass-card p-6 backdrop-blur-md rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-800">
                To foster a culture of innovation, driving cutting-edge
                solutions that redefine the way we approach technology and
                education.
              </p>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-6 backdrop-blur-md rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-800">
                To build sustainable products and services that contribute to a
                better future for individuals and businesses.
              </p>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-6 backdrop-blur-md rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Empowerment</h3>
              <p className="text-gray-800">
                To empower people and organizations with tools and knowledge to
                thrive in the digital age.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-container w-[90%] lg:w-[80%]">
          <h2 className="text-4xl font-bold mb-8 text-pink-800">Our Mission</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="glass-card p-6 backdrop-blur-md rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Client Success</h3>
              <p className="text-gray-800">
                To prioritize client success through personalized, innovative,
                and efficient solutions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-6 backdrop-blur-md rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">EdTech Leadership</h3>
              <p className="text-gray-800">
                To lead the EdTech industry by creating impactful learning
                solutions that adapt to evolving needs.
              </p>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-6 backdrop-blur-md rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Global Impact</h3>
              <p className="text-gray-800">
                To create a meaningful global impact by building scalable and
                sustainable technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
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



<section className="services-section py-16 bg-white">
  <div className="container mx-auto px-6 lg:px-20 text-center">
    <h2 className="text-5xl font-extrabold text-blue-600 mb-12">Our Services</h2>
    <p className="text-lg text-gray-600 leading-relaxed mb-12">
      We provide a wide range of services tailored to meet your unique needs. Explore how we can help you achieve your goals.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Service Item 1 */}
      <div className="service-item bg-gradient-to-br from-blue-100 to-indigo-50 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
        <div className="icon bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
          <i className="fas fa-lightbulb text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-indigo-600 mb-4">Consulting</h3>
        <p className="text-gray-700">
          Expert guidance to help you navigate complex challenges and achieve strategic goals.
        </p>
      </div>
      {/* Service Item 2 */}
      <div className="service-item bg-gradient-to-br from-green-100 to-teal-50 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
        <div className="icon bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
          <i className="fas fa-code text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-teal-600 mb-4">Product Development</h3>
        <p className="text-gray-700">
          Tailored solutions to bring your ideas to life with cutting-edge technology.
        </p>
      </div>
      {/* Service Item 3 */}
      <div className="service-item bg-gradient-to-br from-yellow-100 to-orange-50 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
        <div className="icon bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
          <i className="fas fa-graduation-cap text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-yellow-600 mb-4">EdTech Solutions</h3>
        <p className="text-gray-700">
          Innovative tools and platforms to enhance learning and engagement in education.
        </p>
      </div>
      {/* Add More Services as Needed */}
    </div>
  </div>
</section>

<section className="contact-us-section py-16 text-gray-800">
  <div className="container mx-auto px-6 lg:px-20 text-center">
    <h2 className="text-4xl font-extrabold mb-8">Contact Us</h2>
    <p className="text-lg mb-12 leading-relaxed">
      Have questions or want to connect? We'd love to hear from you. Fill out the form below!
    </p>
    <form className="contact-form max-w-3xl mx-auto bg-white/50 backdrop-blur-md rounded-lg shadow-md p-8">
      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        />
      </div>
      {/* Email Field */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        />
      </div>
      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          rows="5"
          required
        ></textarea>
      </div>
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</section>


<Footer/>

    </div>
  );
};

export default AppLayout;
