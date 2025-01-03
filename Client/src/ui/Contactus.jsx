import React from 'react'
import '../css/AppLayout/ContactUs.css'
const Contactus = () => {
  return (
    <div>
      
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

    </div>
  )
}

export default Contactus
