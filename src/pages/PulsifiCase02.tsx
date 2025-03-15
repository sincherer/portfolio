import React from 'react';

const PulsifiCase02 = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <a href="/projects" className="text-blue-600 font-medium mt-2 inline-block">← Back to projects</a>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Analytics Integration in Pulsifi SaaS</h1>
          <p className="text-xl text-gray-600">A case study on implementing data-driven insights</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Analytics</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">SaaS</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Enterprise</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Google Analytics</span>
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Looker Studio</span>
            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full">GTM</span>
          </div>
        </div>

        {/* Problem Statement Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              Pulsifi's SaaS platform lacked comprehensive analytics capabilities, making it difficult to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Track user engagement and behavior patterns</li>
              <li>Measure feature adoption and usage metrics</li>
              <li>Understand job posting performance</li>
              <li>Make data-driven product decisions</li>
            </ul>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Technical Integration</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Implemented Google Analytics 4</li>
                <li>Set up Google Tag Manager</li>
                <li>Created custom event tracking</li>
                <li>Developed data collection strategy</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Dashboard Development</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Designed Looker Studio dashboards</li>
                <li>Created automated reporting</li>
                <li>Built custom metrics visualization</li>
                <li>Implemented real-time monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Solution</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Comprehensive Analytics System</h3>
              <p className="text-gray-800 mb-4">
                We implemented a robust analytics infrastructure that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Real-time user behavior tracking</li>
                <li>Custom event monitoring</li>
                <li>Automated performance reporting</li>
                <li>Interactive data visualization</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Before</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Basic Metrics Dashboard]
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">After</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Advanced Analytics Dashboard]
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
              <h3 className="text-xl font-medium mb-3">User Insights</h3>
              <p className="text-gray-700">
                200% increase in user behavior understanding
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Feature Adoption</h3>
              <p className="text-gray-700">
                45% improvement in feature usage tracking
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Decision Making</h3>
              <p className="text-gray-700">
                70% faster data-driven decision process
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Proper event tracking setup is crucial for meaningful insights</li>
              <li>Regular dashboard optimization improves data accessibility</li>
              <li>Automated reporting saves significant time and resources</li>
              <li>Data visualization enhances stakeholder communication</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PulsifiCase02;