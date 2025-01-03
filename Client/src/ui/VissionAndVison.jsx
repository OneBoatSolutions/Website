import React from 'react'
import '../css/AppLayout/VisionAndMission.css'

const VissionAndVison = () => {
  return (
    <div>
      <section className="vision-mission-section relative p-8 mt-7 flex flex-col items-center text-center">
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

    </div>
  )
}

export default VissionAndVison
