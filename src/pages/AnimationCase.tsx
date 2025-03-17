import React, { useState, useEffect } from 'react';

const AnimationCase = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 font-medium mt-2 inline-block cursor-pointer"
        >
          ← Back
        </button>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Animation & Video Production</h1>
          <p className="text-xl text-gray-600">Crafting engaging visual stories through animation and video</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Animation</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Video Production</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Client Management</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Hand Drawing</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Video Editing</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Drone Photography</span>
          </div>
        </div>

        {/* Mustard Seed Foundation Project */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Mustard Seed Foundation Project</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-800 mb-4">
              A collaborative project with Mustard Seed Foundation in Singapore, showcasing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Custom hand-drawn animations</li>
              <li>Direct client communication and management</li>
              <li>End-to-end project ownership</li>
              <li>Creative problem-solving in visual storytelling</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Animation Showcase</h3>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 flex-col gap-4">
                <video
                  className="rounded-lg max-w-full w-full"
                  controls
                  preload="metadata"
                >
                  <source src="/portfolio/assets/images/animation/28_julyFinal_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
               
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Background selection</h3>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 flex-col gap-4">
                <video
                  className="rounded-lg max-w-full w-full"
                  controls
                  preload="metadata"
                >
                  <source src="/portfolio/assets/images/animation/Tree_only_clean1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
               
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 flex-col gap-4">
               
                <video
                  className="rounded-lg max-w-full w-full"
                  controls
                  preload="metadata"
                >
                  <source src="/portfolio/assets/images/animation/tree_growing.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
              </div>
            </div>
          </div>
        </section>

        {/* Video Production Capabilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Video Production Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Equipment Proficiency</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Drone aerial photography and videography</li>
                <li>Professional digital camera operation</li>
                <li>Mobile videography optimization</li>
                <li>Video editing and post-production</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Marketing Integration</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Content optimization for social media</li>
                <li>Brand message alignment</li>
                <li>Engaging storytelling techniques</li>
                <li>Cross-platform content adaptation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Management */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Client Communication & Project Management</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Communication Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Direct client interaction via WhatsApp</li>
                  <li>Clear requirement gathering</li>
                  <li>Regular progress updates</li>
                  <li>Feedback integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Project Management</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Timeline management</li>
                  <li>Milestone tracking</li>
                  <li>Quality assurance</li>
                  <li>Client satisfaction focus</li>
                </ul>
              </div>
            </div>
            
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Video Showcase</h3>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 flex-col gap-4">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/hwfFyzAED2Y"
                    title="Video Showcase"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            </div>
        </section>

        {/* Professional Contact Section */}
        <div className="p-6 border rounded-lg bg-gray-50 hover:bg-white transition-colors duration-300">
          <h3 className="text-lg font-bold">Let's Connect!</h3>
          <p className="text-gray-600">Looking for a creative professional for your next project?</p>
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
      </div>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-700 focus:outline-none ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default AnimationCase;