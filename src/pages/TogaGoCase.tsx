import React from 'react';

const TogaGoCase = () => {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
        <div className="mb-8">
        <a href="/projects" className="text-blue-600 font-medium mt-2 inline-block">← Back to projects</a>
      </div>
      <div className="mt-12 space-y-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">TogaGo Website Redesign</h1>
          <p className="text-gray-600 mt-4">
            Transforming a complex booking system into a streamlined user experience
          </p>
        </div>

        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Role</h3>
              <p className="text-gray-600">UI/UX Designer</p>
              <h3 className="font-medium">Duration</h3>
              <p className="text-gray-600">1 Month</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Sketch'].map(tool => (
                  <span key={tool} className="text-xs px-2 py-1 bg-cyan-50 text-cyan-600 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Challenge</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              TogaGo's existing website faced several critical issues that were impacting user experience and conversion rates:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Overly complicated booking process with redundant steps</li>
              <li>Repeated payment steps causing user frustration</li>
              <li>Missing elements and unclear flow during search and booking</li>
              <li>Inconsistent visual design and art style across the platform</li>
            </ul>
          </div>
        </section>

        {/* Research & Analysis */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Research & Analysis</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our research phase involved:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>User interviews with frequent travelers</li>
              <li>Competitive analysis of leading travel booking platforms</li>
              <li>Heatmap analysis of user behavior on the existing site</li>
              <li>User journey mapping to identify pain points</li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Solution</h2>
          <div className="space-y-4">
            <h3 className="font-medium">1. Streamlined Booking Process</h3>
            <p className="text-gray-600">
              Reduced the booking steps from 7 to 4 by combining related actions and eliminating redundant confirmations.
            </p>

            <h3 className="font-medium">2. Unified Payment Flow</h3>
            <p className="text-gray-600">
              Consolidated payment steps into a single, coherent flow with clear progress indicators.
            </p>

            <h3 className="font-medium">3. Enhanced Search Experience</h3>
            <p className="text-gray-600">
              Implemented smart filters, auto-suggestions, and real-time availability updates.
            </p>

            <h3 className="font-medium">4. Consistent Design System</h3>
            <p className="text-gray-600">
              Created a comprehensive design system with consistent typography, color schemes, and component library.
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Impact & Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-600">40%</h3>
              <p className="text-gray-600">Increase in Booking Completion Rate</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-600">60%</h3>
              <p className="text-gray-600">Reduction in Customer Support Queries</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-600">25%</h3>
              <p className="text-gray-600">Improvement in User Satisfaction</p>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Learnings</h2>
          <p className="text-gray-600">
            This project reinforced the importance of user-centered design and the value of thorough research in creating effective solutions. The iterative design process and continuous user feedback were crucial in achieving significant improvements in both user experience and business metrics.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TogaGoCase;