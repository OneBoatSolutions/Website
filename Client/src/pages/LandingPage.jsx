import React from "react";
import { Link } from "react-router-dom";
import ZVerseNav from "../components/ZVerseNav";
import "../css/LandingPage.css";
import {
  Code,
  GraduationCap,
  Rocket,
  Heart,
  BookOpen,
  Feather,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="landing">
      <ZVerseNav />
      <div className="bg-gradient-to-br from-indigo-50 to-white Zverse-hero-container">
        <div className="flex mx-auto h-screen-[80] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            <div className="md:w-1/2 mb-8 md:mb-0 flex-col text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Unlock Your Potential with Zverse
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Empowering students to solve real-world problems, build MVPs,
                and develop entrepreneurial skills. Courses designed for PUC,
                Engineering, BCA, and Diploma students.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link
                  to="/courses"
                  className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/signup"
                  className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold text-lg border-2 border-indigo-600 hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
              <img
                src="/programming-and-we-design.jpg"
                alt="Programming and Design"
                className="max-w-full h-auto rounded-lg md:h-[600px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Motivation Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Motivation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering the next generation to become problem solvers,
            innovators, and leaders in their fields. Together, we shape the
            future by building skills and creating opportunities for success.
          </p>
          <Heart className="text-red-500 w-16 h-16 mx-auto" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            About Zverse
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Zverse is dedicated to bridging the gap between education and
            industry. We provide students with the tools and resources to excel,
            from cutting-edge courses to mentorship and project guidance.
          </p>
          <Feather className="text-indigo-600 w-16 h-16 mx-auto" />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skill Development",
                Icon: GraduationCap,
                desc: "Learn skills that matter in today’s tech-driven world.",
              },
              {
                title: "Innovative Courses",
                Icon: BookOpen,
                desc: "Access unique courses designed for your academic journey.",
              },
              {
                title: "Project Building",
                Icon: Rocket,
                desc: "Build MVPs and prototypes to solve real-world problems.",
              },
            ].map(({ title, Icon, desc }) => (
              <div
                key={title}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <Icon className="text-indigo-600 w-10 h-10 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={`/blog-placeholder-${index + 1}.jpg`}
                  alt={`Blog Post ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Blog Title {index + 1}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover insights, tips, and inspiration for your journey in
                    technology and beyond.
                  </p>
                  <Link
                    to={`/blog/${index + 1}`}
                    className="text-indigo-600 font-semibold mt-4 block hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe to One Boat Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Stay updated with the latest courses, events, and insights delivered
            straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 w-full sm:w-96 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Courses</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/domain" className="hover:text-indigo-500">
                    Domain
                  </a>
                </li>
                <li>
                  <a href="/student-portal" className="hover:text-indigo-500">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="/internship" className="hover:text-indigo-500">
                    Internship
                  </a>
                </li>
                <li>
                  <a
                    href="/project-development"
                    className="hover:text-indigo-500"
                  >
                    Project Development
                  </a>
                </li>
                <li>
                  <a href="/mock-exams" className="hover:text-indigo-500">
                    Mock CET/JEE
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-indigo-500">
                      Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Student Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faq" className="hover:text-indigo-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-indigo-500">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/guides" className="hover:text-indigo-500">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:text-indigo-500">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">ZVerse</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-indigo-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/team" className="hover:text-indigo-500">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-indigo-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/testimonials" className="hover:text-indigo-500">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Social Links
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Facebook className="text-indigo-500" size={16} />
                  <a
                    href="https://facebook.com"
                    className="hover:text-indigo-500"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Twitter className="text-indigo-500" size={16} />
                  <a
                    href="https://twitter.com"
                    className="hover:text-indigo-500"
                  >
                    Twitter
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Linkedin className="text-indigo-500" size={16} />
                  <a
                    href="https://linkedin.com"
                    className="hover:text-indigo-500"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Instagram className="text-indigo-500" size={16} />
                  <a
                    href="https://instagram.com"
                    className="hover:text-indigo-500"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Branding */}
          <div className="text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} ZVerse with{" "}
              <strong>One Boat Solutions</strong>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
