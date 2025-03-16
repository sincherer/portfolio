import React, { useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaBehance, FaWhatsapp } from "react-icons/fa";

interface TypewriterProps {
  text: string;
}

export const TypewriterText = ({ text }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 ">
      {/* Hero Section */}
      <section className="text-center py-12 ">
        <img
          src="/portfolio/assets/images/profile.png"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4">
          <TypewriterText text="Designing Experiences, Elevating Brands." />
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
          <a href="https://wa.link/v1kjv5" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} aria-label="LinkedIn" />
          </a>
          <a href="https://my.linkedin.com/in/sincherer" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} aria-label="LinkedIn" />
          </a>
          <a href="https://www.behance.net/sincherer/projects" target="_blank" rel="noopener noreferrer">
            <FaBehance size={20} aria-label="Behance" />
          </a>
          <a href="https://github.com/sincherer" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} aria-label="GitHub" />
          </a>
          <a href="https://instagram.com/sincherr" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} aria-label="Instagram" />
          </a>
        </div>
      </section>

      {/* Professional Contact Section */}
      <div className="p-6 border rounded-lg bg-gray-50 hover:bg-white transition-colors duration-300">
        <h3 className="text-lg font-bold">Let's Connect!</h3>
        <p className="text-gray-600">Looking for a passionate UI/UX designer to join your team?</p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <a
            href="./assets/images/ErSinCher Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-center flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a
            href="mailto:sincher.er@gmail.com"
            className="flex-1 border border-gray-900 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 text-center flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12">
        <p>© 2025 SinCher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;