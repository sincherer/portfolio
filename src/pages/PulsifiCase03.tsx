import React from 'react';

const PulsifiCase03 = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <a href="/projects" className="text-blue-600 font-medium mt-2 inline-block">← Back to projects</a>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Figma-Google Sheets Automation</h1>
          <p className="text-xl text-gray-600">A case study on streamlining design text management</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Automation</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Design Ops</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Productivity</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Figma</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Google Sheets</span>

          </div>
        </div>

        {/* Problem Statement Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              Pulsifi's design team faced significant challenges with text management across multiple Figma files:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Manual text replacement was time-consuming and error-prone</li>
              <li>Maintaining consistency across multiple language versions was difficult</li>
              <li>Content updates required designer intervention for each text element</li>
              <li>No centralized system for managing text content across designs</li>
            </ul>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Research & Planning</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Analyzed existing text management workflow</li>
                <li>Researched Figma API capabilities</li>
                <li>Explored Google Sheets integration options</li>
                <li>Defined automation requirements</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Development</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Created Google Sheets template for text content</li>
                <li>Developed Apps Script for data processing</li>
                <li>Built Figma plugin for text replacement</li>
                <li>Implemented two-way synchronization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Solution</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Automated Text Management System</h3>
              <p className="text-gray-800 mb-4">
                We developed an integrated solution that connects Figma designs with Google Sheets:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Centralized text content management in Google Sheets</li>
                <li>One-click text synchronization with Figma files</li>
                <li>Automatic text extraction from designs</li>
                <li>Multi-language support with version control</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Before</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Manual Text Editing Process]
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">After</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Automated Text Management System]
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
              <h3 className="text-xl font-medium mb-3">Time Savings</h3>
              <p className="text-gray-700">
                90% reduction in text management time
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Error Reduction</h3>
              <p className="text-gray-700">
                95% decrease in text inconsistencies
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Workflow Efficiency</h3>
              <p className="text-gray-700">
                80% faster content updates across designs
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>API integration can dramatically improve design workflows</li>
              <li>Separating content from design enables faster iterations</li>
              <li>Cross-platform automation requires careful planning</li>
              <li>Designer-friendly tools increase adoption and satisfaction</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PulsifiCase03;