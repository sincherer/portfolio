import React, { useState, useEffect } from "react";
import { TypewriterText } from "./Home";

const UsecasePulsifi = () => {
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
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = '/projects';
            }
          }}
          className="text-blue-600 font-medium mb-8 inline-block cursor-pointer"
        >
          ← Back
        </button>

        {/* Header Section */}
        <section className="mb-16 animate-fade-in text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-text-focus">
            <TypewriterText text="Transforming Talent Management with AI" />
          </h2>
          <h4 className="text-2xl font-semibold text-gray-600 mb-8 animate-slide-in">
            Pulsifi: Building Better Workplace Culture Through People Data
          </h4>

          {/* Role & Technologies */}
          <div className="flex flex-wrap gap-2 justify-center mt-4 mb-8">
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Senior UI/UX Designer</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">AI/ML</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Enterprise SaaS</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2 mb-8">
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">React</span>
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Angualr</span>
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Ant Design</span>
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Figma</span>
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Product Fruits</span>
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Analytics</span>
          </div>

          {/* Hero Image */}
          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/portfolio/assets/images/Pulsifi-Showcase.png"
                alt="Pulsifi Platform Overview"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Executive Summary */}
          <div className="max-w-3xl mx-auto text-left p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              As a UI/UX Designer at Pulsifi, I worked closely with the COO and cross-functional teams to implement AI-driven solutions for talent management. As part of a two-person design team, I contributed significantly to the design and implementation of features that revolutionized how organizations understand and develop their people.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-600">Improvement in hiring success rate</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-600">Increase in team performance</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <p className="text-gray-600">Better culture fit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Responsibilities & Achievements */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities & Achievements</h3>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Leadership & Innovation</h4>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Led UX design initiatives in a team of two, reporting directly to the COO</li>
                <li>Introduced Product Fruits for enhanced user onboarding and feedback collection</li>
                <li>Automated feedback integration with Freshdesk for streamlined support</li>
                <li>Mentored junior designers and facilitated cross-team collaboration</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As a UI/UX Designer at Pulsifi, I collaborated closely with the COO and cross-functional teams to implement AI-driven solutions for talent management. Working as one of two designers, I contributed significantly to the design and implementation of features that revolutionized how organizations understand and develop their people.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Technical Excellence</h4>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Revamped the entire design system using Atomic Design principles</li>
                <li>Implemented DEI-proven color systems for accessibility</li>
                <li>Integrated NG-Zorro components with consistent patterns</li>
                <li>Reduced cognitive load through unified system behavior</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Collaborative Achievements</h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-600">
                    <li>Collaborated in UX design initiatives as part of a two-person design team</li>
                    <li>Implemented Product Fruits for enhanced user onboarding and feedback collection</li>
                    <li>Contributed to feedback integration with Freshdesk for streamlined support</li>
                    <li>Participated in cross-team collaboration and knowledge sharing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Technical Excellence</h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-600">
                    <li>Contributed to revamping the design system using Atomic Design principles</li>
                    <li>Implemented DEI-proven color systems for accessibility</li>
                    <li>Collaborated on integrating NG-Zorro components with consistent patterns</li>
                    <li>Enhanced user experience through unified system behavior</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process & Solutions */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Process & Solutions</h3>
          
          {/* Success Profile Creation */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-6">Success Profile Creation</h4>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-4">Challenge</h5>
                <p className="text-gray-600 mb-4">
                  HR teams struggled with creating consistent and objective success profiles for different roles, leading to subjective hiring decisions and misaligned team expectations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-4">Solution</h5>
                <p className="text-gray-600 mb-4">
                  Developed an AI-driven framework that combines:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Role-specific fit score calculations</li>
                  <li>Seniority level considerations</li>
                  <li>Skills proficiency mapping</li>
                  <li>Assessment evaluation metrics</li>
                </ul>
              </div>
            </div>
            {/* Before & After Images */}
            <div className="grid md:grid-cols-1 gap-8 mt-8">
              <div>
                <h5 className="text-lg font-medium mb-3">Success Profile Planning in Figma</h5>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center p-4">
                  <img
                    src="/portfolio/assets/images/success-profile.png"
                    alt="Success Profile Creation in Figma"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h5 className="text-lg font-medium mb-3">Bring to Real Life</h5>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center p-4">
                  <img
                    src="/portfolio/assets/images/SuccessProfil.gif"
                    alt="Success Profile Creation"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h5 className="text-lg font-medium mb-3">Success Profile implementation in Recruitment</h5>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center p-4">
                  <img
                    src="/portfolio/assets/images/SP-implementation.gif"
                    alt="Implementation Success Profile in Recruitment processes"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Functional Assessments */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-6">Functional Assessments</h4>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold mb-4">Implementation</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Role-specific skill evaluation frameworks</li>
                    <li>Automated scoring mechanisms</li>
                    <li>Comprehensive skill proficiency analysis</li>
                    <li>Integration with success profile matching</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-4">Results</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>30% reduction in assessment time</li>
                    <li>45% improvement in skill matching accuracy</li>
                    <li>90% user satisfaction with assessment process</li>
                    <li>25% increase in successful placements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Lessons Learned */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact & Lessons Learned</h3>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Impacts</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Reduced hiring time by 40%</li>
                  <li>Improved team performance metrics by 35%</li>
                  <li>Decreased employee turnover by 25%</li>
                  <li>Enhanced user satisfaction by 90%</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Lessons Learned</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Early stakeholder involvement is crucial</li>
                  <li>Data-driven decisions lead to better outcomes</li>
                  <li>Continuous user feedback improves product quality</li>
                  <li>Cross-functional collaboration enhances innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Contact */}
        <section className="bg-gray-50 p-8 rounded-lg hover:bg-white transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-gray-600 mb-6">Looking for a passionate UI/UX designer to join your team?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="../assets/images/ErSinCher Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-700 text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="mailto:sincher.er@gmail.com"
              className="flex-1 border border-gray-900 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-100 text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
        </section>
      </main>
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

export default UsecasePulsifi;
