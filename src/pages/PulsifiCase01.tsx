import React from 'react';

const PulsifiCase01 = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <a href="/projects" className="text-blue-600 font-medium mt-2 inline-block">← Back to projects</a>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pulsifi SaaS Navigation Redesign</h1>
          <p className="text-xl text-gray-600">A case study on improving navigation experience</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">UX Design</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">SaaS</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">AI</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Figma</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">React</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">TailwindCSS</span>
          </div>
        </div>

        {/* Problem Statement Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              As Pulsifi's SaaS platform grew, the traditional top navigation bar became increasingly cluttered and less intuitive. 
              Users struggled to navigate through the expanding feature set, leading to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Reduced user efficiency in accessing key features</li>
              <li>Confusion about feature hierarchy and organization</li>
              <li>Limited scalability for adding new features</li>
              <li>Inconsistent navigation patterns across different sections</li>
            </ul>
          </div>
        </section>

        {/* Communication Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Research & Analysis</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Conducted user interviews and surveys</li>
                <li>Analyzed navigation patterns and user flows</li>
                <li>Reviewed competitor solutions</li>
                <li>Identified pain points and opportunities</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Stakeholder Collaboration</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Regular meetings with product team</li>
                <li>Feedback sessions with key users</li>
                <li>Iterative design reviews</li>
                <li>Technical feasibility discussions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Solution</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Sidebar Navigation</h3>
              <p className="text-gray-800 mb-4">
                We transitioned to a hierarchical sidebar navigation that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provides better visual hierarchy</li>
                <li>Supports nested menu items</li>
                <li>Offers more space for feature expansion</li>
                <li>Maintains consistent visibility</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Before</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Top Navigation Screenshot]
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">After</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Sidebar Navigation Screenshot]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Efficiency</h3>
              <p className="text-gray-700">
                40% reduction in time spent navigating between features
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">User Satisfaction</h3>
              <p className="text-gray-700">
                85% of users reported improved navigation experience
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Scalability</h3>
              <p className="text-gray-700">
                Seamless integration of 10+ new features post-implementation
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Early user involvement is crucial for successful navigation redesign</li>
              <li>Iterative testing helps refine the navigation structure</li>
              <li>Clear information architecture supports intuitive navigation</li>
              <li>Flexibility in design allows for future scalability</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PulsifiCase01;