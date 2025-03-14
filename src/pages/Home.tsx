import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 ">
      {/* Hero Section */}
      <section className="text-center py-12 ">
        <img
          src="../assets/images/profile.png"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4 animate-fade-right animate-once animate-ease-out animate-delay-1000">
          Designing Experiences, Elevating Brands.
        </h1>
        <p className="text-gray-600 mt-2">
          I'm SinCher, a UI/UX designer based in Kuala Lumpur.
        </p>
        <br />
        <p>
          I craft intuitive and impactful digital experiences that connect users
          with brands seamlessly. With a strong foundation in UI/UX design,
          branding, and marketing, I transform ideas into engaging visuals and
          functional designs. From designing scalable systems to enhancing user
          journeys, I create experiences that not only look great but drive real
          results.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-gray-600">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} aria-label="Instagram" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} aria-label="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} aria-label="LinkedIn" />
          </a>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-lg font-bold">Stay up to date</h3>
        <p className="text-gray-600">Get notified when I publish something new.</p>
        <input
          type="email"
          placeholder="Email address"
          className="w-full mt-2 px-4 py-2 border rounded-md"
        />
        <button className="w-full mt-2 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700">
          Join
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12">
        <p>© 2025 SinCher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;